const File = require("../models/File");
const Category = require("../models/Catagory");
const Post = require("../models/Post");

const addPost = async (req, res, next) => {
  try {
    const { title, desc, file, category } = req.body;
    const { _id } = req.user;

    if (file) {
      const isfileExist = await File.findById(file);
      if (!isfileExist) {
        res.code = 400;
        throw new Error("File not found");
      }
    }

    const iscategoryExist = await Category.findById(category);
    if (!iscategoryExist) {
      res.code = 400;
      throw new Error("Category not found");
    }

    const newPost = new Post({
      title,
      desc,
      file,
      category,
      updatedBy: _id,
    });
    await newPost.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "New post created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// update a post
const updatePost = async (req, res, next) => {
  try {
    const { title, desc, file, category } = req.body;
    const { id } = req.params;
    const { _id } = req.user;

    if (file) {
      const isfileExist = await File.findById(file);

      if (!isfileExist) {
        res.code = 400;
        throw new Error("File not found");
      }
    }

    if (category) {
      const iscategoryExist = await Category.findById(category);

      if (!iscategoryExist) {
        res.code = 400;
        throw new Error("Category not found");
      }
    }

    const post = await Post.findById(id);

    if (!post) {
      res.code = 400;
      throw new Error("Post not found");
    }

    post.title = title ? title : post.title;
    post.desc = desc;
    post.file = file;
    post.category = category ? category : post.category;
    post.updatedBy = _id;

    await post.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Post updated successfully",
      data: { post },
    });
  } catch (err) {
    next(err);
  }
};

// delete post
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      res.code = 400;
      throw new Error("Post not found");
    }

    await Post.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      code: 200,
      message: "Post deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};

// post list || get posts
const getPost = async (req, res, next) => {
  try {
    // for pagination
    const { page, size, q } = req.query;

    const pageNumber = parseInt(page) || 1;
    const sizeNumber = parseInt(size) || 10;
    let query = {};

    if (q) {
      const search = new RegExp(q, "i");
      query = {
        $or: [{ title: search }],
      };
    }

    const total = await Post.countDocuments(query);
    const pages = Math.ceil(total / sizeNumber);

    const posts = await Post.find(query)
      .sort({ updatedBy: -1 })
      .skip((pageNumber - 1) * sizeNumber)
      .limit(sizeNumber);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Successfully get all the posts",
      data: { posts, total, pages },
    });
  } catch (err) {
    next(err);
  }
};

// get detailed post or single post

const getsinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id)
      .populate("file")
      .populate("category")
      .populate("updatedBy", "-password -verificationCode -forgotpasswordCode");

    if (!post) {
      res.code = 400;
      throw new Error("Post not found");
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: "Post found successfully",
      data: { post },
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { addPost, updatePost, deletePost, getPost, getsinglePost };
