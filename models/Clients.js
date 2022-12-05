const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  nom_complet: String,
  nbr_gifts: Number,
  remise_defaut: Number,
});

module.exports = Client = mongoose.model("client", clientSchema);
