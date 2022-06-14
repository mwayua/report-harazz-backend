const router = require("express").Router();
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt"); //bcrypt --> Hash password

router.post("/",async(req, res) => {

    try {
        const user = await User.findOne({secretName: req.body.secretName});
        if (user)
            return res.status(409).send({message: "User with given Secret Name already exists!"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        const newuser = await new User({...req.body,password: hashPassword}).save();
        const token = newuser.generateAuthToken();
        res.status(200).send({data:token, message: "You've been onboarded"});
        // res.status(201).send({message: "User created successfully"})

        
    } catch (error) {
        res.status(500).send({message: "Internal Server Error 2", error: error.message})
    }
});

module.exports = router;