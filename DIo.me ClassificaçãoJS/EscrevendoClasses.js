class Hero {
    constructor(Nome, Idade, Tipo){
       this.Nome = Nome
       this.Idade = Idade
       this.Tipo = Tipo
    }
       
    Ataque(){
       if (this.Tipo === "Mago") {
          console.log(`O Herói ${this.Tipo} lançou um feitiço mágico!`)
       } else if (this.Tipo === "Monge") {
          console.log(`O Herói ${this.Tipo} atacou com Artes Marciais.`)
       } else if (this.Tipo === "Ninja") {
          console.log(`O Herói ${this.Tipo} atacou com shuriken.`)
       } else if (this.Tipo === "Guerreiro") {
          console.log(`O Herói ${this.Tipo} atacou com Espada.`)
       }
    }
 }
 
 let CaractHero = new Hero("Joser", 23, "Ninja")
 console.log(CaractHero)
 CaractHero.Ataque()