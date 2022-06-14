const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
            incidentType: {
                type: String,
                required: true
            },
            incidentDescription: {
                type: String,
                required: true
            }
}); 

module.exports = mongoose.model("case", caseSchema);