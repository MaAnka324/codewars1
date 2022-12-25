// Преобразование числа в строку!
// function numberToString(num) {
//     // Return a string of the number here!
//   return String(num)
//   }


//   function paperwork(n, m) {
//     if(n > 0){
//       if( m > 0){
//         return n * m;
//       }
//       else{
//         return 0;
//       }
//       }
//      else{
//         return 0;
//     }}
// paperwork(5, 5);



/////////////////////////////1
// function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//           if(array[i] === "0") {
//             array[i] = array[i] * (1);
//           }
//           array[i] = array[i] * (-1);
//        }
//     return array ;
//  }

///////////////////////////////////////2
 function invert(array) {
    for(let i=0; i<array.length; i++){
      array[i] *= -1;
    }
     return array;
  }