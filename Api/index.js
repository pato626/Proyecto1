require('dotenv').config();

const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT || 3001;

conn.sync({force: false}).then(()=>{
    // custiones de configuracion de la db / pendiente

    server.listen(port, ()=>{
        console.log(`Server running on port: ${port}`);
    });
});