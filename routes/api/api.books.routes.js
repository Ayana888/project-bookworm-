const router = require('express').Router();
const { Book } = require('../../db/models');
const BookItem = require('../../components/BookItem');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { name, author } = req.body;
    const newFileUrl = `/img/${req.file.originalname}`;
    const book = await Book.create({
      name,
      author,
      img: newFileUrl,
      rating: 1,
      user_id: res.locals.user.id,
    });
    const currentBook = await Book.findOne({
      where: { id: book.id },
    });
    const html = res.renderComponent(BookItem, { book: currentBook });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json(`POST: ${message}`);
  }
});

module.exports = router;
