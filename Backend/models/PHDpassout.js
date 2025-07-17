const mongoose = require ("mongoose")

const phdpassoutSchema = mongoose.Schema(
    {
    name: { type: String, required: true },
    degree_title : {type : String , required : true} ,
    updatedBy: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    doa: { type: Date },
    doc: { type: Date },
    thesis_title: { type: String },
    supervisor: { type: String },
    },
    {timestamps : true}
)

const PHDpassout = mongoose.model ("phdpassout" , phdpassoutSchema)
module.exports = PHDpassout