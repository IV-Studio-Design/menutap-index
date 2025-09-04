import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { deleteProduct } from "~/server/repository/product";

const s3 = new S3Client({
    region: process.env.BUCKET_REGION
});

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const { product_id } = await readBody(event);
    
    const deletedProduct = await deleteProduct(product_id, user.shopId);

    if(!deletedProduct){
        throw createError({
            status: 400,
            message: "Ocorreu um erro ao deletar o produto."
        });
    }

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'products-images/' + deletedProduct.image
    }

    const command = new DeleteObjectCommand(params);
    await s3.send(command);

    setResponseStatus(event, 200, "Ok");
    return {
        message: "Produto deletado com sucesso!",
    }
});