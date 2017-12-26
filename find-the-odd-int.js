// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let obj = {};
  let ans = null;
  A.forEach( (ele, i) => {
    if (obj[ele]) {
      obj[ele] = obj[ele] + 1
    } else {
      obj[ele] = 1;
    }
  });
  A.forEach( (ele, i) => {
    if (parseInt(obj[ele]) % 2 != 0) {
      console.log(parseInt(obj[ele]));
      ans = ele;
    }
  });
  return ans;
}
