import { updateCategory } from "~/server/repository/category";

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const { category_name, category_id } = await readBody(event);

    if(!category_name){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Preencha todos os campos!"
        });
    }

    const categoryUpdated = await updateCategory(
        category_name,
        category_id,
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