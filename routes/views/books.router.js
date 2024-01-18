const router = require("express").Router();
const AddBookForm = require("../../components/AddBookForm");
const { Book } = require("../../db/models");

router.get("/", (req, res) => {
  const html = res.renderComponent(AddBookForm, { title: "Add Book Page" });
  res.send(html);
});

router.get("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOne({ where: { id: bookId } });
    const html = res.renderComponent(BookoPage, { title: "Book page", book });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
