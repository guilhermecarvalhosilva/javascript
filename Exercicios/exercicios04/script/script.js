    function verificar() {
    
    var inicio = document.getElementById('txtinicio')
    var passo = document.getElementById('txtpasso')
    var fim = document.getElementById('txtfim')
    var res = document.getElementById('res')
    res.innerHTML = `Contando>>>`

    if(inicio.value.length == 0 || passo.value.length == 0 || passo.value.length == 0) {
        alert(`[ERRO] Dados Invalido`)
    } else {

        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)
        res.innerHTML += `${i.value} ${p.value} ${f.value}`

        for(var c = i; i <= f; c+=p) {
            res.innerHTML += `${c} <br>`
        }
    }

}