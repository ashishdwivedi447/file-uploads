const express= require("express")

const Gallery= require("../models/gallery.models")

const uploads= require("../middleware/uploads")

const router= express.Router()

router.get("", async(req, res)=>{
    try {
        const galleries= await Gallery.find().populate("userId").lean().exec()
        return res.status(200).send(galleries)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.post("/multpic", uploads.any("profilePic"), async(req, res)=>{ //to see the uploads middleware go to documentation and select 
    try {
        const filePaths= req.files.map((file)=>{
            console.log({file});
            return file.path
        })
        
        const gallery= await Gallery.create({
          
            profilePic: filePaths,
            userId: req.body.userId,
         
          
        })
        console.log("hi")
        return res.status(201).send(gallery)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

 module.exports= router