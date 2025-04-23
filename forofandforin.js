const arr = [
    1, 2, 3, 4, 5
]
for (const i of arr) {
    // console.log(i);

}
// for of can be used on strings to get chars as well.

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('UK', "United Kingdom")

// console.log(map);

for (const [key,value] of map) {
    // console.log(`${key} and value is ${value}`);    
}

// we can't iterate Objects in the same way using forof

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    go: "Golang",
    jsx: "React"
}

for (const key in myObj) {
    console.log(key, myObj[key]);
    
}

// if we use forin for arrays, in return we get the key numbers instead of the values
 // we cant use forin on Map as it is not iteratable
 
