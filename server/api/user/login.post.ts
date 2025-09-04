import { readUser } from "~/server/repository/user";
import { UserProps } from "~/types/UserProps";
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
    const { email, password }: UserProps = await readBody(event);

    if(!email || !password){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Preencha todos os campos!"
        });
    }

    const user = await readUser(email);

    if(!user){
        throw createError({
            statusCode: 401,
            statusMessage: "Unathorized",
            message: "Email ou senha incorretos!"
        });
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw createError({
            statusCode: 401,
            statusMessage: "Unathorized",
            message: "Email ou senha incorretos!"
        });
    }

    await setUserSession(event, {
        user: {
            login: user.id,
            email: user.email,
            shopId: user.shops[0].id
        }
    });

    setResponseStatus(event, 200, 'Ok');
    return {
        sucess: true,
        message: "Usuário logado com sucesso!"
    }
});