
// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits.
// If no bigger number can be composed using those digits, return -1:

function nextBigger(n){
  let largest = parseInt(n.toString().split('').map(Number).sort((a, b) => (b - a)).join(''));
  let arr = n.toString().split('').map(Number);
  
  for (let i = n + 1; i <= largest; i++) {
    if (parseInt(i.toString().split('').map(Number).sort((a, b) => (b - a)).join('')) == largest) {return i} 
  }
  return -1;
}
