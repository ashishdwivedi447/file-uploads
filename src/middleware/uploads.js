// const uploads= (req, res, next)=>{
//     return next()
// }
// module.exports = uploads

const path = require("path")

const multer= require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../imagefolder"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now();
      cb(null,  uniquePrefix + '-' + file.originalname )
    }
  })
  
  const fileFilter= (req, file, cb)=> {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(file.mimetype === "image/jpeg"  || file.mimetype === "image/png"  ){

        cb(null, true)
    }else{

        cb(null, false)
    }
  
    // To accept the file pass `true`, like so:
  
    // You can always pass an error if something goes wrong:
   
  }  
 
const options={
    storage: storage,
    fileFilter: fileFilter,
    limits:{
        fileSize: 1024 * 1024 *10
    },
}


const uploads= multer(options)

module.exports= uploads