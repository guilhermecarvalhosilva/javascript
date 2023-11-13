let num = [5, 8, 2, 9, 3].sort()
let pos = num.indexOf(25)
console.log(num)
if(pos == -1) {
    console.log(`Esse valor não existe`)
} else {
    console.log(`Esse valor se encontra na posição ${pos}`)
}

/*
for(let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`) 

}

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)

*/

/*

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) 
}

*/


   