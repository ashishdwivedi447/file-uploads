const express= require("express")

const User= require("../models/user.models")

const uploads= require("../middleware/uploads")

const router= express.Router()

router.get("", async(req, res)=>{
    try {
        const users= await User.find().lean().exec()
        return res.status(200).send({users: users})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})


router.post("", uploads.single("profilePic"), async(req, res)=>{ //to see the uploads middleware go to documentation and select 
    try {
        // console.log(req.body)
        // console.log(req.file)
        const user= await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            profilePic: req.file.path,
        })
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})






module.exports= router