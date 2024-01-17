'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const books = [
      {
        name: "Elbrus",
        author: "Tolya",
        img: "https://avatars.mds.yandex.net/get-sprav-products/5234963/2a0000018756d09013566369c1bc52d79770/M_height",
        rating: 0,
        user_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Война и мир",
        author: "Лев Толстой",
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ecbb3822-ee34-42f6-8480-e0920b41a050/600x900",
        rating: 0,
        user_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Преступление и наказание",
        author: "Достоевский",
        img: "https://img3.labirint.ru/rc/a4b18eac0ff2f0d13ab6ec04d04b607d/363x561q80/books49/482353/cover.jpg?1686224200",
        rating: 0,
        user_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ];
    await queryInterface.bulkInsert("Books", books )

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users")
  }
};
