const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://admin:${password}@cluster0.98sbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const humanSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Human = mongoose.model('Human', humanSchema)


if (process.argv.length > 3) {
    const person = new Human({
        name: process.argv[3],
        number: process.argv[4],
    })

    person.save().then(result => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    console.log('phonebook:')
    Human.find({}).then(humen => {
        humen.forEach(human => {
            console.log(human.name, human.number)
        })
        mongoose.connection.close()
    })
}





