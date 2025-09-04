import { deleteShop, readShop } from "~/server/repository/shop";
import { readUser } from "~/server/repository/user";

export default defineEventHandler(async (event) => {
    const { id, userId, user_email, user_password, url_name } = await readBody(event);

    const userConfirmed = await readUser(user_email, user_password);

    if(!userConfirmed){
        throw createError({
            status: 403,
            message: "Email ou senha incorretos!"
        });
    }

    const shopConfirmed = await readShop(url_name);

    if(!shopConfirmed){
        throw createError({
            status: 403,
            message: "Url incorreto!"
        });
    }

    const deletedShop = await deleteShop(id, userId, url_name);

    if(!deletedShop){
        throw createError({
            status: 400,
            message: "Ocorreu um erro ao deletar loja."
        });
    }

    setResponseStatus(event, 200, "Ok");
    return {
        message: "Loja deletada com sucesso!",
        data: deletedShop
    }
});