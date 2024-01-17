const router = require("express").Router();
const SignInPage = require("../../components/SignInPage");
const SignUpPage = require("../../components/SignUpPage");

router.get("/sign-in", (req, res) => {
  const html = res.renderComponent(SignInPage, { title: "sign-in" });
  res.send(html);
});

router.get("/sign-up", (req, res) => {
  const html = res.renderComponent(SignUpPage, { title: "sign-up" });
  res.send(html);
});

module.exports = router;
