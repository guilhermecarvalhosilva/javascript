        function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.body 
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if ( hora < 12) {
        img.src = `image/manha.jpg` //bom dia
        fundo.style.background = `#e2cd9f`

    } else if ( hora < 18) {
        img.src = `image/tarde.jpg` //boa tarde
        fundo.style.background = `#dc9a82`

    }  else {
        img.src = `image/noite.jpg` //boa noite
        fundo.style.background = `#485c66`
    }


}