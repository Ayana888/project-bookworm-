const router = require("express").Router();
const { Comment } = require("../../db/models");
const BookComment = require("../../components/BookComment");

router.post("/", async (req, res) => {
  const { text, book_id } = req.body;
  console.log(text);
  try {
    console.log(text);
    const comment = await Comment.create({
      text,
      book_id,
      user_id: res.locals.user.id,
    });
    const html = res.renderComponent(BookComment, { comment });
    res.json({
      message: "success",
      html,
    });
  } catch ({ message }) {
    res.json(`POST: ${message}`);
  }
});

module.exports = router;
