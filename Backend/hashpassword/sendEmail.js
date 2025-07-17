const nodemail = require ('nodemailer')
const { senderEmail, senderPassword } = require ("../config/keys")

const sendEmail = async ({emailTo , subject , code , content})=>{
    const transporter = nodemail.createTransport({
        host :"smtp.gmail.com",
        port : 587 ,
        secure : false ,
        auth : {
            user : senderEmail,
            pass : senderPassword
        }
        
    })

    const message = {
         from: "7sajawalnawaz@gmail.com",
        to : emailTo,
        subject ,
        html : `
        <div>
       <h3> Use this below code ${content} </h3>
       <p><strong> Code </strong></p> ${code}
        </div>
        `
    }

    await transporter.sendMail(message);
}


module.exports=sendEmail;