import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "./db";
import { UserProps } from "~/types/UserProps";

export const createUser = async ({ name, email, password }: UserProps) => {
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return user
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === "P2002"){
                throw new Error("Esse email já existe!", { cause: "P2002"})
            }
        }
    }
}

export const readUser = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                shops: true
            }
        });

        return user
    }catch(error){
        throw new Error("Falha ao ler usuário: " + error);
    }
}

export const updateUser = async (userInfo: UserProps) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: userInfo.id
            },
            data: {
                name: userInfo.name,
                email: userInfo.email,
                password: userInfo.password
            }
        });

        return user;
    }catch(error){
        throw new Error("Falha ao atualizar usuário: " + error);
    }
}

export const deleteUser = async (id: number, password: string) => {
    try {
        const userToDelete = await prisma.user.delete({
            where: {
                id: id,
                password: password
            }
        });

        return userToDelete;
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === "P2025"){
                throw new Error("Senha incorreta!", { cause: "P2025"});
            }
        }
    }
}