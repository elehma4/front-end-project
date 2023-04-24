// API link: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cusd-coin%2Cdogecoin%2Carbitrum%2Cgmx%2Cmagic&vs_currencies=usd


//global variables
let numbers = document.querySelector(".numbers");
let coinNames = document.querySelector(".coinNames");
let prices = document.querySelector(".prices");
let marketCap = document.querySelector(".marketCaps");
let volumes = document.querySelector(".volumes");
let changes = document.querySelector(".changes");

// if statement to only display if user is logged in

if(connectBtn.innerText !== 'Connect'){

    let name = connectBtn.innerText
    let storage = window.localStorage
    let parsed = JSON.parse(storage[name]);

//functions

// function to convert to shortened number with letter suffix
let shortNum = (num) => {

    let newNum = Math.floor(num);
    let string = String(newNum);
    let newStr = "";

    if(string.length > 9) {
        newStr = `${string.substring(0, string.length - 9)}.${string.substring(1,2)}B`;
    } else if (string.length > 6){
        newStr = `${string.substring(0, string.length - 6)}.${string.substring(1,2)}M`
    }else{
        newStr = string;
    }

    newStr = "$" + newStr;

    return newStr;
}

// function to get small decimal number changes as a percentage
let getChange = (num) =>{

    let numToStr = String(num);
    let newStr = "";

    for(let i = 0; i < numToStr.length; i++){
        let curr = numToStr[i];
        if(curr === "."){
            newStr = numToStr.substring(0, i+3);
            newStr += "%";
            break;
        }
    }
    return newStr;
}

let greenOrRed = (string, DOMElement) => {

    if(string[0] === "-"){
        DOMElement.style.color = "red";
    } else{
        DOMElement.style.color = "green";
    }
}

let getPrices = ()=>{

    let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cusd-coin%2Cdogecoin%2Carbitrum%2Cgmx%2Cmagic&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";

    fetch(url)
    .then(results => results.json())
    .then(tokenData=>{

        let totalBalanceVal = 0;
        let coins = parsed.assets;
    
        // for loop to calculate total balance value of user owned coins

        for(let coin in coins){

            let userCoinAmount = parsed.assets[coin];

            if(coin === 'usdc'){
                coin = 'usd-coin';
            }

            let coinPrice = tokenData[coin].usd

            coinVal = userCoinAmount * coinPrice;

            totalBalanceVal += coinVal
    
        }

        let shortened = "$" + totalBalanceVal.toFixed(2);
        console.log(shortened);

        let totalBalance = document.querySelector('.totalBalance');
        totalBalance.innerText += " " + shortened;

        let length = Object.keys(tokenData).length;

        for(let i = 0; i < length; i++){

            //adding numbers
            let number = document.createElement('div');
            number.setAttribute('class','number');
            number.setAttribute('class','dataValue');
            let num = String(i + 1) + "."
            number.innerText = num;
            numbers.append(number);

        }

        for(let key in tokenData){

            if(key === "usdc"){
                key = 'usd-coin';
            }

            //adding coin names
            let coinName = document.createElement('div');
            coinName.setAttribute('class', 'coinName');
            coinName.setAttribute('class','dataValue');
            let name = key[0].toUpperCase() + key.substring(1);
            coinName.innerText = name;
            coinNames.append(coinName);

            // adding coin prices
            let price = document.createElement('div');
            price.setAttribute('class', 'price');
            price.setAttribute('class', 'dataValue');
            let num = tokenData[key].usd;
            num = '$' + String(num);
            price.innerText = num;
            prices.append(price);

            if(key === "usd-coin"){
                key = 'usdc'
            }

            //adding balance values
            let marketCapVal = document.createElement('div');
            marketCapVal.setAttribute('class', 'marketCap');
            marketCapVal.setAttribute('class', 'dataValue');
            let cap = parsed.assets[key];
            // cap = shortNum(cap);
            // cap = Number(cap.substring(1));
            cap = cap.toFixed(2);
            marketCapVal.innerText = cap;
            marketCap.append(marketCapVal);

            if(key === "usdc"){
                key = 'usd-coin';
            }
            
            // adding balance value amounts
            let volume = document.createElement('div');
            volume.setAttribute('class','volume');
            volume.setAttribute('class','dataValue');
            let tokenVal = tokenData[key].usd;
            if(key === "usd-coin"){
                key = 'usdc'
            }
            let volumeVal = tokenVal * parsed.assets[key];
            volumeVal = shortNum(volumeVal);
            volume.innerText = volumeVal;
            volumes.append(volume);

            if(key === "usdc"){
                key = 'usd-coin';
            }

            //add price change percentages
            let change = document.createElement('div');
            change.setAttribute('class', 'change');
            change.setAttribute('class', 'dataValue');
            let changeVal = tokenData[key].usd_24h_change;
            changeVal = getChange(changeVal);
            greenOrRed(changeVal, change);
            change.innerText = changeVal;
            changes.append(change);
        }

    })

}

getPrices();

} else{
    alert('You must log in to view portfolio.')
}

