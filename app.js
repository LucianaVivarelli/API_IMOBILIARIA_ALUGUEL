// Aqui as variáveis:

const express = require('express') // importação expres
const app = express() // instanciou express dentro de app
const port = 4000 // escolhendo a porta

const clienteController = require(`./src/controllers/cliente-controller`);

const Cliente = require('./src/models/cliente-model');



app.get('/', (req, res) =>{
    res.json("Cliente funcionando")
});


// Aqui as respostas:

clienteController(app); 

// chamando a porta que vai ser usada
app.listen (port, () =>{
    console.log(`Exemple server listening on port ${port}`)
})