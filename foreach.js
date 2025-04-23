const coding = ["js", "cpp", "java", "Go", "Scala"]
// coding.forEach((item) => {
//     console.log(item);

// })

// //

// printMe = (item) => {
//     console.log(item);

// }

// coding.forEach(printMe)

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js",

    },
    {
        langName: "java",
        langFileName: "java",

    },
    {
        langName: "python",
        langFileName: "py",

    }
]

myCoding.forEach((item) => {
    console.log(item.langFileName);
    
})