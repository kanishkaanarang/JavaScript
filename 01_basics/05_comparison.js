// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2!=1)
// console.log(2==1)

/* does not give predicted result when the data type is not same
console.log("2">1)
console.log("02">1) */

// console.log(null==0)
// console.log(null!=0)
// console.log(null>=0)
// console.log(null<=0) should be avoided

/* the raeson is that an equality check and comparisons work differently
comparisons convert null to a number, treating it as zero !! */

// console.log(undefined==0)
// console.log(undefined!=0)
// console.log(undefined>=0)
// console.log(undefined<=0) => does not equal to 0  should be avoided

console.log("2" === 2) // gives false because triple = checks the datatype as well
console.log("2" === "2") //gives true
console.log("2" == 2) // gives true