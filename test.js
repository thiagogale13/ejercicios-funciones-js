// Importar las funciones desde 3-funciones.js
const {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
} = require('./3-funciones');

// Ejecutar las funciones e imprimir los resultados en la terminal
despedir(); // Imprime "Adiós"

console.log(multiplicarPorDos(4)); // Imprime 8
console.log(esMayorDeEdad(20)); // Imprime true
console.log(multiplicar(5, 3)); // Imprime 15
console.log(saludarPersonalizado('Thiago', 'Galeano')); // Imprime "Hola, Thiago Galeano"
console.log(calcularPotencia(2, 3)); // Imprime 8
console.log(restar(10, 5)); // Imprime 5
console.log(dividir(20, 4)); // Imprime 5

console.log(multiplicarDOS(7, 3)); // Imprime 21
console.log(saludar('Thiago')); // Imprime "Hola, Thiago"
console.log(esPar(4)); // Imprime true
console.log(calcularArea(3)); // Imprime el área de un círculo con radio 3

console.log(suma(3)); // Imprime 6
console.log(fibonacci(6)); // Imprime 8
console.log(factorial(5)); // Imprime 120
console.log(potencia(2, 3)); // Imprime 8

console.log(saludarFlecha('Thiago')); // Imprime "Hola Thiago"
console.log(multiplicarFlecha(2, 3)); // Imprime 6
