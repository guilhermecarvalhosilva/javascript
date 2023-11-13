        function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO]Verifique os dados novamente')
    }   else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'image/jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'image/homem.jpg')
            } else {
                img.setAttribute('src', 'image/idoso.jpg')
            }
        
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'image/jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'image/mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}