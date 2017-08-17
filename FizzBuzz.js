//FizzBuzz code enhanced

for(var i = 0;i<=100;i++){
    var output = ""

    if(i % 3 === 0){
        output+="Fizz";
    }
    if(i % 5 === 0){
        output+="Buzz";
    }

    if(output === ""){
        output=i.toString();
    }
    
    console.log(i);
}

/* Traditional method

for(var i = 0;i<=100;i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        output+="Fizz";
    }

    else if(i % 5 === 0){
        output+="Buzz";
    }

    else{
        console.log(i);
    }  
}
*/