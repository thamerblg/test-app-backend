const { check, validationResult } = require("express-validator");

module.exports.addClientRules = () => [
  check("nom_complet", "Name must have more than 6 characters")
    .trim()
    .isLength({
      min: 6,
    }),
  check("nbr_gifts", "nbr_gifts is required").notEmpty(),
  check("remise_defaut", "remise_defaut is required").notEmpty(),
];

module.exports.addProductRules = () => [
  check("libelle", "Libelle must have more than 4 characters").trim().isLength({
    min: 4,
  }),
  check("prix_ttc", "prix_ttc is required").notEmpty(),
  check("en_stock", "en_stock is required").isBoolean(),
  check("is_gift", "is_gift is required").isBoolean(),
];

module.exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
