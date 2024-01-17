const router = require("express").Router();
const MainPage = require("../../components/MainPage");
const {Book} = require('../../db/models')

router.get("/", async (req, res) => {
  const book = await Book.findAll()
  const html = res.renderComponent(MainPage, { title: "Main page",book });
  res.send(html);
});



module.exports = router;
