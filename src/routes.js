const { Router } = require('express')

const ContactController = require('./app/controllers/ContactController')

const router = Router()

router.get('/contacts', (request, response) => {
  response.send('Olá')
})

module.exports = router
