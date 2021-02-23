const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');
// nombre de ruta
router.post('/send-email', async (req, res) => {
    // manejador de funcion

    const { name, email, phone, message } = req.body;

    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Message: ${message}</li>
    </ul>
    `;

    //devuelve un objeto
    const transporter = nodemailer.createTransport({
        host:'',
        port: '',
        secure: false,
        auth:{
            user:'donde se envia el correo',
            pass: ''
        },
        // para enviar desde un lugar distinto que del host introducido
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    const info = await transporter.sendMail({
        from:'envio a mi servidor',
        to:' a donde lo envio de ahi',
        subject: 'WebSite contact form',
        text: 'hola mundo'

    });

    console.log("message sent", info-messageId)
    
    res.redirect('/success.html');

    console.log(req.body); // ver los datos que me estan enviando
    res.send('recibido');
});
module.exports = router;    