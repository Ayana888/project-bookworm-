const router = require('express').Router();
const { Rating } = require('../../db/models');

router.post('/:bookId', async (req, res) => {
  console.log(123);
  const { bookId } = req.params;
  const { rating } = req.body;
  console.log(bookId, rating);
  try {
    // отправить запрос к бд
    const oldrating = await Rating.findOne({
      where: {
        user_id: res.locals.user.id,
        book_id: bookId,
      },
    });
    if (oldrating) {
      const currentRating = await Rating.findOne({
        where: { user_id: res.locals.user.id },
      });
      console.log(currentRating);
      return res.status(404).json({message:'вы уже оценили данную книгу'})
    }
    const newRating = await Rating.create({
      user_id: res.locals.user.id,
      book_id: bookId,
      rating: rating,
    });
    return res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

// console.log(oldrating);
// if (oldrating) {
//   const oldRating = await Rating.findOne({
//     where: { user_id: res.locals.user.id },
//     raw: true,
//   });
//   console.log(oldRating.rating);
//   const html = res.renderComponent(True, {
//     message: 'Вы уже оценили данный маршрут',
//     ratingRoute: `${oldRating.rating}`,
//   });
//   return res.status(404).json({ success: false, trueHtml: html });
// }
