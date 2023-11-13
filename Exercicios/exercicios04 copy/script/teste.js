var n = [8, 15, 90 ,80 ,1]

var maior = n[0] 
var menor = n[0] 
for(let pos = 0; pos < n.length; pos++) {
    if(n[pos] > maior) {
        maior = n[pos]
    }
    if(n[pos] < menor) {
        menor = n[pos]
    }
}


console.log(maior)
console.log(menor)
