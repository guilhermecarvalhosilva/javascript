function fatorial(num) {
    var fat = 1
    for(var i = num; i >= 1; i--) {
        fat *= i
       
    }
    return fat
}


console.log(fatorial(5))

