const mongoose = require('mongoose')

const PetsSchema = new mongoose.Schema({

    petName: {
        type: String,
        required: [true, "Pet name is required!"],
        minLength: [3, "The pet name should be at least 3 characters long!"]
    },

    petType: {
        type: String,
        required: [true, "Pet type is required!"],
        minLength: [3, "The pet type should be at least 3 characters long!"]
    },

    petDescription: {
        type: String,
        required: [true, "Pet description is required!"],
        minLength: [3, "The pet description should be at least 3 characters long!"]
    },

    petSkillOne: {
        type: String
    },

    petSkillTwo: {
        type: String
    },

    petSkillThree: {
        type: String
    },

    petLikes: {
        type: Number,
        default: 0
    }

}, {timestamps: true})

const Pets = mongoose.model("Pets", PetsSchema)

module.exports = Pets