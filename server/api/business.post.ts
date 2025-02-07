import { createUser, readUser } from "~/server/repository/user";
import { createShop, readShop } from "../repository/shop";
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
    const {user, shop} = await readBody(event);

    const saltRounds: number = 10
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHashed = await bcrypt.hash(user.password, salt);

    const userExist = await readUser(user.email);

    if(userExist){
        throw createError({
            statusCode: 409,
            statusMessage: "Conflict",
            data: {
                error: "Esse email já existe!",
                field: "email"
            }
        });
    }

    const userCreated = await createUser({
        name: user.name,
        email: user.email,
        password: passwordHashed,
    });
        
    shop.userId = userCreated?.id;

    const shopExist = await readShop(shop.url_name);

    if(shopExist){
        throw createError({
            statusCode: 409,
            statusMessage: "Conflict",
            data: {
                error: "Essa loja já existe!"
            }
        });
    }

    const shopCreated = await createShop({
        name: shop.name,
        url_name: shop.url_name,
        userId: shop.userId
    });

    setResponseStatus(event, 201, 'Created');
    return {
        sucess: true,
        message: "Negócio criado com sucesso!",
    }
});