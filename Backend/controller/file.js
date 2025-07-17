const path = require("path");
const { fileValidationExtension } = require("../validators/file");
const { uploadFileS, signedUrl , deleteFileFromS3 } = require("../hashpassword/awsS3");
const File = require("../models/File");
const jwt = require("jsonwebtoken");

// upload file in s3 bucket & databse
const uploadFile = async (req, res, next) => {
  try {
    const { file } = req;
    const { link } = req.body;
    const userId = req.user._id; // Assuming you have user information in the request

    if (file) {
      const ext = path.extname(file.originalname);
      const isValidExt = fileValidationExtension(ext);
      if (!isValidExt) {
        res.code = 400;
        throw new Error("Only .jpg || .pdf || .jpeg || .png format is allowed");
      }

      const key = await uploadFileS({ file, ext });

      const newFile = new File({
        key,
        size: file.size,
        mimetype: file.mimetype,
        createdBy: userId,
        link, // Save the link if provided
      });

      await newFile.save();

      res.status(201).json({
        code: 201,
        status: true,
        message: "File uploaded successfully",
        data: { key },
      });
    } else if (link) {
      const newFile = new File({
        key: generateCode(12), // Generate a unique key for the link
        createdBy: userId,
        link,
      });

      await newFile.save();

      res.status(201).json({
        code: 201,
        status: true,
        message: "Link submitted successfully",
        data: { link },
      });
    } else {
      res.status(400).json({ message: 'File or link is required' });
    }
  } catch (err) {
    next(err);
  }
};

// get signed url
const getSignUrl = async (req, res, next) => {
  try {
    const { key } = req.query;
    const url = await signedUrl(key);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Get signed url successfully",
      data: { url },
    });
  } catch (err) {
    next(err);
  }
};

// delete file from S3-Bucket || databse
const deleteFile = async ( req , res , next ) =>{
  try{
    const {key} = req.query ;
    // delete for S3-bucket
    await deleteFileFromS3(key)
    // delete for database
    await File.findOneAndDelete(key)

    res.status(200).json({
      code : 200 ,
      status : true ,
      message : "File deleted successfully"
    })
  }
  catch(err){
    console.log(err);
  }
}

const getAllFiles = async (req, res, next) => {
  try {
    const files = await File.find({}, 'key size mimetype status link createdBy');  // Get all files from the database including the link field
    res.status(200).json({ code: 200, status: true, message: "Files fetched successfully", data: files });
  } catch (err) {
    next(err);
  }
};


const verifyFile = async (req, res, next) => {
  try {
    const { key } = req.body;

    const file = await File.findOneAndUpdate(
      { key },
      { status: "verified", updatedAt: Date.now() },
      { new: true }
    );

    if (!file) {
      res.status(404).json({ code: 404, status: false, message: "File not found" });
      return;
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: "File verified successfully",
      data: file,
    });
  } catch (err) {
    next(err);
  }
};

const getFileStatus = async (req, res) => {
  try {
    // Extract token from Authorization header
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: "error",
        message: "Token not provided",
      });
    }

    // Decode the token to get the user details
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the file associated with the user using the correct user ID (decoded._id)
    const file = await File.findOne({ createdBy: decoded._id });

    if (!file) {
      return res.status(404).json({
        status: "error",
        message: "No file found for this user. Please upload a file.",
      });
    }

    // Send back the file status
    res.status(200).json({ status: file.status });
  } catch (error) {
    console.error("Error fetching file status:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};



module.exports = { uploadFile, getSignUrl , deleteFile , getAllFiles , verifyFile , getFileStatus };
