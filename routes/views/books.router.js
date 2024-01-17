const router = require("express").Router();
const AddBookForm = require('../../components/AddBookForm')

router.get("/", (req, res) => {
    const html = res.renderComponent(AddBookForm, { title: "Add Book Page"});
    res.send(html);
  });

  module.exports = router