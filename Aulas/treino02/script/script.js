    function carreguar() {
    
    var data = new Date()
    var hr = data.getHours()
    var res = window.document.getElementById('res')
    var corpo = window.document.body
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    res.innerHTML = `Agora são ${hr} horas`

    if(hr >=0 && hr < 12) {
        img.src = `image/manha.jpg`
        corpo.style.background = `yellow`
    } else if(hr < 19) {
        img.src = `image/tarde.jpg`
        corpo.style.background = `blue`
    } else if(hr < 24) {
        img.src = `image/noite.jpg`
        corpo.style.background = `red`
    }

    res.appendChild(img)
}