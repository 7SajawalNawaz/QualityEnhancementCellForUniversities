const Form = require("../models/Form");

// faculty_resume created
const addfaculty = async (req, res, next) => {
  try {
    const {
      name,
      personal,
      experience,
      honor_awards,
      memberships,
      honor_students,
      service,
      brief_statement_of_research,
      publications,
      research_grants,
      other_research,
      selected_professional_presentation,
    } = req.body;
    const { _id } = req.user;

    const newForm = new Form({
      name,
      personal,
      experience,
      honor_awards,
      memberships,
      honor_students,
      service,
      brief_statement_of_research,
      publications,
      research_grants,
      other_research,
      selected_professional_presentation,
      updatedBy: _id,
    });
    await newForm.save();

    res.status(201).json({
      code: 201,
      status: true,
      message: "Faculty Resume Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};
// faculty_resume update
const updatefaculty = async (req, res, next) => {
  try {
    const {
      name,
      personal,
      experience,
      honor_awards,
      memberships,
      honor_students,
      service,
      brief_statement_of_research,
      publications,
      research_grants,
      other_research,
      selected_professional_presentation,
    } = req.body;
    const { id } = req.params;
    const { _id } = req.user;

    const resume = await Form.findById(id);
    if (!resume) {
      res.code = 400;
      throw new Error("Faculty Resume Not Found");
    }

    resume.name = name ? name : resume.name;
    resume.personal = personal ? personal : resume.personal;
    resume.experience = experience ? experience : resume.experience;
    resume.honor_awards = honor_awards ? honor_awards : resume.honor_awards;
    resume.memberships = memberships ? memberships : resume.memberships;
    resume.honor_students = honor_students
      ? honor_students
      : resume.honor_students;
    resume.service = service ? service : resume.service;
    resume.brief_statement_of_research = brief_statement_of_research
      ? brief_statement_of_research
      : resume.brief_statement_of_research;
    resume.publications = publications ? publications : resume.publications;
    resume.research_grants = research_grants
      ? research_grants
      : resume.research_grants;
    resume.other_research = other_research
      ? other_research
      : resume.other_research;
    resume.selected_professional_presentation =
      selected_professional_presentation
        ? selected_professional_presentation
        : resume.selected_professional_presentation;
    resume.updatedBy = _id;

    await resume.save();

    res.status(202).json({
      code: 202,
      status: true,
      message: "Faculty Resume Updated Successfully",
      data: { resume },
    });
  } catch (err) {
    next(err);
  }
};
// delete_faculty_resume
const deletefaculty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resume = await Form.findById(id);
    if (!resume) {
      res.code = 400;
      throw new Error("Faculty Resume Not Found");
    }
    await Form.findByIdAndDelete(id);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Faculty Resume Deleted Successfully",
    });
  } catch (err) {}
};

// faculty_resume list
const getfaculty = async (req, res, next) => {
  try {
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

    const total = await Form.countDocuments(query);
    const pages = Math.ceil(total / sizeNumber);

    const resume = await Form.find(query)
      .sort({ updatedBy: -1 })
      .skip((pageNumber - 1) * sizeNumber)
      .limit(sizeNumber);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Faculty Resume List",
      data: { resume, total, pages },
    });
  } catch (err) {
    next(err);
  }
};
// get faculty by id
const getFacultyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const resume = await Form.findById(id);
    if (!resume) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: "Faculty resume not found.",
      });
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: "Faculty Resume Retrieved",
      data: resume,
    });
  } catch (err) {
    next(err);
  }
};


module.exports = { addfaculty, updatefaculty, deletefaculty, getfaculty , getFacultyById};
