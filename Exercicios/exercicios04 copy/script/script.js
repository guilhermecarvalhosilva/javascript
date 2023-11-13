var num = document.getElementById(`fnum`)
var res = document.getElementById(`res`)
var lista = document.getElementById(`flista`)
var numeros = []




//Validação do numero 
// 1- Verifica se o campo input está vazio
// 2- Verifica de o numero é menor que um
// 3- Verifica de o numero é maior que 100
function validacaoNum(n) {
    if(n.length == 0 || n < 1 || n > 100) {
        return true
    } else {
        return false
    }
}

//Validação do numero 
// 1- Verifica se o numero digitado pelo usuario ja existe no array
function validacaoLista(n, nums) {
    if(nums.indexOf(n) != -1) {
        return true 
    } else {
        return false
    }
}



function adicionar() {
    var addN = Number(num.value)
    if(validacaoNum(addN) || validacaoLista(addN, numeros)) {
        alert(`Valor invalido ou numero ja existente`)
    } else {
        res.innerHTML = ``
        numeros.push(addN)
        var option = document.createElement(`option`)
        lista.appendChild(option)
        option.innerHTML += `Valor adicionado ${numeros[(numeros.length - 1)]}`
    }
    num.value = ""
    num.focus()

}



function finalizar() {
    if(numeros.length == 0) {
        alert(`[Erro] nenhum numero foi digitado`)
    } else {

        var maior = numeros[0] 
        var menor = numeros[0] 
        var soma = 0
            for(let pos = 0; pos < numeros.length; pos++) {
                soma += numeros[pos]
                if(numeros[pos] > maior) {
                    maior = numeros[pos]
                }
                if(numeros[pos] < menor) {
                    menor = numeros[pos]
                }
            }

        res.innerHTML += `Ao todo tem ${numeros.length} cadastrados <br> <br>`

        res.innerHTML += `o maior numero cadastrados ${maior} cadastrados <br> <br>`

        res.innerHTML += `o menor numero cadastrados ${menor} cadastrados <br> <br>`

        res.innerHTML += `A soma entre os numeros é ${soma} <br> <br>`

        res.innerHTML += `A média dos valores digitados é  ${(soma / numeros.length).toFixed(2).toString().replace('.', ',')} <br> <br>`
    }
}

