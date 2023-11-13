    function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano').value
    var fmas = window.document.getElementById('txtmas')
    var ffem = window.document.getElementById('txtfem')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var res = window.document.getElementById('res')
    
    if(fano.length == 0 || fano > ano) {
        alert(`[ERRO] dados validados errados`)
    } else  {
        var idade = ano - fano
        var genero = ''

        if(fmas.checked) {
            genero = 'Masculino'
            
            if(idade >=0 && idade < 12) {
                img.src = `image/menino.jpg`
            } else if (idade < 19) {
                img.src = `image/jovem-homem.jpg`
            } else if(idade < 50) {
                img.src = `image/homem.jpg`
            } else {
                img.src = `image/idoso.jpg`
            }
        
        } else if(ffem.checked) {
            genero = 'Feminino'
            
            if(idade >=0 && idade < 12) {
                img.src = `image/menina.jpg`
            } else if (idade < 19) {
                img.src = `image/jovem-mulher.jpg`
            } else if(idade < 50) {
                img.src = `image/mulher.jpg`
            } else {
                img.src = `image/idosa-mulher.jpg`
            }
        } 
    }

    
  res.innerHTML = `Você tem ${idade} anos e é do sexo ${genero}`
  res.appendChild(img)
}