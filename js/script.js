"use strict";
// CREATE CICLE NUMBERS 1-100
for(let i=1; i<=100 ; i++) {

    // CHECK IF NUMBER IS DIVISIBLE BY 3 AND 5
    
    
    if(i % 3 == 0 && i % 5 == 0) {
        
        console.log("FizzBuzz");
    
        // CHECK IF NUMBER IS DIVISIBLE BY 3
   
} else if(i % 3 == 0) {
        
    
        console.log("Fizz");
    // CHECK IF NUMBER IS DIVISIBLE BY 5
    
} else if(i % 5 == 0) {
        
    
        console.log("Buzz");
    
   // CHECK IF NUMBER IS NOT DIVISIBLE BY 3 AND 5
   
} else {
        
       
    console.log(i);
   
}

}