import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "./db";

export const createUser = async (user: any) => {
    try {
        const userCreated = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        });
        return userCreated;
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === "P2002"){
                throw new Error("Esse email já existe!", { cause: "P2002"});
            }
        }
    }
}

export const readUser = async (userEmail: string) => {
    try {
        const userFinded = await prisma.user.findUnique({
            where: {
                email: userEmail
            }
        });
        return userFinded;
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            throw new Error("Aconteceu um erro desconhecido!", { cause: error.code });
        }
    }
}