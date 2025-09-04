import { ProductProps } from "~/types/ProductProps";
import { prisma } from "./db";

export const createProduct = async (newProduct: ProductProps) => {
    try{
        const product = await prisma.product.create({
            data: {
                name: newProduct.name,
                description: newProduct.description,
                price: newProduct.price,
                image: newProduct.image.filename,
                shop: {
                    connect: { id: newProduct.shopId }
                },
                category: {
                    connect: { id: newProduct.categoryId }
                }
            }
        });

        return product;
    }catch(error){
        throw new Error("Falha ao criar produto: " + error);
    }
}

export const readProduct = async (shopId: number) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                shopId: shopId
            }
        });

        return products
    }catch(error){
        throw new Error("Falha ao procurar produtos." + error);
    }
}

export const updateProduct = async (updatedProduct: ProductProps) => {
    try {
        const product = await prisma.product.update({
            where: {
                id: updatedProduct.id,
                shopId: updatedProduct.shopId
            },
            data: {
                name: updatedProduct.name,
                description: updatedProduct.description,
                price: updatedProduct.price,
                image: updatedProduct.image,
                categoryId: updatedProduct.categoryId,
                visible: updatedProduct.visible 
            },
            include: {
                category: updatedProduct.categoryId ? true : false
            }
        });

        return product;
    }catch(error){
        throw new Error("Falha ao atualizar produto: " + error);
    }
}

export const deleteProduct = async (productId: number, shopId: number) => {
    try{
        const product = await prisma.product.delete({
            where: {
                id: productId,
                shopId: shopId
            }
        });

        return product;
    }catch(error){
        throw new Error("Falha ao deletar produto: " + error);
    }
}

export const readOneProduct = async ( shopId: number, id?: number) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id,
                shopId: shopId
            }
        });

        return product
    }catch(error){
        throw new Error("Falha ao procurar produto." + error);
    }
}