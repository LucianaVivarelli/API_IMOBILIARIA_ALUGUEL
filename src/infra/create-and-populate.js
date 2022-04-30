/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

//==== Usuários
const CORRETORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CORRETORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "CODIGO" varchar(64),
    "COMICAOPORVENDA" varchar(64)
    );`;

const ADD_CORRETORES_DATA = `
INSERT INTO CORRETORES (ID, NOME, EMAIL, SENHA, CODIGO, COMICAOPORVENDA)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******','*******',10),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********','*******',10),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********','*******',10),
    (4, 'Adão Lima Duarte', 'Adão_fl@yahoo.com', '********','*******',10),
    (5, 'Jão pepe mineiro', 'Jão_fl@yahoo.com', '********','*******',10),
    (6, 'Moises Furtado', 'Moises_fl@yahoo.com', '********','*******',10)
`

function criaTabelaUsr() {
    db.run(CORRETORES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de corretores");
    });
}


function populaTabelaUsr() {
    db.run(ADD_CORRETORES_DATA, (error) => {
        if (error) console.log(error);
    });
}


db.serialize(() => {
    criaTabelaUsr();
    populaTabelaUsr();
});