import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

const uploadOnCloudinary= async(localFilePath)=>{
    try {
        if(!localFilePath)return null
       const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file is uploaded on cloudinary
        console.log("File is Uploaded",response.url)
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload oeration got failed
        return null
    }
}

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });