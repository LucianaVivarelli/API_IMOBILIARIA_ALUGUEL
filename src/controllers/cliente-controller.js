const Cliente = require('../models/cliente-model')

// chamo a exportação:
module.exports = (app) =>{
    const cliente = new Cliente(app)
    app.get('/cliente', (req, res) =>{
        res.json({"banco de dados":cliente})
    })
}
// get ler


// post inserir

//delete deletar

// put criar um novo atributo

/* patch permite informar ao nosso server qual propriedade foi alterada, 
sem a necessidade de trafegar todo objeto. Para que você possa ter uma melhor entendimento, 
vamos atualizar o projeto desenvolvido no meu artigo anterior informado acima.*/


