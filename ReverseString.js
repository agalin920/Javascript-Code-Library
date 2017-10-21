function reverse(str) {
  return str.split('').reverse().join('');
}


function reverse(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    
  
    return joinArray; 
}