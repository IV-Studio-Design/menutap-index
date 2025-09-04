import { findAll } from "~/server/repository/category";

export default defineEventHandler(async (event) => {
    const query  = getQuery(event);
    const shopId = Number(query.shopId)

    if(!shopId){
        throw createError({
            statusCode: 403,
            message: "Preencha todos os campos!"
        });
    }

    const categories = await findAll(shopId);

    if(!categories){
        throw createError({
            statusCode: 400,
            message: "Nenhuma categoria encontrada."
        });
    }

    setResponseStatus(event, 200, "OK");
    return {
        message: "Categorias encontradas com sucesso!",
        categories
    } 
});