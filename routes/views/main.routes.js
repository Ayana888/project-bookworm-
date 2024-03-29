const router = require("express").Router();
const BookPage = require("../../components/BookPage");
const MainPage = require("../../components/MainPage");


const { Book, Comment, Like, Rating } = require("../../db/models");


const AddBookForm = require("../../components/AddBookForm");
const BookItem = require("../../components/BookItem");
const FormUpdatePage = require("../../components/FormUpdatePage");


router.get("/", async (req, res) => { 
  // const books = await Book.findAll()
  const books = await Book.findAll({
    order: [['id', 'ASC']],
    include: [
      { model: Like },
      // { model: Rating },
    ],
  });


  const html = res.renderComponent(MainPage, { title: "Main page", books });
  res.send(html);
});

router.get("/api/books/:bookId", async (req, res) => {
  const books = await Book.findAll();
  const html = res.renderComponent(MainPage, { title: "Main page", books });

  res.send(html);
});

router.get("/books/update-form/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOne({ where: { id: bookId } });
    const html = res.renderComponent(FormUpdatePage, {
      title: "Update page",
      book,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/books/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOne({ where: { id: bookId } });
    const coments = await Comment.findAll({ where: { book_id: bookId } });
    const html = res.renderComponent(BookPage, {
      title: "Book page",
      book,
      coments,
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/AddBook", (req, res) => {
  const html = res.renderComponent(AddBookForm, {
    title: "Add Book Page",
    user: res.locals.user,
  });

  res.send(html);
});

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
    const html = res.renderComponent(BookItem, {
      book: currentBook,
      user: res.locals.user,
      route,
      children,
    });
    res.json({
      message: "success",
      html,
    });
  } catch ({ message }) {
    res.json(`POST: ${message}`);
  }
});

router.delete("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;

    await Comment.destroy({ where: { book_id: bookId } });
    await Rating.destroy({ where: { book_id: bookId } });
    await Like.destroy({ where: { book_id: bookId } });
    const result = await Book.destroy({ where: {
    id: bookId,
    user_id: res.locals.user.id,
  }});
  // await Like.destroy({ where: {
  //   book_id: bookId,
  //   user_id: res.locals.user.id,
  // }});

//     const result = await Book.destroy({
//       where: {
//         id: bookId,
//         user_id: res.locals.user.id,
//       },
//     });
//     // await Like.destroy({ where: {
//     //   book_id: bookId,
//     //   user_id: res.locals.user.id,
//     // }});

    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
    res.json({
      message: "Вы не можете удалить книгу, которую добавили не Вы!",
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/books/:bookId", async (req, res) => {
  try {
    const { text } = req.body;
    const book = await Book.create({
      text,
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

module.exports = router;
