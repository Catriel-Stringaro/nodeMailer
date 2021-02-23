const express = require('express');
const app = express();

// ayuda a decirme donde estan las carpetas
const path = require('path');

// esta config sirve para que podamos entender los datos que llegan del form
app.use(express.urlencoded({extended: false}));
// para comprender msjes enviados desde un SPA
app.use(express.json());

// aca leo las direcciones del enrutador
app.use(require('./routes/index'));

// con esto es para decirle al servidor que tenemos una carpeta publica
app.use(express.static(path.join(__dirname, 'public'))) 
// .static > nos dice que una carpeta puede ser accedida desde cualquier punto,
// pero hay que decirle dnd esta => path.join
// __dirname es una constante de node para dar la ruta completa en donde esta una carpeta, y que se concatene con una carpeta 'public' 

app.listen(3000, () => {
    console.log('server on port 3000');
});