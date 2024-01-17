const router = require("express").Router();
const mainPageRouter = require("./views/main.routes");
const authRouter = require("./views/auth.routes");
const favRouter = require('./views/favourite.routes')

const apiAuthRouter = require("./api/api.auth.routes");

router.use("/", mainPageRouter);
router.use("/auth", authRouter);
router.use("/favourites", favRouter)

router.use("/api/auth", apiAuthRouter);

module.exports = router;
