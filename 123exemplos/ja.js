    function verificar() {
        var num = document.getElementById(`txtnum`)
        var res = document.getElementById(`res`)

        if(num.value.length == 0)  {
            alert (`Dados errados`)
        } else {
           var n = Number(num.value)

           if(n == 0) {
                alert(`O numero digitado é 0, então sera atribuido o valor de 1`)
                n = 1
                res.style.textAlign = `center`
                res.innerHTML = `Gerar tabuado do <strong>${n}</strong><br>`
                for(var i = 1; i <= 10; i++) {
                    res.innerHTML += `${n} X ${i} = ${n*i} <br>`
                }
           } else {
                res.style.textAlign = `center`
                res.innerHTML = `Gerar tabuado do <strong>${n}</strong><br>`
                for(var i = 1; i <= 10; i++) {
                    res.innerHTML += `${n} X ${i} = ${n*i} <br>`
                }
           }
        }
    }