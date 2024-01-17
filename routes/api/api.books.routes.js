const router = require("express").Router();
const { Book } = require("../../db/models");
const BookItem = require("../../components/BookItem");


router.post("/", async (req, res) => {
  try {
    const { name, author, img } = req.body;
    // console.log(name, description, film, img);  // то, что ввели в инпут выйдет консоль на сервере здесь
    const book = await Book.create({
      // создание новой карточки и записывание в базу
      name,
      author,
      img,
      rating: 1,
      user_id: 1,
    });
    const currentBook = await Book.findOne({
      where: { id: book.id },
      //   include: Like,
    });
    // сформировали страницу
    const html = res.renderComponent(
      BookItem,
      { book: currentBook },
    );
    // и отправили, далее идем в add.js
    res.json({
      message: "success",
      html,
    });
    // console.log(hero, 222);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router
