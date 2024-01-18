const router = require("express").Router();
const { Book } = require("../../db/models");
const BookItem = require("../../components/BookItem")


router.post("/", async (req, res) => {
  try {
    const { name, author, img } = req.body;
    const book = await Book.create({
      name,
      author,
      img,
      rating: 1,
      user_id: res.locals.user.id,
    });
    const currentBook = await Book.findOne({
      where: { id: book.id },
    });
    const html = res.renderComponent(BookItem, { book: currentBook });
    res.json({
      message: "success",
      html,
    });
  } catch ({ message }) {
    res.json(`POST: ${message}`);
  }
});

router.put("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const { name, author, img } = req.body;
    const [result] = await Book.update(
      { name, author, img },
      { where: { id: bookId, user_id: res.locals.user.id } }
    );
    //update возвращает массив с числом, поэтому используем деструктуризацию массива
    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
    res.json({ message: "Не твоя вот ты и бесишься!" });
  } catch ({ message }) {
    res.json({ message });
  }
});


module.exports = router;
