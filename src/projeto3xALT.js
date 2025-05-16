class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

atacar(){
    if (this.tipo == "mago"){
        return  "usou magia";
    } else if (this.tipo == "guerreiro"){
        return  "usou espada";
    } else if (this.tipo == "monge") {
        return  "usou artes marciais";
    } else if (this.tipo == "Ninja") {
        return  "usou shuriken";
    } else {
        return  "não tem classe, nem arma";
        }
    }
}

let heroUser = new heroi("Hero Lucas", 23, "mago");
console.log( heroUser.nome + " tem " + heroUser.idade + " anos e sua classe é: " + heroUser.tipo + " e " + heroUser.atacar() + "." );