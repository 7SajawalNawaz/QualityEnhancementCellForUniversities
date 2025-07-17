const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
// configure dotenv, must be before database connection
dotenv.config();
const cors = require ('cors')

const connectMongodb = require('./init/mongoDb');
const { authRoute , categoryRoute , fileRoute , postRoute, formRoute, phdpassoutRoute, msmphillpassoutRoute } = require('./routes');
const notFound = require('./controller/notFound');
const errorHandler = require('./middleware');

// Database connection
connectMongodb();

// App init
const app = express();

// Using third-party middleware instances
app.use(express.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(morgan('dev'));
app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: "GET,POST,PUT,DELETE", // Allow specific methods (you can customize this)
    allowedHeaders: "Content-Type,Authorization", // Customize allowed headers if necessary
  }))

// Route section
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category' , categoryRoute);
app.use('/api/v1/file' , fileRoute)
app.use('/api/v1/post' , postRoute)
app.use('/api/v1/form' , formRoute)
app.use('/api/v1/phd' , phdpassoutRoute)
app.use('/api/v1/msmphil' , msmphillpassoutRoute)

// If the route is not found, use notFound middleware
app.use('*', notFound);

// Error handling middleware
app.use(errorHandler)

// Export module
module.exports = app;