import express from "express";
import {
  create,
  findOne,
  findAll,
  update,
  remove,
} from "../controllers/commentsController.js";

const router = express.Router();

router.post("/:id/comment", create);
router.get("/:id/comment/:commentid", findOne);
router.get("/:id/comments", findAll);
router.patch("/:id/comment/:commentid", update);
router.delete("/:id/comment/:commentid", remove);

export { router };
