const Coding = ["js","py","cpp","rb"]
// const values = Coding.forEach((item) => {
//     console.log(item)
// })

// console.log(values) //undefined

// const values2 = Coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(values2) //undefined

// const values3 = Coding.forEach((item) => {
//     return item
// })

// console.log(values3) //undefined

// for each does not print any values

const nums =[1,2,3,4,5,6,7,8,9,10]
const newNums = nums.filter((value) => value>4) // calback with conditions
//console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]


const nums2 = []
nums.forEach((values) => {
    if(values>4){
        nums2.push(values)
    }
})
//console.log(nums2) //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter ((book) => book.genre === "History")
userBooks= books.filter((book) => book.publish>=1995 && book.genre === "History")
console.log(userBooks)