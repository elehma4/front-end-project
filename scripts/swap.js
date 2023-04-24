// Coins: Bitcoin, Ethereum, USDC, Dogecoin, Arbitrum, GMX, Magic

const coins = {
    bitcoin: { 
        name: "bitcoin",
        thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png", 
        ticker: "BTC" 
    },
    ethereum: { 
        name: "ethereum",
        thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png", 
        ticker: "ETH" 
    },
    "usd-coin": { 
        name: "usd-coin",
        thumb: "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png", 
        ticker: "USDC" 
    },
    dogecoin: { 
        name: "dogecoin",
        thumb: "https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png", 
        ticker: "DOGE" 
    },
    arbitrum: { 
        name: "arbitrum",
        thumb: "https://assets.coingecko.com/coins/images/16547/thumb/photo_2023-03-29_21.47.00.jpeg", 
        ticker: "ARB" 
    },
    gmx: { 
        name: "gmx",
        thumb: "https://assets.coingecko.com/coins/images/18323/thumb/arbit.png", 
        ticker: "GMX" 
    },
    magic: { 
        name: "magic",
        thumb: "https://assets.coingecko.com/coins/images/18623/thumb/magic.png", 
        ticker: "MAGIC" 
    }
  };

// Asset Button Modal Pop-up
let assetButton = document.querySelector('.assetButton')

// modal elements:
let assetModal = document.createElement('div');
assetModal.classList.add('assetModal')
let assetModalContent = document.createElement('div');
assetModalContent.classList.add('assetModalContent')
// let selectToken = document.createElement('div')
// selectToken.classList.add('selectToken')
// selectToken.innerHTML = "Select a token<br><hr>"

// add modal to page
// assetModalContent.appendChild(selectToken)
assetModal.appendChild(assetModalContent)

// show/hide modal
assetButton.addEventListener("click", (e)=>{
    let body = document.querySelector('body')
    body.appendChild(assetModal)
    // console.log(e);
    assetModalContent.innerHTML = '';
    //? Create buttons for each key-value pair in coins object:
    for (const [key, value] of Object.entries(coins)){
        const button = document.createElement('button');
        button.classList.add('coin-button');
        button.dataset.coinName = value.name;

        // creats thumbImg for each
        const thumbImg = document.createElement('img');
        thumbImg.classList.add('thumb-img')
        thumbImg.src = value.thumb;
        thumbImg.alt = `${value.ticker} logo`

        // creates ticker content for each
        const nameAndticker = document.createElement('span');
        let upperCoinName = value.name.toUpperCase()
        nameAndticker.textContent = `${upperCoinName} (${value.ticker})`;

        button.appendChild(thumbImg);
        button.appendChild(nameAndticker)

        assetModalContent.appendChild(button);

        let hrDiv = document.createElement('div')
        hrDiv.innerHTML = '<hr>'
        hrDiv.setAttribute('style', 'height: 15px')
        hrDiv.setAttribute('style', 'padding-bottom: 5px')
        assetModalContent.appendChild(hrDiv)

        // add event listener to button
        button.addEventListener('click', () => {
            const selectedCoin = coins[value.name];
            assetButton.innerHTML = `<img src="${selectedCoin.thumb}" alt="${selectedCoin.ticker} logo">${selectedCoin.ticker}`;
            assetModal.style.display = 'none';
        });
        
    }
    assetModal.style.display = 'block';
})

// hide modal when clicking outside of it
window.addEventListener("click", (e)=>{
    if(e.target === assetModalContent || e.target === assetButton) {
        return;
    }
    assetModal.style.display = 'none';
    // console.log(assetButton.textContent);
});

// Asset Button2 Modal Pop-up
let assetButton2 = document.querySelector('.assetButton2')

// modal elements:
let assetModal2 = document.createElement('div');
assetModal2.classList.add('assetModal2')
let assetModalContent2 = document.createElement('div');
assetModalContent2.classList.add('assetModalContent2')
// let selectToken = document.createElement('div')
// selectToken.classList.add('selectToken')
// selectToken.innerHTML = "Select a token<br><hr>"

// add modal to page
// assetModalContent.appendChild(selectToken)
assetModal2.appendChild(assetModalContent2)

// show/hide modal
assetButton2.addEventListener("click", (e)=>{
    let body = document.querySelector('body')
    body.appendChild(assetModal2)
    // console.log(e);
    assetModalContent2.innerHTML = '';
    //? Create buttons for each key-value pair in coins object:
    for (const [key, value] of Object.entries(coins)){
        const button2 = document.createElement('button2');
        button2.classList.add('coin-button2');
        button2.dataset.coinName = value.name;

        // creats thumbImg for each
        const thumbImg = document.createElement('img');
        thumbImg.classList.add('thumb-img')
        thumbImg.src = value.thumb;
        thumbImg.alt = `${value.ticker} logo`

        // creates ticker content for each
        const nameAndticker = document.createElement('span');
        let upperCoinName = value.name.toUpperCase()
        nameAndticker.textContent = `${upperCoinName} (${value.ticker})`;

        button2.appendChild(thumbImg);
        button2.appendChild(nameAndticker)

        assetModalContent2.appendChild(button2);

        let hrDiv2 = document.createElement('div')
        hrDiv2.innerHTML = '<hr>'
        hrDiv2.setAttribute('style', 'height: 15px')
        hrDiv2.setAttribute('style', 'padding-bottom: 5px')
        assetModalContent2.appendChild(hrDiv2)

        // add event listener to button2
        button2.addEventListener('click', () => {
            const selectedCoin = coins[value.name];
            assetButton2.innerHTML = `<img src="${selectedCoin.thumb}" alt="${selectedCoin.ticker} logo">${selectedCoin.ticker}`;
            assetModal2.style.display = 'none';
        });
        
    }
    assetModal2.style.display = 'block';
})

