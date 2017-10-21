//Using regular expression
function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

function countVowels(str) {
  var strArr = str.split('');
  var counter = 0;
  for(var i=0;i<strArr.length;i++){
    if(strArr[i]=='a' || strArr[i]=='e' || strArr[i]=='i' || strArr[i]=='o' || strArr[i]=='u'){
      counter++;
    }
  }
  return counter;
}