//Using .filter
function isFourLetters (arr) {
  return arr.filter(x => x.length === 4);
}



function isFourLetters(arr) {
  var resArr=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i].length==4){
      resArr.push(arr[i]);
    }
  }
  return resArr;
}