const {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
  DeleteObjectCommand
} = require("@aws-sdk/client-s3");
const {
  awsRegion,
  awsAccessKey,
  awsAcsessSecretKey,
  awsBucketName,
} = require("../config/keys");
const generateCode = require("./generateCode");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client({
  region: awsRegion,
  credentials: {
    accessKeyId: awsAccessKey,
    secretAccessKey: awsAcsessSecretKey,
  },
});

// upload file to S3-Bucket
const uploadFileS = async ({ file, ext }) => {
  const key = `${generateCode(12)}_${Date.now()}${ext}`;
  const params = {
    Bucket: awsBucketName,
    Body: file.buffer,
    Key: key,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);

  try {
    console.log('Uploading file:', key); // Add logging
    await client.send(command);
    console.log('File uploaded successfully:', key);
    return key;
  } catch (err) {
    console.error('Error uploading file:', err);
    throw new Error('Failed to upload file to S3');
  }
};

const signedUrl = async (Key) => {
  const params = {
    Bucket: awsBucketName,
    Key,
  };

  const command = new GetObjectCommand(params);

  try {
    const url = await getSignedUrl(client, command, { expiresIn: 60 });
    return url;
  } catch (err) {
    console.log(err);
  }
};

// delete file from S3-Bucket
const deleteFileFromS3 = async (Key) => {
  const params = {
    Bucket: awsBucketName,
    Key,
  };
  const command = new DeleteObjectCommand(params);
  try {
    await client.send(command);
    return;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadFileS, signedUrl, deleteFileFromS3 };