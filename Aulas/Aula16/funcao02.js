function somar(n1=0, n2=0) {
    return n1 + n2
}

let res = somar(5)
console.log(res)


function pessoa(nome=`Sem nome`, idade=`Sem idade`) {
    return `Nome: ${nome}; Idade: ${idade}`
}

let res2 = pessoa(`Guilherme`)
console.log(res2)