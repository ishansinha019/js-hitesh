const user = {
    username: "Ishan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);     //this is used to refer to the current context
        
    }
}
// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()       //Global object in brower is Window object whereas Global object in Node is {}

//  //

// const chai = function () {
//     let username = 'Ishan'
//     console.log(this.username);
    
// }

const chai = () => {
    let username = 'Ishan'
    // console.log(this.username);
    
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
const addTwo = (num1, num2) => (num1+num2); // when using curly brackets in an arrow function, we have to have a return statement but not in the case of ()
//this is implicitly returning. Explicit means "alag se lagana padta hai kuchh bhi"
console.log(addTwo(2,5));

