    function verificar() {
        var num = document.getElementById('txtnum')
        var res = document.getElementById('res')

        res.innerHTML = `Tabuada do numero <strong>${Number(num.value)}</strong> <br>`

        if(num.value.length == 0) {
            alert('[Erro] Dados Invalido!!!')
        } else {

            for(var t = 1; t <=100; t++) {
                res.innerHTML += `${Number(num.value)} X ${Number(t)} = ${Number(num.value)*Number(t)} <br>`
            }
        }
}



/*
 for(t = 1; t <= 10; t += 1) {
                res.innerHTML(`${Number(num)} X ${t} = ${num*t} <br>`)
            }
*/