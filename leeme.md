const express = require('express');
git init
npm init -y --> crea package.json
npm i express
    node src/index.js --> ejecuta

------------- Reinicia servidor por mi -----------------
npm i nodemon -D
-D instalarlo como dependencia de desarrollo significa que caundo este en produccion este modulo no va a ser instalado

----------scripts------------
package.json 
"scripts": {
    "dev": "nodemon src/app.js"
}
se ejecuta --> npm run dev

---------node mailer----------
modulo de node para enviar mails
    > configuramos nuestro servidor smtp

para gmail hay que usar Oauth2 

-------------ROUTER---------------
const { Router } = require('express');
    me devuelve un objeto que me permite crear un enrutador
    o un obj para definir rutas

Form
    <form action="/send-email" method="POST">
    aca es donde digo donde va a ser enviado --> ruta del servidor "send-email"