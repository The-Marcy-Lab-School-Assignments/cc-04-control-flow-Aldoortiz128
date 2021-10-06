//1
function fizzBuzz(num){
    //Log all the numbers from 1 to 100.
    //If the number is a multiple of 3, log "Fizz" instead.
    //If the number is a mutltiple of 5, log "Buzz" instead.
    //If the number is a multiple of 3 & 5, log "Fizzbuzz" instead.
    
    for (let i = 0; i <= num; i++) {
    if (i % 3 & i % 5) {console.log ("fizzbuzz");} 
    // Must be first condition checked in the order of execution
    // for program to run properly
    
    else if (i % 3) {console.log ("fizz"); }
    else if (i % 5) {console.log ("buzz");}
    {console.log (i);}
}
}



fizzBuzz(25);


