function sortDecending(num) {
  return parseInt(num.toString().split('').sort().reverse().join(''));
}

function sortDecending(num) {
  numSt = num.toString();
  
  
  numS = numSt.split('');
  
  numS.sort(function(a,b){
    return b-a;
  });
            
  return parseInt(numS.join(''));
  
}