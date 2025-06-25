const user = {
    username: "hitesh",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.loginCount}`);
        console.log(this);
        
        
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

