// API link: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cusd-coin%2Cdogecoin%2Carbitrum%2Cgmx%2Cmagic&vs_currencies=usd


//global variables
let numbers = document.querySelector(".numbers");
let coinNames = document.querySelector(".coinNames");
let prices = document.querySelector(".prices");
let marketCap = document.querySelector(".marketCaps");
let volumes = document.querySelector(".volumes");
let changes = document.querySelector(".changes");

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

    console.log(numbers);

    fetch(url)
    .then(results => results.json())
    .then(tokenData=>{

        let length = Object.keys(tokenData).length;

        console.log(length);

        for(let i = 0; i < length; i++){

            //adding numbers
            let number = document.createElement('div');
            console.log(i);
            number.setAttribute('class','number');
            number.setAttribute('class','dataValue');
            let num = String(i + 1) + "."
            number.innerText = num;
            numbers.append(number);

        }

        for(let key in tokenData){

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
            console.log(num);
            num = '$' + String(num);
            price.innerText = num;
            prices.append(price);

            //adding market cap values
            let marketCapVal = document.createElement('div');
            marketCapVal.setAttribute('class', 'marketCap');
            marketCapVal.setAttribute('class', 'dataValue');
            let cap = tokenData[key].usd_market_cap;
            cap = shortNum(cap);
            marketCapVal.innerText = cap;
            marketCap.append(marketCapVal);

            // adding trade volume amounts
            let volume = document.createElement('div');
            volume.setAttribute('class','volume');
            volume.setAttribute('class','dataValue');
            let volumeVal = tokenData[key].usd_24h_vol;
            volumeVal = shortNum(volumeVal);
            volume.innerText = volumeVal;
            volumes.append(volume);

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