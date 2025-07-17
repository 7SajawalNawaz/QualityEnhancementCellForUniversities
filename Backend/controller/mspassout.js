const MSMPHILL = require("../models/MSMPHILL");

const addmsmphilpassout = async (req, res, next) => {
  try {
    const { name, degree_title, doa, doc, thesis_title, supervisor } = req.body;
    const { _id } = req.user;

    const newMSMphil = new MSMPHILL({
      name,
      degree_title,
      doa,
      doc,
      thesis_title,
      supervisor,
      updatedBy: _id,
    })
    await newMSMphil.save()
    res.status(201).json({
        code: 201,
        status: true,
        message: "Submit Successfull",
      });
  } catch {
    next(err);
  }
};

const updatemsmphilpassout = async (req,res,next) => {
    try{
        const { name, degree_title, doa, doc, thesis_title, supervisor } = req.body;
    const { _id } = req.user;
    const {id} = req.params ;

    const MSMPHILLpassoutstudent = await MSMPHILL.findById(id)
    if(!MSMPHILLpassoutstudent){
        res.code = 400;
      throw new Error("Student Not Found");
    }

    MSMPHILLpassoutstudent.name = name ? name : MSMPHILLpassoutstudent.name;
   MSMPHILLpassoutstudent.degree_title = degree_title ? degree_title : MSMPHILLpassoutstudent.degree_title;
    MSMPHILLpassoutstudent.doa = doa ? doa : MSMPHILLpassoutstudent.doa;
    MSMPHILLpassoutstudent.doc = doc ? doc : MSMPHILLpassoutstudent.doc;
    MSMPHILLpassoutstudent.thesis_title = thesis_title ? thesis_title : MSMPHILLpassoutstudent.thesis_title;
    MSMPHILLpassoutstudent.supervisor = supervisor ? supervisor : MSMPHILLpassoutstudent.supervisor;
    MSMPHILLpassoutstudent.updatedBy = _id;
    
    await MSMPHILLpassoutstudent.save();

    res.status(202).json({
      code: 202,
      status: true,
      message: "Updated Successfully",
      data: { MSMPHILLpassoutstudent } })


    }
    catch{
        next(err)
    }
}

const deletemsmphilpassout = async (req,res,next)=>{
  try{
    const { id } = req.params;

   const MSMPHILLpassoutstudent = await MSMPHILL.findById(id)
    if(!MSMPHILLpassoutstudent){
        res.code = 400;
      throw new Error("Student Not Found");
    }

    await MSMPHILL.findByIdAndDelete(id);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Deleted Successfully",
    });
  }
  catch(err){
    next(err)
  }
}

const getmsmphilpassout = async (req,res,next) =>{
  try{
    const { page, size, q } = req.query;

    const pageNumber = parseInt(page) || 1;
    const sizeNumber = parseInt(size) || 10;
    let query = {};

    if (q) {
      const search = new RegExp(q, "i");

      query = {
        $or: [{ name: search }],
      };
    }

    const total = await MSMPHILL.countDocuments(query);
    const pages = Math.ceil(total / sizeNumber);

    const MSMPHILLpassoutstudent = await MSMPHILL.find(query)
      .sort({ updatedBy: -1 })
      .skip((pageNumber - 1) * sizeNumber)
      .limit(sizeNumber);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Faculty Resume List",
      data: { MSMPHILLpassoutstudent, total, pages },
    });
  }
  catch(err){
    next(err)
  }
}

module.exports = { addmsmphilpassout , updatemsmphilpassout , deletemsmphilpassout , getmsmphilpassout};