const router = require('express').Router();
const Favourites = require('../../components/Favourites')
const { Book, Like } = require('../../db/models');
//const ssr = require('../../middleware/ssr')



router.get('/', async (req, res) => {
  const {user} = res.locals;
  if (user) {
  try {
    const booksWithMyLikes = await Book.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Like,
        where: {
          user_id: res.locals.user.id,
        },
        required: true, 
      },
    });
    //console.log(booksWithMyLikes)
   // const [like] = book.Likes.filter((el)=>el.user_id === user.id);// console.log(books, '111111111111');
    const html = res.renderComponent(Favourites, { title: ' My books page', booksWithMyLikes});
   
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
} else { res.send('<h1>Войдите, чтобы увидеть ваши любимые книги!</h1>')}
});


module.exports = router;