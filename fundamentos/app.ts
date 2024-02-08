/*const user = {
    name: "Gus",
    age: 21,
    showName(){
        console.log(this.name)
    }
}

const oherUser = {
    name: "Lis",
    age: 20,
    showName(){
        console.log(this.name)
    }
}
user.showName()
oherUser.showName()

*/

// Classes serve para criar objetos, a estrutura é a mesma de um objeto
class User {
    name: string = 'Gus'
    age: number = 21

    // O construtor é um método que é chamado quando a classe é instanciada
    // Palavra this é usada para acessar os atributos de um objeto, e acessar os métodos de um objeto
    constructor(name: string, age: number){
        this.name = name 
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const  user = new User('Gus', 21)
user.showName() 

const otherUser = new User('Lis', 20)
otherUser.showName()