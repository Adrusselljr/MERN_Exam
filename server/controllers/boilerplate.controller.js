const Pets = require('../models/boilerplate.model')

module.exports.findAllPets = (req, res) => {
    Pets.find()
        .then(data => res.json({ results: data }))
        .catch(err => res.json(err.errors))
}

module.exports.findOnePet = (req, res) => {
    Pets.findOne({ _id: req.params.id })
        .then(data => res.json({ results: data }))
        .catch(err => res.json(err.errors))
}

module.exports.createPet = (req, res) => {
    Pets.create(req.body)
        .then(data => res.json({ results: data }))
        .catch(err => res.json(err.errors))
}

module.exports.updatePet = (req, res) => {
    Pets.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(data => res.json({ results: data }))
        .catch(err => res.json(err.errors))
}

module.exports.deletePet = (req, res) => {
    Pets.deleteOne({ _id: req.params.id })
        .then(data => res.json({ results: data }))
        .catch(err => res.json(err.errors))
}