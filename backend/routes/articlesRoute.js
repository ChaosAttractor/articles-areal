import express from "express";

const router = express.Router();

router.post("/article", create);
router.get("/article/:id", findOne);
router.get("/articles", findAll);
router.patch("/article/:id", update);
router.delete("/article/:id", remove);

export { router };
