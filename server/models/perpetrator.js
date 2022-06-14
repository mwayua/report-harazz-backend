const mongoose = require('mongoose');

const perpetratorSchema = new mongoose.Schema({
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
            type: [{
                type: String,
                enum: ['Lecturer', 'Staff','Comrade']
            }]
}); 

module.exports = mongoose.model("perpetartors", perpetratorSchema);