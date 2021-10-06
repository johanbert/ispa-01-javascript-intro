// document.write("HOLA MUNDO")

// un string se puede escribir con " " o ' ' o ` `
const valorUno = document.getElementById('valor1')
const valorDos = document.getElementById('valor2')
const resultado = document.getElementById('resultado')

function sumar() {
    // console.log(document.getElementById('valor1').value)
    // console.log(Number(valorUno.value) + Number(valorDos.value))
    // NaN = Not a Number = No es Numero
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)


    // if (isNaN(val1) == false) {
    //     resultado.value = val1 + val2
    // } else {
    //     alert('OPERACION INCORRECTA, NO ES UN NUMERO')
    // }

    if (isNaN(val1) == true) {
        alert('OPERACION INCORRECTA, NO ES UN NUMERO')
    } else {
        resultado.value = val1 + val2
    }


}