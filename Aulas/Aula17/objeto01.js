let amigo = {
    nome: "José",
    sexo: "M",
    peso: 86,
    engordar(p){
        console.log(`Engordou`)
        this.peso += p
    }
}

amigo.engordar(5)
console.log(`O ${amigo.nome} pesa ${amigo.peso}`)