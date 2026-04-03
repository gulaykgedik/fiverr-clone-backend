import config from "../config/enviroment.js";
import { v2 as cloudanary } from "cloudinary";
import { BadRequest } from "./errors.js";
cloudanary.config({
    cloud_name: config.CLOUDINARY_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_SECRET,
});
const uploadToCloud = async (next, file_path, folder, type = "auto", width, height) => {
    try {
        const result = await cloudanary.uploader.upload(file_path, { folder, resource_type: type, width, height, });
        return result;
    }
    catch (error) {
        throw new BadRequest("Failed to upload image to Cloudinary");
    }
};
export default uploadToCloud;
//# sourceMappingURL=upload-to-cloud.js.map