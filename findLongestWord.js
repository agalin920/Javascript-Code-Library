
function findLongestWord(str) {
  var maxLength=0;
  var arrStr=str.split(' ');
  
  for(var i=0;i<arrStr.length;i++){
    if(arrStr[i].length>=maxLength){
      maxLength=arrStr[i].length;
    }  
  }
  return maxLength;
  }
  
  


findLongestWord("The quick brown fox jumped over the lazy dog");
