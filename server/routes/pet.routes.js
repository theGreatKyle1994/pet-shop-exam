const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("/api/pets", PetController.findAllPets);
  app.get("/api/pets/:id", PetController.findOnePet);
  app.patch("/api/pets/:id", PetController.editOnePet);
  app.delete("/api/pets/:id", PetController.deletePet);
  app.post("/api/pets/new", PetController.createPet);
};
