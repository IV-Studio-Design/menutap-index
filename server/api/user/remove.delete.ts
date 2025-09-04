import { deleteUser } from "~/server/repository/user";
import { UserProps } from "~/types/UserProps";

export default defineEventHandler(async (event) => {
    const { id, password }: UserProps = await readBody(event);

    if(!id || !password){
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            data: {
                error: "Preencha todos os campos!"
            }
        });
    }

    try{ 
        const userDeleted = await deleteUser(id, password);

        setResponseStatus(event, 200, "Ok");
        return {
            message: "Usuário deletado com sucesso!",
            data: userDeleted
        }
    }catch(err){
        if(err instanceof Error){
            if(err.cause === "P2025"){
                throw createError({
                    statusCode: 401,
                    statusMessage: "Unauthorized",
                    data: {
                        error: err.message,
                        field: "password"
                    }
                });
            }
        }
    }
});