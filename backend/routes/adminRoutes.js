const express = require('express')
const router = express.Router()
const { registerUser, LoginUser, getMe, updateProfile } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
const { getAllSteps, createStep, updateStep, getAllContacts, createContact } = require('../controllers/adminController')

router.get('/all-steps', getAllSteps)
router.post('/create-step', createStep)
router.put('/step/:step', updateStep)
router.get('/contacts', getAllContacts)
router.post('/contact/create', createContact)

module.exports = router