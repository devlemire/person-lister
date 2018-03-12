const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const personController = require('./controllers/person')

const app = express()

app.use( cors() )
app.use( bodyParser.json() )

app.get('/api/people', personController.get)
app.post('/api/person', personController.post)
app.put('/api/person/:id', personController.put)
app.delete('/api/person/:id', personController.delete)

const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}`))
