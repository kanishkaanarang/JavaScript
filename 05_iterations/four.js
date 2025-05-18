// for in 
const myObj={
    js:"javascript",
    py:"python",
    cpp:"C ++",
    rb:"ruby"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
} 
//js shortcut is for javascript
// py shortcut is for python
// cpp shortcut is for C ++
// rb shortcut is for ruby

const languages = ["js","py","cpp","rb"]
for (const key in languages) {
    console.log(key)
} // 0,1,2,3

for (const key in languages) {
    console.log(languages[key])
} // js, py, cpp, rb

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")

for (const key in map) {
    console.log(key)
} // no output, not iterable