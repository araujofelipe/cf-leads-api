const mongoose = require('mongoose')
const Schema = mongoose.Schema

let LeadSchema = new Schema({
    owner: {type: String, required: true},
    name: {type: String, required: false},
    email: {type: String, required: true},
    phone: {type: String, required: false},
    created_date: {type: Date, default : Date.now},
    params: {type: String, required: false }, 
})

module.exports = mongoose.model('Lead', LeadSchema)