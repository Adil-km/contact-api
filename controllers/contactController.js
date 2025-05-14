const asyncHandler = require("express-async-handler")

//@desc Get all contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Get all the contacts"})
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res)=>{
    res.status(201).json({message:"Create contact"})
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
});

//@desc Update contact
//@route POST /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`})
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
});



module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }