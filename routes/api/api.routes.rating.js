const router = require('express').Router();
const bookPage = require('../../components/BookPage');



router.get('/', function (req, res) {
  const html = res.renderComponent(bookPage, { title: 'Rate' });
  res.send(html);
});

module.exports = router;