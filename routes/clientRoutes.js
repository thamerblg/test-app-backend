const express = require("express");
const {
  getAll,
  add,
  login,
  currentClient,
  logout,
} = require("../controllers/clientControllers");
const { addClientRules, validator } = require("../middelwears/validators");
const isAuth = require("../middelwears/passport");
const Client = require("../models/Clients");

const router = express.Router();

// REQUEST FOR TESTING
router.get("/", (req, res) => {
  res.send({ msg: "test Client" });
});

// GET ALL CLIENT
router.get("/all", getAll);
// ADD NEW CLIENT
router.post("/add", addClientRules(), validator, add);
// LOGIN CLIENT
router.post("/login", login);
// GET CURRENT CLIENT
router.get("/current", isAuth(), currentClient);
// LOGOUT CLIENT
router.post("/logout", logout);

module.exports = router;
