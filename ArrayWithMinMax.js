function minMax(arr) {
  var resArr=[];
  resArr.push(Math.min(...arr));
  resArr.push(Math.max(...arr));
  return resArr;
}