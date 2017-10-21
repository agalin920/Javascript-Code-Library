
//Using .filter
function noOdds(arr) {
  return arr.filter(a => !(a % 2)); 
} 

function noOdds(arr) {
  var resArr = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      resArr.push(arr[i]);
    }
  }
  return resArr;
}