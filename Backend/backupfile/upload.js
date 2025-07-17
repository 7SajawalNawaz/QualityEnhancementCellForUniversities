const multer = require("multer");
const generateCode = require("../hashpassword/generateCode");
const path = require("path");

// npm i multer used to upload files

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    // for original_file_name in uploads
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    const fileName = originalName.replace(extension, "");
    const compressedFileName = fileName.split("").join("_");
    const lowercaseFileName = compressedFileName.toLocaleLowerCase();
    const code = generateCode(12);
    const finalFile = `${lowercaseFileName}_${code}${extension} `;
    callback(null, finalFile);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    const mimetype = file.mimetype;

    if (
      mimetype === "image/jpg" ||
      mimetype === "image/jpeg" ||
      mimetype === "image/png" ||
      mimetype === "application/pdf"
    ) {
      callback(null, true);
    } else {
      callback(
        new Error("Only .jpg or .jpeg or .png or .pdf format is allowed")
      );
    }
  },
});

module.exports = upload;
