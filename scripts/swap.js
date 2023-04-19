// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Carbitrum%2Cgmx%2Cmagic&vs_currencies=usd&include_last_updated_at=true&precision=full
// Coins: Bitcoin, Ethereum, USDC, Dogecoin, Arbitrum, GMX, Magic

let ids = ["bitcoin", "ethereum", "usd-coin", "dogecoin", "arbitrum", "gmx", "magic"];

let btcthumb = "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png";
let eththumb = "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png";
let usdcthumb = "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png";
let dogethumb = "https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png";
let arbthumb = "https://assets.coingecko.com/coins/images/16547/thumb/photo_2023-03-29_21.47.00.jpeg";
let gmxthumb = "https://assets.coingecko.com/coins/images/18323/thumb/arbit.png";
let magicthumb = "https://assets.coingecko.com/coins/images/18623/thumb/magic.png";

let coinId = ids[1]

let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&precision=full`

fetch(url)
.then(results=>results.json())
.then(price => {
    // console.log(price);
    console.log(price[coinId].usd); //price of coin vs usd
})