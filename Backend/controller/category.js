const Catagory = require("../models/Catagory");
const User = require("../models/User");

// add category Controller
const addCategory = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const { _id } = req.user;

    const isCategoryExsist = await Catagory.findOne({ title });
    if (isCategoryExsist) {
      res.code = 400;
      throw new Error("Category already exists");
    }

    const user = await User.findById(_id);
    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    const newCategory = new Catagory({ title, desc, updatedBy: _id });
    await newCategory.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Category added successfully",
    });
  } catch (err) {
    next(err);
  }
};

// update category Controller
const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    const { title, desc } = req.body;
    const category = await Catagory.findById(id);

    if (!category) {
      res.code = 404;
      throw new Error("Category not found");
    }

    const isCategoryExsist = await Catagory.findOne({ title });
    if (
      isCategoryExsist &&
      isCategoryExsist.title === title &&
      String(isCategoryExsist._id) !== String(category._id)
    ) {
      res.code = 400;
      throw new Error("Title already exists");
    }

    category.title = title ? title : category.title;
    category.desc = desc;
    category.updatedBy = _id;

    await category.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Category updated successfully",
      data: { category },
    });
  } catch (err) {
    next(err);
  }
};

// delete category Controller
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Catagory.findById(id);

    if (!category) {
      res.code = 400;
      throw new Error("Category not found");
    }

    await Catagory.findByIdAndDelete(id);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// get categories or search categories & Pagination || get 10 number data on single page
const getCategory = async (req, res, next) => {
  try {
    const { q, size, page } = req.query;
    let query = {};

    const sizeNumber = parseInt(size) || 10;
    const pageNumber = parseInt(page) || 1;

    if (q) {
      const search = RegExp(q, "i");
      query = { $or: [{ title: search }, { desc: search }] };
    }

    const total = await Catagory.countDocuments(query);
    const pages = Math.ceil(total / sizeNumber);

    const categorysearch = await Catagory.find(query)
      .skip((pageNumber - 1) * sizeNumber)
      .limit(sizeNumber)
      .sort({ updatedBy: -1 });

    res.status(200).json({
      code: 200,
      status: true,
      message: " Category listed successfully ",
      data: { categorysearch , total , pages },
    });
  } catch (err) {
    next(err);
  }
};

// detailed get catagory by id 
const getdetailCategory = async (req , res , next )=>{
  try{
    const {id} = req.params

    const category = await Catagory.findById(id)

    if(!category){
      res.code = 400
      throw new Error ('Category not found')
    }

    res.status(200).json({
      code : 200 ,
      status : true,
      message : "Category found successfully",
      data : {category}
    })
  }
  catch(err){
    next (err)
  }
}

module.exports = { addCategory, updateCategory, deleteCategory, getCategory , getdetailCategory };
