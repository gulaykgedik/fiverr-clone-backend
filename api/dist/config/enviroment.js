import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const config = {
    PORT: process.env.PORT || 3000,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGO_URL: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV,
    // Cloudinary config
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
    // JWT config
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: Number(process.env.JWT_EXPIRES_IN || "30d"),
};
export default config;
export const isDevelopment = config.NODE_ENV === "development";
export const isProduction = config.NODE_ENV === "production";
//# sourceMappingURL=enviroment.js.map