        function verificar() {
    
    var inicio = document.getElementById('txtinicio')
    var passo = document.getElementById('txtpasso')
    var fim = document.getElementById('txtfim')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        alert(`[ERRO] Dados Invalido`)
    } else {

        var i = Number(inicio.value)
        var p = Number(passo.value)
        var f= Number(fim.value)

        if(p == 0) {
            // Passo == 0, recebe 1
            alert('Sera adotado valor 1 ao passo')
            
            for(var c = i; c <= f; c++) {
                res.innerHTML += `<br>  \u{1F449} ${c}  <br>`
            }
        } else  if( i <= f) {
            // Ordem crescente
            for(var c = i; c <= f; c+=p) {
                res.innerHTML += `<br> \u{1F449} ${c} <br>`
            }
        } else {
            // Ordem decrecente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `<br> \u{1F449} ${c} <br>`
            }
        }
        res.innerHTML += `<br> \u{1F449} \u{1F3C1}`
        
    }
}