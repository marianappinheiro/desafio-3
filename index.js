class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque
        
        if (this.tipo === "Guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "Mago") {
            ataque = "magia"
        } else if (this.tipo === "Monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let warrior = new Hero("Aragorn", "37", "Guerreiro")
let wizard = new Hero("Gandalf", "68", "Mago")
let monk = new Hero("Wong", "54", "Monge")
let ninja = new Hero("Kakashi", "30", "Ninja")

warrior.atacar()
wizard.atacar()
monk.atacar()
ninja.atacar()