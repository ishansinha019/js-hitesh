const user = {
    username: "hitesh",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.loginCount}`);
        console.log(this);              // this keyword doesn't work properly under arrow functions
        
        
    }
}
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, signedIn) {   // constructor function 
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this
}
const userOne = new User("hitesh", 12, true)
const userTwo = new User("Ishan", 10, false)

console.log(userOne);
console.log(userTwo);

/* 
Here what happens behind the scenes when the new keyword is used: 

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means it has the access to properties and methods defined on the constructor's prototype.

The consturctor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is 
specified from the consturctor, Js assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created object
is returned.

*/


