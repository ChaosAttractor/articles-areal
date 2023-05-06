import { Comments } from "../models/comments.js";
import { Articles } from "../models/articles.js";
import { Op } from "sequelize";
import moment from "moment/moment.js";

const findAllBetweenDates = async (req, res) => {
  try {
    const dateFrom = req.query.dateFrom;
    const dateTo = req.query.dateTo;

    const comment = await Comments.findAll({
      order: [["articleId", "ASC"]],
      include: Articles,
      where: {
        createdAt: {
          [Op.and]: {
            [Op.gte]: new Date(moment(dateFrom).format()),
            [Op.lte]: new Date(moment(dateTo).format()),
          },
        },
      },
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Не удалось отфильтровать комментарии." });
  }
};

export { findAllBetweenDates };
