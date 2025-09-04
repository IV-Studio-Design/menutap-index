import { readCategory } from "~/server/repository/category";
import { createProduct } from "~/server/repository/product";
import { ProductProps } from "~/types/ProductProps";

import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getImageUrl } from "@/server/utils/getImageUrl";

const s3 = new S3Client({
    region: process.env.BUCKET_REGION
});

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const body = await readMultipartFormData(event);

    const product: ProductProps = {
        name: "",
        description: "",
        price: 0,
        image: undefined,
        visible: true,
        shopId: 0,
        categoryId: 0
    }

    product.image = body?.find(item => item.type?.split('/')[0] === 'image')
    product.image.filename = uuidv4() // change image name to uuid
    product.shopId = user.shopId

    body?.shift()
    body?.forEach(item => {
        if(item.name){
            product[item.name] = Buffer.from(item.data).toString()
            product['price'] = Number(product['price'])
            product['categoryId'] = Number(product['categoryId'])
        } 
    })

    if(product.categoryId === null){
        throw createError({
            status: 403,
            message: "Você precisa selecionar uma categoria para o produto!"
        });
    }

    const category = await readCategory(product.categoryId, product.shopId);

    if(!category){
        throw createError({
            status: 404,
            message: "Essa categoria não existe!"
        });
    }

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'products-images/' + product.image.filename,
        Body: product.image.data,
        ContentType: product.image.type
    }

    const command = new PutObjectCommand(params)

    const productCreated = await createProduct(product).catch((error) => {
        throw createError({
            status: 400,
            message: "Erro ao criar produto."
        });
    })

    try{
        await s3.send(command);
    }catch(error){
        throw createError({
            status: 400,
            message: "Erro ao enviar imagem produto."
        });
    }

    productCreated.image = await getImageUrl(productCreated.image).catch((error) => {
        throw createError({
            status: 400,
            message: "Ocorreu um erro ao criar link para a imagem do produto."
        });
    })

    setResponseStatus(event, 201, 'Created')
    return {
        message: "Produto criado com sucesso",
        productCreated: productCreated
    }
});