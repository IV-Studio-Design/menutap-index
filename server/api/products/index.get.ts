import { readProduct } from "@/server/repository/product";
import { getImageUrl } from "@/server/utils/getImageUrl";

export default defineEventHandler(async (event) => {
    const query  = getQuery(event);
    const shopId = Number(query.shopId)

    if(!shopId){
        throw createError({
            statusCode: 403,
            message: "Preencha todos os campos!"
        });
    }

    const products = await readProduct(shopId);

    if(!products){
        throw createError({
            statusCode: 400,
            message: "Nenhum produto encontrado."
        });
    }
    
    // change image property value to aws signed url link
    for(const product of products){
        if(product.image){
            product.image = await getImageUrl(product.image)
        }
    }

    setResponseStatus(event, 200, "OK");
    return {
        message: "Produtos encontrados com sucesso!",
        products
    } 
});