import express from "express";
import { createGig, getOneGigs, getAllGigs, deleteGigs,} from "../controllers/gig.controller.js";
import protect from "../middlewares/protect.js";
import upload from "../utils/multer.js";


const router = express.Router();

router.route("/").get(getAllGigs).post(protect,upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "images", maxCount: 6 },
]),createGig);

router.route("/:id").get(getOneGigs).delete(protect,deleteGigs);

export default router;
