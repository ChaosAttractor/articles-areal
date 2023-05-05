import express from "express";
import { findAllBetweenDates } from "../controllers/analyticController.js";

const router = express.Router();

router.get("/comments/", findAllBetweenDates);

export { router };
