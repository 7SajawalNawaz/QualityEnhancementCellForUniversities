const mongoose = require ("mongoose")

const fileSchema = mongoose.Schema({
    key : {type : String , required : true},
    size : Number ,
    mimetype : String ,
    status: { type: String, enum: ["pending", "verified"], default: "pending" }, // Add status field
    createdBy : {type : mongoose.Types.ObjectId , ref : "user"},
    link: { type: String } 
} , {timestamps : true })

const File = mongoose.model("file" , fileSchema)

module.exports = File ;