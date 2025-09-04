import { deleteCategory } from "~/server/repository/category";

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const { category_id } = await readBody(event);

    const categoryDeleted = await deleteCategory(
        category_id,
        user.shopId
    );

    if(!categoryDeleted){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Ocorreu um erro ao deletar a categoria."
        });
    }

    setResponseStatus(event, 200, "Ok");
    return {
        message: "Categoria deletada com sucesso!"
    }
});