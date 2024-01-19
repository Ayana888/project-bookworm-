const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");
const configJWT = require("../../middleware/configJWT");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

router.post("/sign-in", async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;
    // console.log(name, password, 33);
    user = await User.findOne({ where: { name } });
    //проверка если usera  нет
    if (!user) {
      res.json({ message: "Такого пользователя нет или пароль неверный" });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password); //  вместо этого if (user.password !== password)
    if (!isSame) {
      res.json({ message: "Такого пользователя нет или пароль неверный" });
      return;
    }
    //-----------------------------------
    //генерируем два токена
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });
    // console.log(user, 111);

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    //---------------------------------------------
    res.json({ message: "success" });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/sign-up", async (req, res) => {
  let user;
  try {
    const { name, email, mobile, img, password, rpassword } = req.body;
    //console.log(password, rpassword);
    // console.log(name, password, img, 33);

    if (!isValidEmail(email)) {
      res.json({ type: "blabla", message: "Некорректный формат email" });
      return;
    }

    user = await User.findOne({ where: { name } }); // находим user и пишем проверку
    if (user) {
      res.json({ message: "Такой пользователь уже есть!" });
      return;
    }

    if (rpassword !== password) {
      res.json({ message: "Пароли не совпадают!" });
      return;
      
    } //нельзя отправить два jsona, надо писать на странице

    const hash = await bcrypt.hash(password, 10);
    //в другом случае создает user
    user = await User.create({ name, email, password: hash, img, mobile });
    console.log(user.id, 77);

    // генерируем два токена
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });
    // console.log(user);
    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });

    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    //---------------------------------------
    res.json({ message: "success" });
  } catch ({ message }) {
    // console.log(message, "=======");
    res.json({ message });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect("/");
});

module.exports = router;
