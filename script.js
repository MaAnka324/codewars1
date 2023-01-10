// Преобразование числа в строку!
function numberToString(num) {
//     // Return a string of the number here!
  return String(num)
  }


  function paperwork(n, m) {
    if(n > 0){
      if( m > 0){
        return n * m;
      }
      else{
        return 0;
      }
      }
     else{
        return 0;
    }}
paperwork(5, 5);



/////////////////////////////1
function invert(array) {
    for (let i = 0; i < array.length; i++) {
          if(array[i] === "0") {
            array[i] = array[i] * (1);
          }
          array[i] = array[i] * (-1);
       }
    return array ;
 }

///////////////////////////////////////2
 function invert(array) {
    for(let i=0; i<array.length; i++){
      array[i] *= -1;
    }
     return array;
  }


////////////////////////////
function saleHotdogs(n){
  if(n < 5){
    return n * 100;
  }
  else if(n >= 5 && n < 10){
    return n * 95
  }
  else if(n >= 10) return n * 90
}



////////////////////////////////////
function sayHello(name) {      
  return 'Hello, ' + name;    
}




/////////////////////////////// return 5 
function unusualFive() {
  let a = ['v', 'g', 'r', 'e', 'o']
  return a.length;
}


////////////////////////////////Серия восклицательных знаков №1: удалить восклицательный знак с конца строки?????????????????????????????????????????????????????
function remove (string) {
  //coding and coding....
  return string.replace(/\!$/, '')
}


/////////////////////////////
function getSum( a,b )
{
   //Good luck!
  let sum = 0;
  if (a < b){
    for(let i = a; i <= b; i++){
    sum += i
  }
  }
  else{
    for(let j = b; j <= a; j++){
    sum += j
  }
  return sum;
}}


function isTriangle(a,b,c)
{
  if(a<(b+c) || b<(a+c) || c<(a+b)){
    console.log( true);
  }
  else{
    console.log(false);
  }
}
isTriangle(2,2,7);



//Квадрат(n) Сумма
function squareSum(numbers){
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    let k = Math.pow(numbers[i], 2);
    sum += k
  }
  return sum
}


//MakeUpperCase
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}


///////////////////////////////////
function past(h, m, s){
  //#Happy Coding! ^_^
  let sum = ((h*60*60)+(m*60)+s)*1000
  return sum
}


/////////////////////////////////
function feast(beast, dish) {
//your function here
  if(beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]){
    return true
  }
  else return false
}



/////////////////////////
function findAverage(array) {
  // your code here
  let sum = 0
  for(let i = 0; i < array.length; i++){
    sum += array[i]
  }
  if(array.length !== 0)return sum/array.length
  else return 0
}
