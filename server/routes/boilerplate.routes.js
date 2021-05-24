const PetsController = require('../controllers/boilerplate.controller')

module.exports = app => {
    app.get('/api/pets', PetsController.findAllPets)
    app.get('/api/pets/:id', PetsController.findOnePet)
    app.put('/api/pets/update/:id', PetsController.updatePet)
    app.post('/api/pets/create', PetsController.createPet)
    app.delete('/api/pets/delete/:id', PetsController.deletePet)
}