// hide modal when clicking outside of it
window.addEventListener("click", (e)=>{
    if(e.target === assetModalContent2 || e.target === assetButton2) {
        return;
    }
    assetModal2.style.display = 'none';
    // console.log(assetButton2.textContent);
});
// console.log(assetModal);

// SWITCH BUTTON

let switchButton = document.querySelector('#switchIcon')

switchButton.addEventListener('click', ()=>{
    let tempButtonHTML = assetButton.innerHTML;
    let tempAssetAmtValue = assetAmt.value;

    assetButton.innerHTML = assetButton2.innerHTML;
    assetAmt.value = assetAmt2.value;

    assetButton2.innerHTML = tempButtonHTML;
    assetAmt2.value = tempAssetAmtValue;
})

// PRICE CONVERSIONS & QUANTITY INPUTS:

let assetAmt = document.querySelector('.assetAmt')
let inputPrice = document.querySelector('#inputPrice')
let assetAmt2 = document.querySelector('.assetAmt2')
let inputPrice2 = document.querySelector('#inputPrice2')
let comparePrice = document.querySelector('#comparePrice')

let coin1usdValue;
let coin2usdValue;
const inputPriceFunction = () => {
    for (const [key, value] of Object.entries(coins)){
        // Get price in USD of asset 1:
        if(assetButton.textContent == value.ticker){
            let coin1name = value.name;
            let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin1name}&vs_currencies=usd&precision=full`
            fetch(url)
                .then(results => results.json())
                .then(price => {
                    let usdValue = price[coin1name].usd;
                    console.log(usdValue); //logs 1x value of coin
                    let coin1usdValue = Number(assetAmt.value) * Number(usdValue);
                    console.log(Number(coin1usdValue));
                    inputPrice.innerHTML = `$${Number(coin1usdValue).toFixed(2)}`
            })
        }
        // Get price in USD of asset 2:
        if(assetButton2.textContent == value.ticker){
            let coin2name = value.name;
            console.log(coin2name);
            let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin2name}&vs_currencies=usd&precision=full`
            fetch(url)
                .then(results => results.json())
                .then(async price => {
                    otherUsdValue = price[coin2name].usd
                    console.log(otherUsdValue);
                    let coin1UsdValue = Number(inputPrice.innerHTML.slice(1))
                    let evaluateOther = coin1UsdValue / otherUsdValue
                    assetAmt2.value = Number(evaluateOther).toFixed(4)
                    let coin2usdValue = Number(assetAmt2.value) * Number(otherUsdValue)
                    inputPrice2.innerHTML = `$${Number(coin2usdValue).toFixed(2)}`

                    async function comparePriceOf1Asset() {
                        if(assetAmt.value){
                            // console.log(inputPrice.textContent.slice(1));
                            const coin1val = Number(inputPrice.textContent.slice(1)) / Number(assetAmt.value)
                            console.log(coin1val);
                            const rate = otherUsdValue / coin1val
                            console.log(rate);
                            comparePrice.innerHTML = `1 ${assetButton2.textContent} = ${Number(rate).toFixed(4)} ${assetButton.textContent} ($${otherUsdValue.toFixed(2)})`
                        }
                    }
                    await comparePriceOf1Asset()
                })
        }            
    }
}



let swapButton = document.querySelector('.swapBtn')

// swap modal elements:
let swapModal = document.createElement('div');
swapModal.classList.add('swapModal')
let swapModalContent = document.createElement('div');
swapModalContent.classList.add('swapModalContent')

swapModal.appendChild(swapModalContent)

swapButton.addEventListener("click", ()=>{
    let body = document.querySelector('body')
    body.appendChild(swapModal)
    swapModalContent.innerHTML = '';

    let swapDescription = document.createElement('div')
    swapDescription.classList.add('swap-description')
    swapDescription.innerHTML = `You are swapping: <br><br>
                                ${assetAmt.value} ${assetButton.textContent}(${inputPrice.innerHTML})<br><br>
                                For: <br><br>
                                ${assetAmt2.value} ${assetButton2.textContent}(${inputPrice2.innerHTML})<br><br>`

    swapModalContent.appendChild(swapDescription)

    const confirmSwapButton = document.createElement('button')
    confirmSwapButton.classList.add('confirm-button')
    confirmSwapButton.innerHTML = "Confirm Swap"

    swapModalContent.appendChild(confirmSwapButton)
   
    swapModal.style.display = 'block';
})

// hide modal when clicking outside of it
window.addEventListener("click", (e)=>{
    if(e.target === swapModalContent || e.target === swapButton) {
        return;
    }
    swapModal.style.display = 'none';
});

let confirmButton = document.querySelector('.confirm-button')

confirmButton.addEventListener('click', ()=>{
    for(let [key, value] of Object.entries(coins)){
        if(assetButton.textContent == value.ticker){
            let coin1name = value.name;
            // find coin1name local storage balance
            // subtract assetAmt value from balance 
        }
        if(assetButton2.textContent == value.ticker){
            let coin2name = value.name;
            // find coin2name local storage balance
            // add assetAmt2 value to balance
        }
    }
})

let maxButton = document.querySelector('.maxBtn')

maxButton.addEventListener('click', ()=>{
    // make assetAmt the total value of balance

})

let balance1 = document.querySelector('balance1')
balance1.textContent // "Balance: ${localstorage balance}"

let balance2 = document.querySelector('balance2')
balance2.textContent // "Balance: ${localstorage balance}"