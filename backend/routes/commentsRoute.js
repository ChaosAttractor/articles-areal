import express from "express";

const router = express.Router();

router.post("/:id/comment", create);
router.get("/:id/comment/:commentid", findOne);
router.get("/:id/comments", findAll);
router.patch("/:id/comment/:commentid", update);
router.delete("/:id/comment/:commentid", remove);

export { router };
