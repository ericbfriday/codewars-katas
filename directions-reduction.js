// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  var i = 0;    
  while(i < arr.length) {
    if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
    (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
    (arr[i] === "EAST" && arr[i+1] === "WEST") ||
    (arr[i] === "WEST" && arr[i+1] === "EAST")) {
      arr.splice(i, 2);
      i--;
    }
    else {
        i++;
    }
  }
  return arr;
  }
