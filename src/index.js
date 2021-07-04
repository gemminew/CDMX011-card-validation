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
function lengthCounter(){
    numberTillSixteen = document.getElementById("numberTillSixteen").value;
    console.log(numberTillSixteen.length)
    var showMyNumbers = document.getElementById("showMyNumbers");
    showMyNumbers.innerText = ("Aqui hay " + numberTillSixteen.length + " números" );
}

// Función para hacer secuencia en reversa
function reverseArray(){   
    var nu = originalArray.split('').reverse().join('');
    console.log(nu)
    //Esta parte solo muestra la funcionalidad de la reversa al usuario
    document.getElementById("originalArray").value = nu;
}

console.log(reverseArray(originalArray));

//Función para mostrar los numeros multiplicados
// 1. Crear un nuevo array y aplicar el method .reverse()
// 2. Filtrar los elementos del array para que solo multiplique cada segundo digito en la secuencia 
// 3. Utilizar una operación ternaria para simplificar los números mayores a 9 o una condición 'if'
// 4. Sumar el total del array
// 5. Aplicar .reduce() para dividir el resultado % 10

var reverse = function(originalArray) {
    var newArray = [];
    var size = originalArray.length;
    var lastPosition = size - 1;
    for (var i = lastPosition; i >=0; i--) {
        new array.push(originalArray[i]);
    }
    return newArray;
}
console.log(reverse(originalArray));

    function doubleDigts(reversedNu){
        let everyOtherNo = 
         numberTillSixteen.split('').filter((element, index) => {
            return  index % 2 === 0;})  
        console.log(everyOtherNo)
        //return everyOtherNo;

        var doubleNumbers = {
            doubledNumbers: everyOtherNo.map
                (function (n) {return n * 2;})
        };  
        
        return doubleNumbers.doubledNumbers;
    }





let number = 1;
while (number <= 16) {
  console.log(number);
  number = number * 2;
}


