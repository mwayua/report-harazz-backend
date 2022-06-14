const mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            Age: {
                type: String,
                required: true
            },
            universityName: {
                type: String,
                required: true
            },
            gender: [{
                type: String,
                enum: ['Male', 'Female','Other']
            }]
}); 

module.exports = mongoose.model("victims", victimSchema);





















// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const Joi = require('joi');


// const victimSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     Age: {
//         type: Date,
//         required: true
//     },
//     universityName: {
//         type: String,
//         required: true
//     },
//     gender: [{
//         type: String,
//         enum: ['Male', 'Female','Other']
//     }]
// });



// const Victim = mongoose.model("victim", victimSchema);

// module.exports = {Victim};