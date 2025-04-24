// const coding = ["js", "cpp", "java", "Go", "Scala"]
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
    // console.log(item.langFileName);
    
})

// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach((item) => {
//     return item
// })

// console.log(values);

// what we see here is that foreach doesn't return anu values or we can't conditionallu check on an element of the array.
// const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);
// using filter func we can provide a condtion and sunsequenctly return the resultant array

//let's try the same process with {}

// const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num) => {
//     num > 4
// })
// console.log(newNums);

// here we get an empty array as we have started a scope here. So we have to use the return keyword as shown below

// const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

// to use foreach for the same task we can follow this

// const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = []

// myNums.forEach((num) => {
//     if(num>4) {
//         newNums.push(num)
//     }
// });
// console.log(newNums);

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

 const userBooks1 = books.filter((bk) => bk.genre === 'Fiction' && bk.edition == 2004)
 const userBooks2 = books.filter((bk) => bk.publish >= 2004)


 console.log(userBooks2);
 
 





 


