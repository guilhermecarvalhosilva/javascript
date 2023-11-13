   function verificar() {

    var salario = document.getElementById('txtsalario')
    var res = document.getElementById('res')

   if( salario.value.length == 0) {
       alert(`[ERRO] Dados Invalidos`)
   } else{
        var s = Number(salario.value)
      
        
        if(s <= 280) {
            var p = 20
            var a = (s * p) / 100
            var na = s + a
            res.innerHTML += `Salário antes do reajuste: ${s} <br>`
            res.innerHTML += `o percentual do aumento aplicado: ${p}% <br>`
            res.innerHTML += `O valor do aumentendo: ${a}<br>`
            res.innerHTML += `O novo salário, após o aumento: ${na}<br>`
        } else if(s <= 700) {
            var p = 15
            var a = (s * p) / 100
            var na = s + a
            res.innerHTML += `Salário antes do reajuste: ${s} <br>`
            res.innerHTML += `o percentual do aumento aplicado: ${p}% <br>`
            res.innerHTML += `O valor do aumentendo: ${a}<br>`
            res.innerHTML += `O novo salário, após o aumento: ${na}<br>`

        } else if(s <= 1500) {
            var p = 10
            var a = (s * p) / 100
            var na = s + a
            res.innerHTML += `Salário antes do reajuste: ${s} <br>`
            res.innerHTML += `o percentual do aumento aplicado: ${p}% <br>`
            res.innerHTML += `O valor do aumentendo: ${a}<br>`
            res.innerHTML += `O novo salário, após o aumento: ${na}<br>`
        } else {
            var p = 5
            var a = (s * p) / 100
            var na = s + a
            res.innerHTML += `Salário antes do reajuste: ${s} <br>`
            res.innerHTML += `o percentual do aumento aplicado: ${p}% <br>`
            res.innerHTML += `O valor do aumentendo: ${a}<br>`
            res.innerHTML += `O novo salário, após o aumento: ${na}<br>`
        }
   }


   
}