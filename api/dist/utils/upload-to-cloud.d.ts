import type { NextFunction } from "express";
declare const uploadToCloud: (next: NextFunction, file_path: string, folder: string, type?: "image" | "video" | "raw" | "auto", width?: number, height?: number) => Promise<import("cloudinary").UploadApiResponse>;
export default uploadToCloud;
//# sourceMappingURL=upload-to-cloud.d.ts.map