const router = require('express').Router();
//const BookItem = require('../../components/BookItem');
//const HeroesListPage = require('../../components/HeroesListPage');
const Favourites = require('../../components/Favourites')
//const HeroPage = require('../../components/HeroPage');
const { Book, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({ order: [['id', 'ASC']], include: Like });
    //console.log(books);
    const html = res.renderComponent(Favourites, { title: ' My books page', books});
   
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;