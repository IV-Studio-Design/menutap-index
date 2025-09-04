import { readOneProduct, updateProduct } from "~/server/repository/product";
import { ProductProps } from "~/types/ProductProps";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getImageUrl } from "@/server/utils/getImageUrl";

const s3 = new S3Client({
    region: process.env.BUCKET_REGION
});

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const productId = Number(getRouterParam(event, 'id'));
    const body = await readMultipartFormData(event);

    const product: ProductProps = {
        id: productId,
        name: "",
        description: "",
        price: 0,
        image: undefined,
        visible: true,
        shopId: 0,
        categoryId: 0
    }
    
    const image = body?.find(item => item.type?.split('/')[0] === 'image')
    if(image){
        product.image = image
        body?.shift()
    }

    product.shopId = user.shopId

    body?.forEach(item => {
        if(!item.name) return

        const rawValue = Buffer.from(item.data).toString();
        const value = rawValue === 'undefined' ? undefined : rawValue;

        switch(item.name){
            case 'id':
            case 'price':
            case 'categoryId':
                const num = Number(value);
                product[item.name] = isNaN(num) ? undefined : num;
                break;
            case 'visible':
                product.visible = value !== 'false';
                break;
            default:
                product[item.name] = value
        }
    });

    if(product.image){
        const oldProduct = await readOneProduct(product.shopId, product.id)

        const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: 'products-images/' + oldProduct?.image,
            Body: product.image.data,
            ContentType: product.image.type
        }
        
        const command = new PutObjectCommand(params)

        try{
            await s3.send(command);
        }catch(error){
            throw createError({
                status: 400,
                message: "Erro ao atualizar imagem produto."
            });
        } 
        product.image = oldProduct?.image
    }

    const productUpdated = await updateProduct(product).catch((error) => {
        throw createError({
            status: 400,
            message: "Erro ao atualizar produto."
        });
    });

    productUpdated.image = await getImageUrl(productUpdated.image).catch((error) => {
        throw createError({
            status: 400,
            message: "Ocorreu um erro ao criar link para a imagem do produto."
        });
    })

    setResponseStatus(event, 200, "Ok");
    return {
        message: "Produto atualizado com sucesso!",
        productUpdated: productUpdated
    }
});