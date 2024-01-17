const router = require("express").Router();
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");
const configJWT = require("../../middleware/configJWT");

module.exports = router;
