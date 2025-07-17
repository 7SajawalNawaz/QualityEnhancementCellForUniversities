const mongoose = require ("mongoose")

const msmphillpassoutSchema = mongoose.Schema(
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

const MSMPHILpassout = mongoose.model ("ms-mphil-passout" , msmphillpassoutSchema)
module.exports = MSMPHILpassout