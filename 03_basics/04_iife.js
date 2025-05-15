// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB connected`)
})();
// named IIFE

//(function definition)(execution call)

//global scope pollution gives problem sometimes so to remove it we use IIFE

((name) => {
    console.log(`hi ${name}`)
})("kanishka")
// un-named iife
//  semi colon is very important to terminate iife
