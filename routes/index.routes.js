const router = require("express").Router();
const mainPageRouter = require("./views/main.routes");
const authRouter = require("./views/auth.routes");
const BooksRouter = require("./views/books.router");

const apiAuthRouter = require("./api/api.auth.routes");
const apiBooksRouter = require("./api/api.books.routes");


router.use("/", mainPageRouter);
router.use("/auth", authRouter);
router.use("/books", BooksRouter);

router.use("/api/auth", apiAuthRouter);
router.use("/api/books", apiBooksRouter);



module.exports = router;
