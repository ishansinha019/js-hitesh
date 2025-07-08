class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;            // now this constructor is not setting the value of passsword and rather is being get and set by the below code
    }
    get password() {                         // used to get a value outside of a class
        return `${this._password}1shan`   // creating a new variable _password to get the value and avoid confusion related to call stack exceeded error
    }
    set password(value) {                         // used to set a value inside the class
        this._password = value                   // creating a new variable _password to set the value and avoid confusion related to call stack exceeded error // we never return a setter
    }
}

const obj = new User("sgre@sgre.com", "abcd")
console.log(obj.password);

//  here in the class the value we are setting is abcd, but when someone tries to get it, the get abcd1shan. So we ca contol what the user gets 





