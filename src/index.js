//import validator from './validator.js';

//console.log(validator);

//MP 1 - Mostrar la respuesta a una pregunta prompt

let respuesta = "";

function easySum(){
    document.getElementById("easySum")
    let pregunta = prompt("Caiste! Ahora dime cuanto es 85 + 15")
    console.log(pregunta)
    var answer = document.getElementById("answer");
   answer.innerText = ("tu respuesta es " + pregunta);
    //document.write("Tu respuesta es " + pregunta)
}

//Variable global donde se almacena el array
var originalArray = ""

//MP 2 - Mostrar la cantidad de # que el usuario redacta en el input.
/* function lengthCounter(){
    originalArray = document.getElementById("originalArray").value;
    console.log(originalArray.length)
    var showMyNumbers = document.getElementById("showMyNumbers");
    showMyNumbers.innerText = ("Aqui hay " + originalArray.length + " números" );
} */



// Algoritmo de Luhn
var luhnAlgorithm = function (){   
    var num = originalArray.split('').reverse();
    console.log(num.join(''))
    
    var duplicateNumbers = num.map(function (n, i) {
        if (i % 2 === 0) {
        return  parseInt(n)} // Esta condicion retorna cada segundo digito 
        else var g = (n * 2); // multiplica los numeros por dos
        if  (g > 9 ) { g -= 9} // simplificar dos digitos
        return g;
    })

    var sum = duplicateNumbers.reduce((n, i) => n + i);
    return sum % 10 === 0;
/* 
    console.log(duplicateNumbers)   
    console.log(sum)
    console.log(luhnAlgorithm) */
}  

 function validateCard(){
     
    originalArray = document.getElementById("originalArray").value;
    
    let d = luhnAlgorithm() 

    if (d === true) {
      document.getElementById("result").innerHTML = ("La tarjeta es valida");}
    else {
      document.getElementById("result").innerHTML = ("La tarjeta no es valida");
        }

   // result.innerText = ("La tarjeta " + result + " es " );
} 
// Boton de validacion

    
// **Algoritmo de Luhn**
// 1. Crear un nuevo array y aplicar el method .reverse()
// 2. Filtrar los elementos del array para que solo multiplique cada segundo digito en la secuencia 
// 3. Utilizar una operación 'modulus'  para simplificar los números mayores a 9 o una condición 'if'
// 4. Sumar el total del array aplicando .reduce() 
// 5. Dividir el resultado % 10

//var reverse = function(originalArray) {
  //  var newArray = [];
    //var size = originalArray.length;
    //var lastPosition = size - 1;
    //for (var i = lastPosition; i >=0; i--) {
      //  new array.push(originalArray[i]);
    //}
    //return newArray;
//}
//console.log(reverse(originalArray));

