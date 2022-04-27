//Quando for subir pro github tem q dar um git ignore na pasta node-modules

const express = require('express') // importação expres
const app = express() // instanciou express dentro de app
const port = 4000 // escolhendo a porta

const clienteController = require(`./src/controllers/cliente-controller`);

const Cliente = require('./src/models/cliente-model');




app.use(express.json());
// o middle sempre coloca antes da abertura da porta 

const novoCliente = new Cliente("Eliane", "eliane@eliane.com", "12345");
console.log(novoCliente);


// resposta
clienteController(app); 
// aqui eu coloquei para importar o controller e o bd pq serão usados em mais de um arquivo, 
//qdo vai usar apenas em um arquivo, basta chamar no arquivo q vai usar, por isso q o model não esta chamando aqui



// antes de abrir o localhost, tem q dar um node app.js
app.listen (port, () =>{ // chamando a porta que vai ser usada
    console.log(`Exemple server listening on port ${port}`)
})