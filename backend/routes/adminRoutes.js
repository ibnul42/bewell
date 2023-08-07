const express = require('express')
const router = express.Router()
const { registerUser, LoginUser, getMe, updateProfile } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
const { getAllSteps, createStep, updateStep, getAllContacts, createContact, getSingleStep, getAllWeightLossFAQ, singleWeightLossFAQ, createWeightLossFAQ, editWeightLossFAQ, deleteWeightLossFAQ } = require('../controllers/adminController')

router.get('/all-steps', getAllSteps)
router.post('/create-step', createStep)
router.get('/step/:id', protect, getSingleStep)
router.put('/step/:step', protect, updateStep)
router.get('/contacts', protect, getAllContacts)
router.post('/contact/create', createContact)
router.get('/weightlossfaq', getAllWeightLossFAQ)
router.get('/weightlossfaq/:id', singleWeightLossFAQ)
router.post('/weightlossfaq', protect, createWeightLossFAQ)
router.put('/weightlossfaq/:id', protect, editWeightLossFAQ)
router.delete('/weightlossfaq/:id', protect, deleteWeightLossFAQ)


module.exports = router