const {
  PORT,
  CONNECTION_URL,
  JWT_SECRET,
  SENDER_EMAIL,
  SENDER_PASSWORD,
  AWS_ACCESS_KEY,
  AWS_ACCESS_SECRET_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION,
} = process.env;

module.exports = {
  port: PORT,
  connectionUrl: CONNECTION_URL,
  jwtSecret: JWT_SECRET,
  senderEmail: SENDER_EMAIL,
  senderPassword: SENDER_PASSWORD,
  awsAccessKey: AWS_ACCESS_KEY,
  awsAcsessSecretKey: AWS_ACCESS_SECRET_KEY,
  awsBucketName: AWS_BUCKET_NAME,
  awsRegion: AWS_REGION,
};
