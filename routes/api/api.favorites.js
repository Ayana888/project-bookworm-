const router = require('express').Router();
const { Like } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    await Like.create({ user_id: res.locals.user.id, book_id: id });
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const result = await Like.destroy({ where: { user_id: res.locals.user.id, book_id: bookId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
