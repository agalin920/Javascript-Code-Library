//Script to reverse strings in javascript

function FirstReverse(str) { 

  var newString = "";

  // add each character to newString
  for (var i = str.length - 1; i >= 0; i--) {   
    newString = newString + str.charAt(i);
  }

  return newString;
         
}
   
//With built in funtions  

function FirstReverse(str) { 

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');
         
}