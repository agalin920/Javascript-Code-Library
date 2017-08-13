function FirstFactorial(num) { 

  var factorial = 1;

  for (var i = 1; i <= num; i++) {  
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i;
  }

  return factorial;
         
}

//Using recursion

function FirstFactorial(num) { 

  // our factorial function
  function factorial(n) { 
 
    // terminate the recursion once we hit zero
    if (n===0) { return 1; }

    // otherwise keep calling the function recursively 
    else { return factorial(n-1) * n; }

  }

  return factorial(num);
         
}
   
FirstFactorial(4); 