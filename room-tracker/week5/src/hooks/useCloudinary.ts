import {Cloudinary} from "@Cloudinary/url-gen"


export default function useCloudinary(){
    const cld = new Cloudinary({
        cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
        }
    })

    return {
        Cloudinary: cld
    }
}