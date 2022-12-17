const axios = require('axios')
const express = require('express')
const app = express();
const db = require('./db/mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv')
const path = require('path');

const usersModels = require('./models/usersModel')
db()

// console.log(axios)
app.use(cors({
    origin: "*"
}))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//server frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html')))
}
else {
    app.get('/', (req, res) => res.send('Please set to production'))
}


app.post("/*", async (req, res) => {
    //All the variables that come from the frontend
    var firstName = req.body.first;
    var lastName = req.body.last;
    var middleName = req.body.middle;
    var suffix = req.body.suffix;
    var birthDate = req.body.birthdate;
    var email = req.body.email;
    var phone = req.body.phone;
    var country = req.body.country;
    var street = req.body.street;
    var zip = req.body.zip;
    var password = req.body.password;

    //getflight("1890", "2022", "08", "05")
    //send to database
    postUserToDatabase(firstName, lastName, middleName, suffix, birthDate, email, phone, country, street, zip, password, res)

})

const postUserToDatabase = async (firstName,
    lastName,
    middleName,
    suffix,
    birthDate,
    email,
    phone,
    country,
    street,
    zip,
    password,res) => {

    const user = new usersModels({
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        suffix: suffix,
        birthDate: birthDate,
        email: email,
        phone: phone,
        country: country,
        street: street,
        zip: zip,
        password: password
    })
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        console.log(error)
    }
}



var PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    //console.log(`The server is listen to port ${PORT}`)
})


function getflight(flightnumber, year, month, day) {
    console.log(flightnumber)
    axios({
        method: 'get',
        url: `https://flight-data23.herokuapp.com/flights?date=${year}-${month}-${day}`
    }).then(function ({ data }) {
        // console.log(data.filter(el=>el?.flightNumber==flightnumber))
        // console.log(typeof data)
        // console.log(data.length)
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            // element.flightNumber
            if (flightnumber == element.flightNumber) {
                console.log(element)
            }

        }
        // console.log('done')    
    })
}
