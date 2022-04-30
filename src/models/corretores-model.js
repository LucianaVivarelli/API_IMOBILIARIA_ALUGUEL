class Corretores{
    constructor(nome, email, senha, codigo, comicaoporvenda){
        this.nome = nome;
        this.email = email;
        this.senha = this.verificarSenha(senha);
        this.codigo = codigo;
        this.comicaoporvenda = comicaoporvenda;
    }
    verificarSenha(senha){
        if(senha.length <= 5){
            return senha
        }else{
            throw new Error("Senha deve ter até 5 caracteres")
        }
    }
}

module.exports = Corretores;