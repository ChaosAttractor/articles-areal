import { Articles } from "../models/articles.js";

const create = async (req, res) => {
  try {
    const article = await Articles.create({
      title: req.body.title,
      desc: req.body.desc,
    });
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ message: "Не удалось создать статью." });
  }
};

const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const findArticle = await Articles.findOne({ where: { id: id } });
    res.status(200).json(findArticle);
  } catch (err) {
    res.status(500).json({ message: "Не удалось найти статью" });
  }
};

const findAll = async (req, res) => {
  try {
    const findArticles = await Articles.findAll();
    res.status(200).json(findArticles);
  } catch (err) {
    res.status(500).json({ message: "Не удалось найти все статьи" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updateArticle = await Articles.update(
      { title: req.body.title, desc: req.body.desc },
      { where: { id: id } }
    );
    res.status(201).json(updateArticle);
  } catch (err) {
    res.status(404).json({ message: "Не удалось обновить статью" });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const removeArticle = await Articles.destroy({
      where: { id: id },
    });
    res.status(201).json(removeArticle);
  } catch (err) {
    res.status(404).json({ message: "Не удалось удалить статью" });
  }
};

export { create, findOne, findAll, update, remove };
