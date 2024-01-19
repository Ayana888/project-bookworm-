"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const books = [
      {
        name: "ТОП       ПРОДАЖ!!! Как сдать экзамен в Эльбрус Буткемп!",
        author: "Анатолий Башкатов",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPVa1aYPccbNxgsF9MHEiSuGDtnDDA9_jFQ&usqp=CAU",

        user_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "НИ СЫ",
        author: "Джен Синсеро",
        img: "https://pro-color.ru/wa-data/public/shop/products/55/50/25055/images/105202/105202.970.jpg",

        user_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Тонкое искусство пофигизма",
        author: "Марк Мэнсон",
        img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/206/186/577/410/618/3/600004764524b0.jpeg",

        user_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Хочу и буду!!!",
        author: "Михаил Лабковский",
        img: "https://ic.pics.livejournal.com/sari_s/10514457/177866/177866_original.jpg",

        user_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Books", books);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users");
  },
};
