// function mdc() {        
//   let number1 = 372
//   let number2 = 162
//   let auxiliar;
//   // let i;
//   let resto;

//   if(number1 > number2){
//     //swap
//     auxiliar = number1
//     number1 = number2
//     number2 = auxiliar
    
//   }

//   do {
//       resto = number1 % number2
//       number1 = number2
//       number2 = resto

//   } while (resto != 0 );

//   // for (i = a ; i > 1 && !(a%i==0 && b%i==0) ; i--){

//   // }
//   console.log(`O mdc é: ${parseInt(number1)}`)
  
// }

// mdc()



function verificar(){
  let txtn1 = document.querySelector('#num1')
  let txtn2 = document.querySelector('#num2')
  let res = document.querySelector('#res')
  
  if (txtn1.value.length == 0 && txtn2.value.length == 0 ){
    alert('[ERROR] preencha os espaços abaixo')
  } else {

    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let aux;
    let r;

    if(txtn1.value == parseInt(n1) && txtn2.value == parseInt(n2)){   
      if(n1 > n2){
        aux= n1
        n1= n2
        n2= aux
      }
  
      do {
        r= n1%n2
        n1= n2
        n2= r
      } while (r != 0);

      res.innerHTML= `O mdc de ${txtn1.value } e ${txtn2.value } é igual a: ${ n1}`
      
    } else {
      alert("Digite somente números inteiros!!")
      res.innerHTML = ''
    }
    
    txtn1.value = ''
    txtn2.value = ''
    
  }
  
  

}
