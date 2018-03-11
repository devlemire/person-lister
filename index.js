const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const personController = require('./controllers/person')

const app = express()

app.get('/api/people', personController.get)
app.post('/api/person', personController.post)

const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}`))
