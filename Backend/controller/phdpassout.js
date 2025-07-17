const PHDpassout = require("../models/PHDpassout");

const addphdpassout = async (req, res, next) => {
  try {
    const { name, degree_title, doa, doc, thesis_title, supervisor } = req.body;
    const { _id } = req.user;

    const newPHD = new PHDpassout({
      name,
      degree_title,
      doa,
      doc,
      thesis_title,
      supervisor,
      updatedBy: _id,
    })
    await newPHD.save()
    res.status(201).json({
        code: 201,
        status: true,
        message: "Submit Successfull",
      });
  } catch {
    next(err);
  }
};

const updatephdpassout = async (req,res,next) => {
    try{
        const { name, degree_title, doa, doc, thesis_title, supervisor } = req.body;
    const { _id } = req.user;
    const {id} = req.params ;

    const phdpassoutstudent = await PHDpassout.findById(id)
    if(!phdpassoutstudent){
        res.code = 400;
      throw new Error("Student Not Found");
    }

    phdpassoutstudent.name = name ? name : phdpassoutstudent.name;
    phdpassoutstudent.degree_title = degree_title ? degree_title : phdpassoutstudent.degree_title;
    phdpassoutstudent.doa = doa ? doa : phdpassoutstudent.doa;
    phdpassoutstudent.doc = doc ? doc : phdpassoutstudent.doc;
    phdpassoutstudent.thesis_title = thesis_title ? thesis_title : phdpassoutstudent.thesis_title;
    phdpassoutstudent.supervisor = supervisor ? supervisor : phdpassoutstudent.supervisor;
    phdpassoutstudent.updatedBy = _id;
    
    await phdpassoutstudent.save();

    res.status(202).json({
      code: 202,
      status: true,
      message: "Updated Successfully",
      data: { phdpassoutstudent } })


    }
    catch{
        next(err)
    }
}

const deletephdpassout = async (req,res,next)=>{
  try{
    const { id } = req.params;
    const phdpassoutstudent = await PHDpassout.findById(id);
    if (!phdpassoutstudent) {
      res.code = 400;
      throw new Error("Not Found");
    }
    await PHDpassout.findByIdAndDelete(id);

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

const getphdpassout = async (req,res,next) =>{
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

    const total = await PHDpassout.countDocuments(query);
    const pages = Math.ceil(total / sizeNumber);

    const phdpassoutstudent = await PHDpassout.find(query)
      .sort({ updatedBy: -1 })
      .skip((pageNumber - 1) * sizeNumber)
      .limit(sizeNumber);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Faculty Resume List",
      data: { phdpassoutstudent, total, pages },
    });
  }
  catch(err){
    next(err)
  }
}

module.exports = { addphdpassout , updatephdpassout , deletephdpassout , getphdpassout};
