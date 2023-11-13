var saldo =  500


function depositar(grana) {
    if(grana > 0) {
        saldo += grana
        console.log(`depositado`)
    } else {
        console.log(`Valor digitado errado`)
    }
}

function saque(dinheiro) {
    if(dinheiro > 0 && dinheiro <= saldo) {
        saldo -= dinheiro
        console.log(`saque realizado`)
    } else {
        console.log(`Saldo insuficiente`)
    }
}

function mostrarSaldo(saldo) {
   console.log(`${saldo.toFixed(2)}`)
}

saque(200)
mostrarSaldo(saldo)