import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
    region: process.env.BUCKET_REGION
})

export const getImageUrl = async (imageName: string) => {
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'products-images/' + imageName
    }
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    return url
}

