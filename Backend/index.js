const http = require ('http')
const app = require ('./app')
const {APP_PORT} = require ('./config/keys')

const server=http.createServer(app)


// creating server
server.listen(APP_PORT , ()=>{
    console.log(`Server is running on port ${APP_PORT}.... ` || 8000);
    
})