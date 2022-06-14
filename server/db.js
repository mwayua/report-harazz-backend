const mongoose = require("mongoose");

// mongoose.connect(
//     `mongodb+srv://wayua:wayua@cluster0.ixxul.mongodb.net/register_db=true&w=majority`
// )

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Successfully connected to the Database")
    } catch (error) {
        console.log(error);
        console.log("ooops! could not connect to Database!")
    }
};