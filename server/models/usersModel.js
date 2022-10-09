const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    middleName: { type: String },
    suffix: { type: String },
    birthDate: { type: String },
    email: { type: String },
    phone: { type: String },
    country: { type: String },
    street: { type: String },
    zip: { type: String },
    password: { type: String }

});

module.exports = mongoose.model("Controllers", UserSchema);
