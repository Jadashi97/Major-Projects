const Contact = require("../models/Contacts"); //this grabs the schema setup in models

// @des Get all contacts
// @route Get /api/v1/contacts
// @access Public

exports.getContacts = async (req,res, next) => {
    try {
        const contacts = await Contact.find(); //uses mongoose to find all contacts i have

        return  res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}