const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.add = async (req, res) => {
  const { nom_complet, nbr_gifts, remise_defaut } = req.body;
  try {
    const existClient = await Client.findOne({
      nom_complet: req.body.nom_complet,
    });
    if (existClient) {
      return res.status(400).send({
        msg: "Name is already exist !!!, Please try again",
      });
    }
    const newClient = new Client({ ...req.body });
    await newClient.save();
    res.send({ msg: "client added" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const allClients = await Client.find();
    res.send({ allClients });
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  const { nom_complet } = req.body;
  try {
    const existClient = await Client.findOne({ nom_complet });
    const payload = { _id: existClient._id };
    const token = await jwt.sign(payload, process.env.TOKEN_SECRET);
    res.send({ client: existClient, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET CURRENT CLIENT
module.exports.currentClient = async (req, res) => {
  res.send(req.user);
};

// LOGOUT CLIENT
module.exports.logout = async (req, res) => {
  const { nom_complet } = req.body;
  try {
    const client = await Client.findOne({ nom_complet });
    res.status(200).send(client);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
