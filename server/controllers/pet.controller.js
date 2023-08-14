const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then((allPets) => res.json(allPets))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((onePets) => res.json(onePets))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.editOnePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    runValidators: true,
  })
    .then((onePets) => res.json(onePets))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then((newPet) => res.json(newPet))
    .catch((err) => res.json({ error: err }));
};

module.exports.deletePet = (req, res) => {
  Pet.findOneAndDelete({ _id: req.params.id })
    .then((deleteConfirm) => res.json(deleteConfirm))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
