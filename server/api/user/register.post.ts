import { createUser } from "~/server/repository/user";
import { UserProps } from "~/types/UserProps";
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
    try{
        const {name, email, password}: UserProps = await readBody(event);

        const saltRounds: number = 10

        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHashed = await bcrypt.hash(password, salt);

        const userCreated = await createUser({
            name: name,
            email: email,
            password: passwordHashed
        });

        setResponseStatus(event, 201, 'Created');
        return {
            message: "Usuário criado com sucesso!",
            data: userCreated
        }
    }catch(err){
        if(err instanceof Error){
            if(err.cause === "P2002"){
                throw createError({
                    statusCode: 409,
                    statusMessage: "Conflict",
                    data: {
                        error: err.message,
                        field: "email"
                    }
                });
            }
        }
    }
});