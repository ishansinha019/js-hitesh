 // ES6 All that we are using

 class User {
    constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
 }

const req = new User("sgre", "sgre@req.com", "123")
 
console.log(req.encryptPassword());
console.log(req.changeUserName());

// behind the scene; before ES6 and when class was introduced to Javascript


// function User2 (username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// } 

// User2.prototype.encryptPassword = function() {

// }