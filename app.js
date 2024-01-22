require("@babel/register"); //
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
//const multer = require('multer');

const PORT = 4000;

const indexRouter = require("./routes/index.routes");
const ssr = require("./middleware/ssr");
const { verifyAccessToken } = require("./middleware/verifyJWT");
const getUser = require("./middleware/getUser");

app.use(cookieParser()); // jwt должен быть ниже// раскрывает cookie на сервере
app.use(express.urlencoded({ extended: "true" })); // //middleware должны быть над routes
app.use(express.json()); //при использовании fetch раскрываем undefined из body
app.use(express.static(path.join(__dirname, "public")));
app.use(ssr); //без вызова, так как express сам вызовет ф-ю и сам вызовет ф-ю next() lдля выполнения следующей middleware
app.use(verifyAccessToken); // ??????
app.use(getUser);
//app.use(multer)

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Наша шарманка играет в ${PORT} порту!!!`);
});
