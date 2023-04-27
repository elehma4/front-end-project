//example API URL : "https://newsapi.org/v2/everything?q=bitcoin&apiKey=${Your-API-Key-Here}"

const apiKey = ''; // Replace with your API key

let coins = ['bitcoin', 'ethereum', 'usdc', 'dogecoin', 'arbitrum', 'gmx', 'magic'];

let content = document.querySelector('.content');

let capFirstLetter = (string) => {
    let first = string[0].toUpperCase();
    let rest = string.substring(1);
    let whole = first + rest;
    return whole;
}

let shortenDate = (string) => {
    let newDate = string.substring(0,10);
    return newDate
}
//test data



coins.forEach((coin)=>{
    let url = `https://newsapi.org/v2/everything?q=${coin}&apiKey=${apiKey}`;

    // use this if API is out of fetch calls
    // let url = '../scripts/testNews.js';

    // test coin variable, use if API is out
    // let coin = 'bitcoin';

    let coinDiv = document.createElement('div');
    coinDiv.setAttribute('class', `${coin}Div`)

    let coinTitle = document.createElement('div');
    coinTitle.setAttribute('class','coinTitle');
    coinTitle.innerText = `${capFirstLetter(coin)} News`;
    coinDiv.append(coinTitle);

    fetch(url)
    .then(results => results.json())
    .then(data => {
        console.log(data);
        console.log(data.articles[0].urlToImage);
        console.log(data.articles.length);
        let list = data.articles;
        
        let counter = 0;
        for(let i = 0; i < list.length; i++){
            
            if(list[i].urlToImage !== null && counter < 3){

                let curr = list[i];

                //div containing a single article
                let articleDiv = document.createElement('div');
                articleDiv.setAttribute('class', 'oneArticle');

                //div containing website/hyperlink/description/date
                let leftSide = document.createElement('div');
                leftSide.setAttribute('class', 'leftSide');

                let website = document.createElement('div');
                website.setAttribute('class', 'website');
                website.innerText = curr.source.name;
                leftSide.append(website);

                let titleLink = document.createElement('a');
                titleLink.setAttribute('class', 'titleLink');
                titleLink.setAttribute('href', curr.url);
                titleLink.innerText = curr.title;
                leftSide.append(titleLink);

                let description = document.createElement('div');
                description.setAttribute('class', 'description');
                description.innerText = curr.description;
                leftSide.append(description);

                let date = document.createElement('div');
                date.setAttribute('class', 'date');
                date.innerText = shortenDate(curr.publishedAt);
                leftSide.append(date);


                
                
                console.log(curr.urlToImage);
                let pic = document.createElement('img');
                pic.setAttribute('src',curr.urlToImage);
                pic.setAttribute('width', '350');
                pic.setAttribute('height', '200');
                articleDiv.append(leftSide);
                articleDiv.append(pic);
                coinDiv.append(articleDiv);
                counter ++;

                
            } else{
                coinDiv.classList.add('articleSection')
                
            }
            
        }
        
    })
    content.append(coinDiv);
})



      