import { deleteCategory } from "~/server/repository/category";

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const categoryId = getRouterParam(event, 'id');

    const categoryDeleted = await deleteCategory(
        Number(categoryId),
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