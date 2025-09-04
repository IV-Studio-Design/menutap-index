import { updateShop } from "~/server/repository/shop";
import { ShopProps } from "~/types/ShopProps"

export default defineEventHandler(async (event) => {
    const shopInfo: ShopProps = await readBody(event);

    const updatedShop = await updateShop(shopInfo);

    if(!updatedShop){
        throw createError({
            status: 400,
            message: "Ocorreu um erro ao atualizar loja!"
        });
    }

    setResponseStatus(event, 200, "OK");
    return {
        message: "Loja atualizada com sucesso!",
        data: updatedShop
    }
})