var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 6) {
    console.log(`boa madrugada!`)
} else if (hora < 12) {
    console.log(`bom dia!`)
} else if (hora < 19) {
    console.log(`boa tarde!`)
}  else if (hora < 24) {
    console.log(`boa noite!`)
}