let connectBtn = document.querySelector('.connectBtn');
console.log('hello');

// function to check is a user is logged in
// makes name appear in text of connectBtn if they are logged in

let checkForLoggedIn = () => {
    let storage = window.localStorage;
    let i = 0
    for(let key in storage){
        if(i === storage.length){
            break;
        }
        console.log('hello');
        console.log(key);
        console.log();
        let parsed = JSON.parse(window.localStorage[key]);
        console.log(parsed);
        console.log(parsed.loggedIn);

        if(parsed.loggedIn === true){
            connectBtn.innerText = parsed.name;
            break;
        }

        

        i++;
        
    }
}
checkForLoggedIn();
//creating User class to store default values in local storage

class User {
    constructor(name, password){
        this.name = name,
        this.password = password,
        this.loggedIn = false;
    }
    storeUserData(userName){
        let userObj = {
            name: this.name,
            password: this.password,
            balance: this.balance,
            loggedIn: this.loggedIn,
            assets: {
                bitcoin: 0,
                ethereum: 0,
                usdc: 10000,
                dogecoin: 0,
                arbitrum: 0,
                gmx: 0,
                magic: 0,
            }
        }
        localStorage[userName] = JSON.stringify(userObj);

    }
}

//create user function

let createUser = ()=>{
    let userName = document.querySelector('.userName').value;
    let password = document.querySelector('.password').value;
    let newUser = new User(userName, password);
    console.log(newUser);
    newUser.storeUserData(newUser.name);
    console.log(window.localStorage);
    let results = JSON.parse(window.localStorage[userName]);
    console.log(results);
    
    
    
    console.log(results);
}

let loginUser = (name) =>{
    if(window.localStorage[name]){
        let parsed = JSON.parse(window.localStorage[name]);
        parsed.loggedIn = true;
        connectBtn.innerText = parsed.name;
        // alert(`${name} has logged in successfully.`)
        window.localStorage[name] = JSON.stringify(parsed);
        

        // JSON.stringify(window.localStorage);
    }
    else{
        // alert("There is not an account associated with the given username.")
    }
}

// log out user function

let logoutUser = (name) => {
    // alert(`${userName} has logged out.`)
    
        let parsed = JSON.parse(window.localStorage[name]);
        if(parsed.loggedIn === true){
            parsed.loggedIn = false;
            window.localStorage[name] = JSON.stringify(parsed);
            connectBtn.innerText = "Connect"
        }
    
}

// global variables

let wholePage = document.querySelector('.whole-page');
let connectPopUp = document.createElement('div');
connectPopUp.setAttribute('class','connectPopUp');
let createAccountButton = document.createElement('button');
let submit = document.createElement('button');
let userName = document.createElement('input');
let logOutButton = document.createElement('button');

// function to add popUp containing login buttons
let addButtons = () => {

     //removes child elements out of connect popUp to avoid duplicate elements
    
     while (connectPopUp.firstChild) {
        connectPopUp.removeChild(connectPopUp.firstChild);
      }

    let loginBox = document.createElement('div');
    loginBox.setAttribute('class', 'loginBox');
    
    userName.setAttribute('type', 'text');
    userName.setAttribute('class', 'userName');
    let userNameText = document.createElement('div');
    userNameText.setAttribute('class', 'userNameText');
    userNameText.innerText = "Username:"
    let password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('class', 'password');
    let passwordText = document.createElement('div');
    passwordText.setAttribute('class', 'passwordText');
    passwordText.innerText = "Password:"
    
    submit.setAttribute('class', 'submit');
    submit.innerText = "Submit";
    let userNameRow = document.createElement('div');
    userNameRow.setAttribute('class', 'userNameRow')
    let passwordRow = document.createElement('div');
    passwordRow.setAttribute('class', 'passwordRow');
    loginBox.append(userNameRow);
    loginBox.append(passwordRow);
    userNameRow.append(userNameText);
    userNameRow.append(userName);
    passwordRow.append(passwordText);
    passwordRow.append(password);
    loginBox.append(submit);
    connectPopUp.append(loginBox);
    wholePage.append(connectPopUp);

}

// EL for connectBtn that calls addButtons function and creates createAccount DOM elements
// 
connectBtn.addEventListener('click', (e) => {
    connectPopUp.removeAttribute('display');

    if(connectBtn.innerText === "Connect"){
        addButtons();
    
        let createAccountText = document.createElement('div');
        createAccountText.innerText = `Don't have an account? `;
        createAccountText.setAttribute('class', 'createAccountText');
        createAccountButton.innerText = "Create Account";
        connectPopUp.append(createAccountText);
        connectPopUp.append(createAccountButton);
    } else{
        wholePage.append(connectPopUp);
        logOutButton.setAttribute('class', "logOutButton");
        logOutButton.innerText = "Log Out";
        connectPopUp.append(logOutButton);
    }

   
})

// create account EL with submit EL within it

createAccountButton.addEventListener('click', (e) => {
    addButtons();
    console.log(submit);
    submit.addEventListener('click', (e) => {

        createUser();
        connectPopUp.style.display = "none";
    })
})

// login user EL for submit button

submit.addEventListener('click', (e) => {

    connectPopUp.removeAttribute('display');

    let name = userName.value;

    loginUser(name);
    connectPopUp.style.display = "none";
})

// logout button EL

logOutButton.addEventListener('click', (e) => {

    let name = connectBtn.innerText;
    logoutUser(name);
    connectPopUp.style.display = "none";
})
checkForLoggedIn();
console.log(window.localStorage.Ethan);
console.log(window.localStorage);