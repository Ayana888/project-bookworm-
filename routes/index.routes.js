const router = require("express").Router();
const mainPageRouter = require("./views/main.routes");
// const authRouter = require("./views/auth.routes");

// const apiAuthRouter = require("./api/api.auth.routes");

router.use("/", mainPageRouter);
// router.use("/auth", authRouter);

// router.use("/api/auth", apiAuthRouter);

module.exports = router;
