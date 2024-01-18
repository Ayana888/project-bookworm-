const router = require("express").Router();
const mainPageRouter = require("./views/main.routes");
const authRouter = require("./views/auth.routes");


const favRouter = require("./views/favourite.routes");

const apiFavRouter = require('./api/api.favorites')


const apiAuthRouter = require("./api/api.auth.routes");
const apiBooksRouter = require("./api/api.books.routes");
const apiCommentRouter = require('./api/api.comments.routes')

router.use("/", mainPageRouter);
router.use("/auth", authRouter);
router.use("/favourites", favRouter);


router.use("/api/auth", apiAuthRouter);
router.use("/api/books", apiBooksRouter);

router.use("/api/books/:bookId", apiCommentRouter)
router.use("/api/favorites", apiFavRouter)


module.exports = router;
