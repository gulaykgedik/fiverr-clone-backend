import dotenv from "dotenv";

dotenv.config({path: ".env"});

const config = {
    PORT: process.env.PORT || 3000,
    CLIENT_URL: process.env.CLIENT_URL as string,
    MONGO_URL: process.env.MONGO_URL as string,
    NODE_ENV: process.env.NODE_ENV as "development" | "production" ,

    // Cloudinary config
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME as string,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET as string,

    // JWT config
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_EXPIRES_IN: Number(process.env.JWT_EXPIRES_IN || "30d"),
};

export default config;

export const isDevelopment = config.NODE_ENV === "development";
export const isProduction = config.NODE_ENV === "production";
