const languages = ["js","py","cpp","rb"]

languages.forEach( function (item) {
    console.log(item)
})
// callback function does not has name

languages.forEach( (item) => {
    console.log(item)
}) // arrow function here is also callback so name

function printMe(item){
    console.log(item)
}
languages.forEach(printMe)

languages.forEach((item, index, arr) => {
    console.log(item,index,arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName,item.languageFileName)
})