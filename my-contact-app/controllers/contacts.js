const { reset } = require("nodemon");
const Contact = require("../models/Contacts"); //this grabs the schema setup in models

// @des Get all contacts
// @route Get /api/v1/contacts
// @access Public

exports.getContacts = async (req,res, next) => {
    // res.send('Get contacts')
    try {
        const contacts = await Contact.find(); //uses mongoose to find all contacts i have

        return  res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add all transactions
// @route POST /api/v1/transactions
// @access Public
exports.addContacts = async (req,res, next) => {
    // res.send("Add contacts")
    try {
        const {fName, userName, birthDate, email, phone} = req.body;

        const contact = await Contact.create(req.body);

        return res.status(201).json({
            success:true,
            data: contact
        })
    } catch (err) {

        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success:false,
                error: messages
            });
        } else{
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
        
    }
}


// @desc Delete all transactions
// @route DELETE /api/v1/transactions
// @access Public
exports.deleteContacts =  async (req, res, next) => {
    res.send("Delete contacts")
}