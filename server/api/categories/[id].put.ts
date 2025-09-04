import { updateCategory } from "~/server/repository/category";

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const categoryId = getRouterParam(event, 'id');
    const { category_name } = await readBody(event);

    if(!category_name){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Preencha todos os campos!"
        });
    }

    const categoryUpdated = await updateCategory(
        category_name,
        Number(categoryId),
        user.shopId
    );

    if(!categoryUpdated){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Ocorreu um erro ao atualizar categoria."
        });
    }

    setResponseStatus(event, 200, "Ok");
    return {
        message: "Categoria atualizada com sucesso!",
        categoryUpdated
    }
});