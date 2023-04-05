const express = require('express')

const routes = require('./routes')

const app = express()

// Middlewares
app.use(express.json())
app.use(routes)

// error handler
app.use((error, request, response) => {
  console.log(error)
  response.sendStatus(500)
})

app.listen(3001, () =>
  console.log('🔥 Server started at http://localhost:3001')
)
