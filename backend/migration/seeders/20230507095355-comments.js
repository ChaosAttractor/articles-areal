"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("comments", [
      {
        articleId: 1,
        text: "Крутой комментарий",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 1,
        text: "Не ну анекдот реально смешной",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 2,
        text: "Спасибо, блины не получились. Только лук решил добавить и всё",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 3,
        text: "А шляпа то реально как раз",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 3,
        text: "Классика русского юмора",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 3,
        text: "А армяне и нарды где?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 4,
        text: "Исход битвы не определён. Самость не может подвести.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 4,
        text: "Даже тем кто вне времени, пора ждать конца времён.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null);
  },
};
