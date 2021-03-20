require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body'))
app.use(express.static('build'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        "number": "040-13456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

const generateId = () => {
    min = Math.ceil(100)
    max = Math.floor(10000)
    return Math.floor(Math.random() * (max - min) + min)
}

const infoBody = 
`<p> Phonebook has info for ${persons.length} people </p> 
<p> ${Date()}</p>`

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
  })

app.post('/api/persons', (request, response) => {
    console.log(request.headers)
    const body = request.body
    const person = new Person({
        id: body.id,
        name: body.name,
        number: body.number,
    })
    console.log(person.id)
    console.log(person.name)
    console.log(person.number)
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(infoBody)
})



