import { Comments } from "../models/comments.js";
import { Op } from "sequelize";
import moment from "moment/moment.js";

const findAllBetweenDates = async (req, res) => {
  try {
    const dateFrom = req.query.dateFrom;
    const dateTo = req.query.dateTo;

    let comments;
    if (dateFrom && dateTo) {
      comments = await Comments.findAll({
        where: {
          createdAt: {
            [Op.between]: [
              new Date(moment(dateFrom).format()),
              new Date(moment(dateTo).format()),
            ],
          },
        },
      });
    }
    if (dateFrom && !dateTo) {
      comments = await Comments.findAll({
        where: {
          createdAt: {
            [Op.gte]: new Date(moment(dateFrom).format()),
          },
        },
      });
    }
    if (!dateFrom && dateTo) {
      comments = await Comments.findAll({
        where: {
          createdAt: {
            [Op.lte]: new Date(moment(dateFrom).format()),
          },
        },
      });
    }
    res.status(200).json(comments);
  } catch (err) {
    res.json(err);
    res.status(500).json({ message: "Не удалось удалить комментарий." });
  }
};

export { findAllBetweenDates };
