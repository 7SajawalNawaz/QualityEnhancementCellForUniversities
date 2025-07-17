const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuth");
const { fileController } = require("../controller/");
const upload = require("../middleware/upload");

// upload file from S3-Bucket
router.post(
  "/upload",
  isAuth,
  upload.single("file"),
  fileController.uploadFile
);

// get signed url
router.get(
  "/signed-url",
  isAuth ,
  fileController.getSignUrl 
)

// delete file from S3-Bucket
router.delete(
  "/delete" ,
  isAuth ,
  fileController.deleteFile
)

router.get("/files", isAuth, fileController.getAllFiles);

router.put("/verify", isAuth, fileController.verifyFile);

router.get("/status", isAuth, fileController.getFileStatus);

module.exports = router;
