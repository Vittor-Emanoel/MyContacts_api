const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.status(200).send('Olá')
})

app.listen(3333, () =>
  console.log(' 🔥 Server started at http://localhost:3333')
)
