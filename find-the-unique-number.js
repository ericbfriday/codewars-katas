function findUniq(arr) {
  let ans = null;
  let obj = {};
  arr.forEach((ele, i) => {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else if (obj[ele]) {
      obj[ele]++;
    }
  })
  console.log(obj);
  arr.forEach((ele, i) => {
    if (obj[ele] == 1) {
      ans = ele;
    }
  })
  return ans;
}
