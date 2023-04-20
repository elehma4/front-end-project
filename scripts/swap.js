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

let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.bitcoin.name}&vs_currencies=usd&precision=full`

fetch(url)
.then(results=>results.json())
.then(price => {
    // console.log(price);
    console.log(price.bitcoin.usd); //price of coin vs usd
})

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
    console.log(e);
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
});


// Asset Button2 Modal Pop-up
let assetButton2 = document.querySelector('.assetButton2')

// modal elements:
let assetModal2 = document.createElement('div');
assetModal2.classList.add('assetModal')
let assetModalContent2 = document.createElement('div');
assetModalContent2.classList.add('assetModalContent')
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
    console.log(e);
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
});

// console.log(assetModal);
// Price of asset selected in asset button
let inputPrice = document.querySelector('#inputPrice')

