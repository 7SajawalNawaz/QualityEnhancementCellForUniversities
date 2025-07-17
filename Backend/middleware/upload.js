const multer = require('multer');
const path = require('path');

// Set up storage engine to use memory storage
const storage = multer.memoryStorage();

// File filter to accept only certain types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, DOCX, PNG, and JPEG files are allowed'), false);
  }
};

// Initialize Multer with the above configurations
const upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 50 } });

module.exports = upload;