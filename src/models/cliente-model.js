var id = 0;

// Criando a classe cliente
class Cliente{ 
    constructor(nome, cpf, endereco, tipoDeImovel, condicaoDoImovel, email, senha){
        this.id = id++; 
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.tipoDeImovel = tipoDeImovel;
        this.condicaoDoImovel = condicaoDoImovel;
        this.email = email;
        this.senha = this.validarSenha(senha);
    }
    // Condições para validar cadastro

    validarSenha(senha) {
    if(senha.length <= 5){
        return senha;
    }else{
        throw new Error ("Senha deve ter 5 caracteres")
    }
    }
    }


module.exports = Cliente