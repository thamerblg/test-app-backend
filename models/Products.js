const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  libelle: String,
  prix_ttc: Number,
  en_stock: Boolean,
  is_gift: Boolean,
});

module.exports = Product = mongoose.model("product", productSchema);
