// for loop

const { forwardRef } = require("react");

for (let i = 0; i <= 10 ; i ++) {
    const element = i ;
    if (element ==5){
        console.log("5 is best number")
    }
    console.log(element)
    
}

for (let i = 1; i <=5 ; i++) {
    console.log(`outer loops value : ${i}`)
    for (let j = 1; j <=10; j++) {
        console.log(i+ "*" + j + "=" + i*j)
    }
}

let myArray = ["Kanishka" , "Aryan" , "Reet" , "Yash"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// break and continue 

for (let k = 1; k <= 5 ; k++) {
    if(k==3){
        console.log("favourite 3 and end");
        break; // throws out of for also
    }
    console.log(k)
}
for (let k = 1; k <= 5 ; k++) {
    if(k==3){
        continue; // skips the condition
    }
    console.log(k)
}