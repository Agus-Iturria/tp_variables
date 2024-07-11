//TP VARIABLES
//Ejercicio 1: Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.
let nombre = "Ricardo"

//Ejercicio 2: Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.
let DNI = 22334455

//Ejercicio 3: Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.
let isBlue = true

//Ejercicio 4: Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea la concatenación de las dos variables previamente creadas. 
let saludo = "Hola soy "
let nombre2 = "Ricardo Andres"
let saludo_y_nombre = saludo + nombre2
console.log(saludo_y_nombre)

//Ejercicio 5: Declarar dos variables de tipo number.
let numero1 = 5
let numero2 = 2
//A): Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas.
let suma = numero1 + numero2
//B): Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas.
let resta = numero1 - numero2
//C): Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas.
let multiplicacion = numero1 * numero2
//D): Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas.
let division = numero1 / numero2
//E): Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas.
let modulo = numero1 % numero2

//Ejercicio 6: Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?
let num1 = 34
let str = "Edad: "
let syn = str + num1
console.log(typeof syn) //la tercer variable es de tipo String

//Ejercicio 7: Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.
let si = true;
let no = !si;

//Ejercicio 8: Crear una variable de tipo number. 
//A): Reasignar un nuevo valor a esa misma variable para que sea su valor + 1.
let num2 = 2
num2 = num2 + 1
//B): Repetir la operación anterior utilizando una estrategia diferente.
let sum = +1
num2 += 1
//C): Repetir ambas operaciones con operadores de resta, multiplicación y división.
num2 = num2 - 1
num2 = num2 * 2
num2 = num2 / 2

//Ejercicio 9: Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis?
const valor = 1
valor = 2 //devuelve que el se itentò asignarle un valor a una constante

//Ejercicio 10: Crear dos variables de tipo string y dos variables de tipo number. 
let string1 = "Hola "
let string2 = "Mundo "
let number1 = 1
let number2 = 2
//A): Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas.
let contenedor = ""
contenedor = string1 + string2 + number1 + number2
//B): Repetir el punto anterior utilizando una estrategia diferente.
let template = `${string1} + ${string2} + ${number1} + ${number2}`

//Ejercicio 11: Crear dos variables de tipo number.
let n1 = 1
let n2 = 2
//A): Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
let equal = n1 == n2
let minor = n1 < n2
let bigger = n1 > n2
let unequal = n1 != n2

//Ejercicio 12: Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias.
//A)
let multiplicacion1= "12 * 3"
let division1 = "40 / 10"
let suma1 = "10 + 4"
let resta1 = "5 - 2"
let template1 = `multiplicaciòn: ${multiplicacion1}
                division: ${division1}
                suma: ${suma1}
                resta: ${resta1}`

//Ejercicio 13: Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.
let bill = 100
let percentageTip = 5
let tip = (percentageTip * bill)/100

//Ejercicio 14: Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento. 
let product = 200
let percetageDiscount = 15
let productDiscount = (product * 15) / 100
let finalPrice = product - productDiscount

//Ejercicio 15: Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.
const birthYear = 1999
let actualYear = 2024
let age = actualYear - birthYear

//Ejercicio 16: Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo.
let squareBase = 10
let squareHeight = 10
let squareArea = squareBaseBase * squareHeight

let triangleBase = 10
let triangleHeight = 10
let triangleArea = (triangleBase * triangleHeight) / 2

let circleRadius = 10
const pi = 3.14159
let circleArea = (pi * (circleRadius * circleRadius))



