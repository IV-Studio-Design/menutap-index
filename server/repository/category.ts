import { prisma } from "./db";

export const createCategory = async (categoryName: string, shopId: number) => {
    try {
        const category = prisma.category.create({
            data: {
                name: categoryName,
                shop: {
                    connect: { id: shopId }
                }
            }
        });

        return category;
    }catch (error){
        throw new Error("Falha ao criar categoria: " + error);
    }
}

export const readCategory = async (categoryId: number, shopId: number) => {
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: categoryId,
                shopId: shopId 
            }
        })

        return category;
    }catch(error){
        throw new Error("Falha ao ler categoria: " + error);
    }
}

export const updateCategory = async (categoryName: string, categoryId: number, shopId: number) => {
    try{
        const category = await prisma.category.update({
            where: {
                id: categoryId,
                shopId: shopId
            },
            data: {
                name: categoryName
            }
        });

        return category
    }catch(error){
        throw new Error("Falha ao atualizar categoria: " + error);
    }
}

export const deleteCategory = async (categoryId: number, shopId: number) => {
    try{
        const category = await prisma.category.delete({
            where: {
                id: categoryId,
                shopId: shopId
            }
        });

        return category;
    }catch(error){
        throw new Error("Falha ao deletar categoria: " + error);
    }
}

export const findAll = async (shopId: number) => {
    try {
        const categorys = await prisma.category.findMany({
            where: {
                shopId: shopId
            }
        });

        return categorys
    }catch(error){
        throw new Error("Falha ao procurar categorias." + error);
    }
}