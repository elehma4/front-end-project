// let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinForConversion}&vs_currencies=usd&precision=full`
// user class declaration

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
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let newUser = new User(userName, password);
    console.log(newUser);
    newUser.storeUserData(newUser.name);
    console.log(window.localStorage);
    let results = JSON.parse(window.localStorage[userName]);
    console.log(results);
    
    
    
    console.log(results);
}


   
let logoutUser = (name) => {
    // alert(`${userName} has logged out.`)
    
        let parsed = JSON.parse(window.localStorage[name]);
        if(parsed.loggedIn === true){
            parsed.loggedIn = false;
            window.localStorage[name] = JSON.stringify(parsed);
            connectBtn.innerText = "Connect"
        }
    
}

let makePurchase = (name, amount, givenCoin, takenCoin) => {

    let parsed = JSON.parse(window.localStorage[name]);

    if(parsed.loggedIn === true){
        if(parsed.assets[givenCoin] - amount > 0){
            parsed.assets[givenCoin] -= amount;
            parsed.assets[takenCoin] += amount;
            window.localStorage[name] = JSON.stringify(parsed);
        }
        else{
            alert("You do not have enough currency to make that trade.")
        }
    }
    else{
        alert("You must log into an acount to make a trade.")
    }

    
    
}

console.log(window.localStorage.Ethan);
// loginUser('Ethan');
// makePurchase('Ethan', 2000, 'usdc', 'bitcoin');

console.log(window.localStorage.Ethan);
// logoutUser('Ethan');
// logoutUser('Ethan');
// makePurchase('Ethan', 1000, 'usdc', 'bitcoin');
loginUser('Ethan');
makePurchase('Ethan', 1000, 'usdc', 'bitcoin');



