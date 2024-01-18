const router = require('express').Router();
//const BookItem = require('../../components/BookItem');
//const HeroesListPage = require('../../components/HeroesListPage');
const Favourites = require('../../components/Favourites')
//const HeroPage = require('../../components/HeroPage');
const { Book, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const booksWithMyLikes = await Book.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Like,
        where: {
          user_id: res.locals.user.id,
        },
        required: true, // Это гарантирует, что будут выбраны только те книги, у которых есть лайки от текущего пользователя
      },
    });
    console.log(booksWithMyLikes)
   // const [like] = book.Likes.filter((el)=>el.user_id === user.id);// console.log(books, '111111111111');
    const html = res.renderComponent(Favourites, { title: ' My books page', booksWithMyLikes});
   
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;