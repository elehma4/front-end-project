// API link: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cusd-coin%2Cdogecoin%2Carbitrum%2Cgmx%2Cmagic&vs_currencies=usd

let numbers = document.querySelector(".numbers");
let coinNames = document.querySelector(".coinNames");
let prices = document.querySelector(".prices");

let getPrices = ()=>{

    let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cusd-coin%2Cdogecoin%2Carbitrum%2Cgmx%2Cmagic&vs_currencies=usd";

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
            number.innerText = i + 1;
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
            price.setAttribute('class', 'datavalue');
            let num = tokenData[key].usd;
            console.log(num);
            num = '$' + String(num);
            price.innerText = num;
            
        }

    })
}
getPrices();