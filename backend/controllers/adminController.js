const asyncHandler = require('express-async-handler')
const Step = require('../models/stepModel')
const Contact = require('../models/contactModel')

const getAllSteps = asyncHandler(async (req, res) => {
    const steps = await Step.find()
    res.status(200).json(steps)
})

const getSingleStep = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404).json({ message: 'Step not found' })
    }
    const step = await Step.findById(id)
    if (!step) {
        res.status(404).json({ message: 'Step not found' })
    }

    res.status(200).json(step)
})

const createStep = asyncHandler(async (req, res) => {
    const { title, color, name, source, desc } = req.body

    // check if all fields are inputed
    if (!title || !color || !name || !source || !desc) {
        res.status(404)
        throw new Error('Please enter all fields')
    }

    // create a new step
    const step = await Step.create({
        title,
        color,
        name,
        source,
        desc
    })

    if (step) {
        res.status(201)
        res.json({
            message: 'Step created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const updateStep = asyncHandler(async (req, res) => {
    const { name, desc } = req.body
    const { step } = req.params

    if (desc.length > 192) {
        res.status(404)
        throw new Error('Characters must be at most 92 characters')
    }

    const stepExists = await Step.findById(step)

    if (!stepExists) {
        res.status(404).json({ message: 'Step not found' })
    }

    const updatedStep = await Step.findByIdAndUpdate(step, {
        name,
        desc
    })

    if (!updatedStep) {
        res.status(404).json({ message: 'Failed to update the step' })
    }


    res.status(200).json({ message: 'Step updated successfully!' })
})

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

const createContact = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, appointtime, message, birthday } = req.body

    // check if all fields are inputed
    if (!firstName) {
        res.status(404)
        throw new Error('Please enter first name')
    }

    if (!email) {
        res.status(404)
        throw new Error('Please enter email')
    }

    if (!phone) {
        res.status(404)
        throw new Error('Please enter phone')
    }

    // create a contact
    const contact = await Contact.create({
        firstName, lastName, email, phone, appointtime, message, birthday
    })

    if (contact) {
        res.status(201)
        res.json({
            message: 'Contact created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

module.exports = {
    getAllSteps,
    createStep,
    updateStep,
    getAllContacts,
    createContact,
    getSingleStep
}