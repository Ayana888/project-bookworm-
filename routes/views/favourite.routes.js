const router = require('express').Router();
//const HeroesListPage = require('../../components/HeroesListPage');
const Favourites = require('../../components/Favourites')
//const HeroPage = require('../../components/HeroPage');
const { Book, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({ order: [['id', 'ASC']]}); //include: Like 
    const html = res.renderComponent(Favourites, { title: ' My books page', books});
    console.log(books);
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;