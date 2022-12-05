module.exports.add = async (req, res) => {
  const { libelle, prix_ttc, en_stock, is_gift } = req.body;
  try {
    const existProduct = await Product.findOne({ libelle: req.body.libelle });
    if (existProduct) {
      return res.status(400).send({
        msg: "libelle of product is already exist !!!, Please try again",
      });
    }
    const newProduct = new Product({ ...req.body });
    await newProduct.save();
    res.send({ msg: "Product added" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.send({ allProducts });
  } catch (error) {
    console.log(error);
  }
};
