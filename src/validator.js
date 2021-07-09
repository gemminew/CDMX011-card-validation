

const validator = {

  isValid: function(firstArray){
   let num = firstArray.split('').reverse();
   console.log(num.join(''))
   
   let duplicateNumbers = num.map(function (n, i) {
       if (i % 2 === 0) { // 
       return  parseInt(n)} // Esta condicion retorna cada segundo digito 
       else var  g = (n * 2); // multiplica los numeros por dos
       if  (g > 9 ) { g -= 9} // simplificar dos digitos
       return g;
   })
  
      let sum = duplicateNumbers.reduce((n, i) => n + i); //suma y unifica ambos arrays 
      return sum % 10 === 0; //resultado con terminacion 0 se divide entre diez 
      /* 
      let sum = 0
      [0, 1, 2, 4]
               i=0
               i=1
               sum += duplicateNumbers[i]
         for ( let i = 0; i < duplicateNumber.length; i++ )
         { } */
   },
  
   maskify: function(firstArray) {
    // var mask= firstArray.slice(0, -4).replace(, '#').concat(firstArray.slice(-4)); 
    //var replaced = firstArray.replace(/.?=.{4,}$/g,'#'); 
    return firstArray.slice(0, -4).replace(/./g, '#') + firstArray.slice(-4);

     //console.log(maskify("hello world"))
   },


   //**HACKING EDITION**
   getIssuer: function(firstArray){

      const emisor = true;
      const issuerJCB = /\d{1800}/;
      const issuerVisa = /^4d\+$/;

      switch(emisor) {
         case issuerJCB.test(emisor):
            return ('JCB')
          case issuerVisa.test(emisor):
             return ('Visa')
         default:
            alert('tu tarjeta no corresponde a ningun emisor') 
      }


   }
}

   



  


export default validator;
