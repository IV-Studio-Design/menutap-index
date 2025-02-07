import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "./db";

export const createShop = async (shop: any) => {
    try {
        const shopCreated = await prisma.shop.create({
            data: {
                name: shop.name,
                url_name: shop.url_name,
                User: {
                    connect: { id: shop.userId }
                }
            }
        });
        return shopCreated;
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === "P2002"){
                throw new Error("Essa loja já existe!", { cause: "P2002"});
            }
        }
    }
}

export const readShop = async (urlName: string) => {
    try {
        const shopFinded = await prisma.shop.findUnique({
            where: {
                url_name: urlName,
            }
        });
        return shopFinded;
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            throw new Error("Aconteceu um erro desconhecido!", { cause: error.code });
        }
    }
}