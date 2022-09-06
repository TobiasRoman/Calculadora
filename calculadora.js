const sumar = require('./funciones/sumar')
const restar = require('./funciones/restar')
const multiplicar = require('./funciones/multiplicar')
const dividir = require('./funciones/dividir')
const process = require("process")
console.log(process.argv)

// process devuelve donde esta el archivo dentro de ese comando ,
let operacion = process.argv.tolowercase[2] //Guarda la palabra de esa posición
let numero1 = process.argv[3]
let numero2 = process.argv[4] // con NUMBER se pasa valor numero
  // Tolowercase tranforma todos los caracteres en miniscula
  if(operacion === "sumar"){
    console.log("**********************************")
    console.log("El resultado de la suma es: " + sumar(numero1, numero2))
    console.log("**********************************")
}

if(operacion === "restar"){
    console.log("**********************************")
    console.log("El resultado de la resta es: " + restar(numero1, numero2))
    console.log("**********************************")
}

if(operacion === "multiplicar"){
    console.log("**********************************")
    console.log("El resultado de la multiplicación es: " + multiplicar(numero1, numero2))
    console.log("**********************************")
}

if(operacion === "dividir"){
    if(numero1 !== 0 && numero2 !== 0){
        console.log("**********************************")
        console.log("El resultado de la división es: " + dividir(numero1, numero2))
        console.log("**********************************")
    }else{
        console.log(dividir(numero1, numero2))
    }
}
