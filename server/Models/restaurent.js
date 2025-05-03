const mongoose = require('mongoose');

const restaurentSchema = new mongoose.Schema({
    name:{type: String, unique: true},
    status: {type:Boolean, default: false}
})

module.exports = mongoose.model("Restaurents", restaurentSchema)