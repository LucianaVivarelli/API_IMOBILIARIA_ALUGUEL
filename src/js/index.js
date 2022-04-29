//Váriaveis para importar os pacotes através do request
const express = require('express');
 // instanciar o express na var app
const app = express();
//local da porta
const port = 4000;

//chamar os controllers e models
const Cliente = require('../models/cliente-model.js');
const clienteController = require('../controllers/cliente-controller.js');

//teste
const novoCliente = new Cliente("Eliane", "080.080.080-08", "Rua dos Bobos, n.0, Casa Muito Engraçada, Vinicios de Moraes",
"Casa com quintal e garagem", "Aluguel", "eliane@eli.com", "eli45");
console.log(novoCliente);

// criando a rota com o caminho '/' e uma calback com  request e resposta
app.get('/', (req, res) => {
    res.json("Hello World")
});


// colocando o express pra rodar na porta com a função listen
app.listen(port, () => {
    console.log(`Rodando o servidor na porta ${port}`)
})
