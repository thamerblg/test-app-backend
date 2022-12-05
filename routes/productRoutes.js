const express = require("express");
const { getAll, add } = require("../controllers/productControllers");
const { addProductRules, validator } = require("../middelwears/validators");
const Product = require("../models/Products");

const router = express.Router();

// REQUEST FOR TESTING
router.get("/", (req, res) => {
  res.send({ msg: "test Product" });
});

// GET ALL PRODUCT
router.get("/all", getAll);

// ADD NEW PRODUCT
router.post("/add", addProductRules(), validator, add);

module.exports = router;
