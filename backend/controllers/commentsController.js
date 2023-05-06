import { Comments } from "../models/comments.js";

const create = async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await Comments.create({
      text: req.body.text,
      articleId: id,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: "не удалось отправить комментарий" });
  }
};

const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const commentid = req.params.commentid;
    const comment = await Comments.findOne({
      where: { articleId: id, id: commentid },
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Не удалось найти комментарий к статье" });
  }
};

const findAll = async (req, res) => {
  try {
    const id = req.params.id;
    const comments = await Comments.findAll({
      where: { articleId: id },
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: "Не удалось найти комментарии к статье" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const commentid = req.params.commentid;
    const updateComment = await Comments.update(
      { text: req.body.text },
      { where: { articleId: id, id: commentid } }
    );
    res.status(201).json(updateComment);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Не удалось обновить комментарий к статье" });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const commentid = req.params.commentid;
    const removeComment = await Comments.destroy({
      where: { articleId: id, id: commentid },
    });
    res.status(201).json(removeComment);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Не удалось удалить комментарий к статье" });
  }
};

export { create, findOne, findAll, update, remove };
