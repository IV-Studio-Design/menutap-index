import { createCategory } from "~/server/repository/category";

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const { category_name } = await readBody(event);

    if(!category_name){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Preencha todos os campos!"
        });
    }

    const categoryCreated = await createCategory(category_name, user.shopId);

    if(!categoryCreated){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Ocorreu um erro ao criar a categoria."
        });
    }

    setResponseStatus(event, 201, "Created");
    return {
        message: "Categoria criada com sucesso!",
        categoryCreated
    }
});