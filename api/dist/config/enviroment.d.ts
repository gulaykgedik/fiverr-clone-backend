declare const config: {
    PORT: string | number;
    CLIENT_URL: string;
    MONGO_URL: string;
    NODE_ENV: "development" | "production";
    CLOUDINARY_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_SECRET: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: number;
};
export default config;
export declare const isDevelopment: boolean;
export declare const isProduction: boolean;
//# sourceMappingURL=enviroment.d.ts.map