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

    // console.log(numbers);

    fetch(url)
    .then(results => results.json())
    .then(tokenData=>{

        let length = Object.keys(tokenData).length;

        // console.log(length);

        for(let i = 0; i < length; i++){

            //adding numbers
            let number = document.createElement('div');
            // console.log(i);
            number.setAttribute('class','number');
            number.setAttribute('class','dataValue');
            let num = String(i + 1) + "."
            number.innerText = num;
            numbers.append(number);
        }

        for(let key in tokenData){

            //adding coin names
            let coinName = document.createElement('div');
            coinName.setAttribute('class','dataValue');
            coinName.classList.add('coinName')
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


// Modal pop-up when class coinName is clicked:

const allCoinNames = document.querySelector('.coinNames');

const graphModal = document.createElement('div')
graphModal.classList.add('graphModal')

const graphModalContent = document.createElement('div')
graphModalContent.classList.add('graphModalContent')

graphModal.append(graphModalContent)

const tokensTitle = document.querySelector('.tokensTitle');

let myChartInstance = null;

allCoinNames.addEventListener('click', (e)=>{
    if(e.target.classList.contains('coinName')){
        console.log(e.target.innerHTML);
        // e.target.innerHTML = name of coinName div clicked

        const content = document.querySelector('.content')
        content.appendChild(graphModal)

        console.log(graphModal)

        console.log(document.body.contains(graphModal))

        graphModal.style.display = 'block'

        if(document.body.contains(graphModal)){
            tokensTitle.innerText = e.target.innerHTML;
        } 

        const canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'tokenChart')

        // Remove previous canvas element if it exists
        const previousCanvas = graphModalContent.querySelector('#tokenChart');
        if (previousCanvas) {
            previousCanvas.remove();
        }

        graphModalContent.appendChild(canvas)

        url = `https://api.coingecko.com/api/v3/coins/${e.target.innerHTML.toLowerCase()}/market_chart?vs_currency=usd&days=365&interval=daily`
        fetch(url)
            .then(results => results.json())
            .then(oneYear => {
                console.log(oneYear);
                let priceHistory = oneYear.prices
                const xAxis = [];
                const yAxis = [];
                for(let i = 0; i < priceHistory.length; i++){
                    // gets 1year timestamps (ms)
                    // console.log(oneYear.prices[i][0]);
                    xAxis.push(oneYear.prices[i][0])
                    // gets 1year prices:
                    // console.log(oneYear.prices[i][1]);
                    yAxis.push(oneYear.prices[i][1].toFixed(6))
                }
                // console.log(xAxis);
                console.log(yAxis);

                const formattedDates = xAxis.map((timestamp) => {
                    const date = new Date(timestamp);
                    const month = date.toLocaleString('default', { month: 'short' }); // month in abbreviated format
                    const day = date.getDate(); // day of month
                    return `${month} ${day}`; // month & day in string
                })

                console.log(formattedDates);

                const ctx = document.getElementById('tokenChart').getContext('2d');

                // remove the previous chart if it exists
                if (myChartInstance !== null) {
                    myChartInstance.destroy();
                }

                // Create the chart
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: formattedDates,
                        datasets: [{
                            label: `${e.target.innerHTML} Price`,
                            data: yAxis,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgb(83, 32, 225)',
                            borderWidth: 2,
                            pointRadius: 0
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                })

                myChartInstance = myChart;

            })

    }
});

// hide modal when clicking outside of it
window.addEventListener("click", (e)=>{
    if(e.target === graphModalContent || e.target.classList.contains('coinName')) {
        return;
    }
    graphModal.style.display = 'none';
    if(tokensTitle.innerText !== "Tokens on Hermes"){
        tokensTitle.innerText = "Tokens on Hermes"  
    }  
    // console.log(assetButton2.textContent);
});