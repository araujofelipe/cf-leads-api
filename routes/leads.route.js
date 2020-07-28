const express = require('express')
const router = express.Router()

const lead_controller = require('../controllers/lead.controller')

router.get('/testar', lead_controller.test)
router.post('/create', lead_controller.create)
router.post('/list', lead_controller.list)
router.options('/list', lead_controller.list)
router.post('/s', lead_controller.s)

module.exports = router
