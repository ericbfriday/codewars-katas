// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
   var times = 0;
   num = num.toString();
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   return times;
}
