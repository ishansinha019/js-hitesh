function SetUsername(username) {
    // complex DB calls
    this.username = username
    console.log('called');
    
    return username

}

function createUser(username, email, password) {
    SetUsername.call(this, username)               // so when using the call property for a function/ method, you get an option to include the 'this' of the parent element from where you can call the value to the corrent function execution context
    this.email = email
    this.password = password
}

const req = new createUser("Test", "test@sgre.com", "bortain")
console.log(chai);





