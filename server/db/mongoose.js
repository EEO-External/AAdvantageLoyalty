const mongoose = require('mongoose');


const connectDb = () => {
    mongoose.connect('mongodb+srv://asa:A123456789s@aea.foeu3do.mongodb.net/test',
        //avoids the warning from the server
        {
            useNewUrlParser: true, useUnifiedTopology: true
        }).then(() => {
            console.log("Connection successful")
        }).catch((error) => {
            console.log("Error connecting: ", error);
            
        });

}



module.exports = connectDb;