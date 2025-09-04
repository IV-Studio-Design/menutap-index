import { prisma } from "./db";
import { ShopProps } from "~/types/ShopProps";

export const createShop = async (shopRequest: ShopProps) => {
    try {
        const shop = await prisma.shop.create({
            data: {
                name: shopRequest.name,
                description: shopRequest.description,
                url_name: shopRequest.url_name,
                waiting_time: shopRequest.waiting_time,
                profile_pic: shopRequest.profile_pic,
                banner_pic: shopRequest.banner_pic,
                phone_number: shopRequest.phone_number,
                user: {
                    connect: { id: shopRequest.userId }
                }
            }
        });

        return shop;
    }catch(error){
        throw new Error("Falha ao criar loja: " + error);
    }
}

export const readShop = async (urlName?: string) => {
    try {
        const shop = await prisma.shop.findUnique({
            where: {
                url_name: urlName,
            }
        });

        return shop;
    }catch(error){
        throw new Error("Falha ao ler loja: " + error);
    }
}

export const updateShop = async (shopInfo: ShopProps) => {
    try{
        const shop = await prisma.shop.update({
            where: {
                id: shopInfo.id,
                userId: shopInfo.userId
            },
            data: {
                name: shopInfo.name,
                description: shopInfo.description,
                url_name: shopInfo.url_name,
                brand_colors: {},
                waiting_time: shopInfo.waiting_time,
                profile_pic: shopInfo.profile_pic,
                banner_pic: shopInfo.banner_pic,
                phone_number: shopInfo.phone_number,
                social_media: {},
            }
        });

        return shop;
    }catch(error){
        throw new Error("Falha ao atualizar loja: " + error);
    }
}

export const deleteShop = async (id: number, userId: number, url_name: string) => {
    try{
        const shop = await prisma.shop.delete({
            where: {
                id: id,
                userId: userId,
                url_name: url_name
            }
        });

        return shop;
    }catch(error){
        throw new Error("Falha ao deletar loja: " + error);
    }
}