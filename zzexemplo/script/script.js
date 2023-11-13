function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERRO!] Dados Invalido!!!`)
    } else {

        var mas = document.getElementById('mas')
        var fem = document.getElementById('fem')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var idade = ano - Number(fano.value)

        if(mas.checked) {
            genero = 'Homem'

            if(idade < 10) {
                img.src = `image/menino.jpg`
            } else if(idade < 24) {
                img.src = `image/jovem-homem.jpg`
            } else if(idade < 60) {
                img.src = `image/homem.jpg`
            } else {
                img.src = `image/idoso.jpg`
            }
        } else if(fem.checked) {
            genero = 'Mulher'

            if(idade < 10) {
                img.src = `image/menina.jpg`
            } else if(idade < 24) {
                img.src = `image/jovem-mulher.jpg`
            } else if(idade < 60) {
                img.src = `image/mulher.jpg`
            } else {
                img.src = `image/idosa-mulher.jpg`
            }
        }

    }

    res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
   res.appendChild(img)
}