const router = require("express").Router();
const MainPage = require("../../components/MainPage");

router.get("/", (req, res) => {
  const html = res.renderComponent(MainPage, { title: "Main page" });
  res.send(html);
});

module.exports = router;
