function bin2dec(num = document.getElementById("inputBin").value) {
    
    let resposta

    if (isNaN(parseInt(num))) {
        return window.alert("Not a valid value. Please insert only 0 or 1.")

    } else if (num) {
        num = num.toString().split('').reverse().join('')
        soma = []
        for (let i = num.length-1; i >= 0; --i) {
            soma.push(num[i] * 2 ** i)
        }
        soma = soma.reduce((a, b) => a + b)
        resposta = soma
        document.getElementById("outputDec").value = resposta
    }
}
