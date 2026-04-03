import mongoose from "mongoose";
import config from "./config/enviroment.js";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import gigRoutes from "./routes/gig.routes.js";
import { NotFound } from "./utils/errors.js";
import errorHandler from "./middlewares/error-handler.js";
import cookieParser from "cookie-parser";
import { globalLimiter } from "./utils/rate-limit.js";
import cors from "cors";
mongoose.connect(config.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
// Express app setup
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
//route ları tanımla
app.use("/api/auth", (authRoutes));
app.use("/api/gigs", globalLimiter, gigRoutes);
// 404 route'u tanımla
app.use((req, res, next) => next(new NotFound()));
// Hata yakalama middleware'ini ekle
app.use(errorHandler);
// Api nin çalışağı portu belirle
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
//# sourceMappingURL=server.js.map