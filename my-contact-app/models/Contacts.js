const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    fName: {
        type: String,
        trim: true,
        required: [true, 'Please add your first name']
    },
    lName: {
        type: String,
        trim: true,
        required: [true, 'Please add your last name']
    },
    birthDate: {
        type: Number,
        required: [true, 'Please add your birth Date']
    },
    phone: {
        type: Number,
        required: [true, 'Please add your phone number']
    },
    email: {
        type: String,
        required: [true, 'Please add your email']
    }
})


module.exports = mongoose.model('Contact', ContactSchema);