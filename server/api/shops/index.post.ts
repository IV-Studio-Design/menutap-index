import { createShop, readShop } from "~/server/repository/shop";
import { ShopProps } from "~/types/ShopProps";

export default defineEventHandler(async (event) => {
    const body: ShopProps = await readBody(event);

    if(!body){
        throw createError({
            status: 403,
            message: "Preencha todos os campos!"
        });
    }

    const urlNameExist = await readShop(body.url_name);

    if(urlNameExist){
        throw createError({
            status: 400,
            message: `A loja "${body.url_name}" já existe!`
        });
    }

    return await createShop(body);
});