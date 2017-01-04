// Need to load exchange rate, 
// set variables for trinkets and gold coins
// Need to create button event listeners on click for buy and sell

let coins = 300;
let trinkets = 0;
let exchange = 0;

let buyList = [];
let sellList = [];



window.addEventListener ('load', function (){
    console.log("working");

    showCoins();
    showTrinkets();
    getExchange();
    setInterval(getExchange, 10000);
    // showBuyList(buyList);
    // showSellList(sellList);

    let buy = document.querySelector('#buy');
    buy.addEventListener('click', buyTrinket);

    let sell = document.querySelector('#sell');
    sell.addEventListener('click', sellTrinket);

})

function showCoins(){
    
    let coinNumber = document.querySelector('.goldCoins p');
    coinNumber.textContent = coins.toFixed(0);
    

};

function showTrinkets(){

    
    
    let trinketNumber = document.querySelector('.trinkets p');
    trinketNumber.textContent = trinkets.toFixed(0);
   

};

function getExchange(){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/trinkets');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        console.log(response);
        exchange = response.exchange;
        showExchange(exchange);
           });
    

    request.send();

}


function showExchange(number){

        let exchangeRate = document.querySelector('.exchange p');
        exchangeRate.textContent = number.toFixed(4);
        

}
        
   
function buyTrinket(){
    if (coins >= exchange){
        coins = coins - exchange;
        trinkets = trinkets + 1;
        buyList.push(exchange)
        console.log(buyList);
    };

   
    showCoins();
  
    showTrinkets();

    showBuyList(buyList);

}

function sellTrinket(){
    if (trinkets > 0){
        coins = coins + exchange;
        trinkets = trinkets - 1;
        sellList.push(exchange);
    };

   
    showCoins();
  
    showTrinkets();

    
    showSellList(sellList);


    
}

function showBuyList(buys){
    
    for (i=0; i<buys.length; i++){
    let parent = document.querySelector('.transactions')
    let buyItems = document.createElement('li')
    buyItems.textContent = "1 trinket bought for " + buys[i].toFixed(0) + " gold coins."
    parent.appendChild(buyItems);
}
}
function showSellList(sells){
    for (i=0; i<sells.length; i++){
    let parent = document.querySelector('.transactions')
    let sellItems = document.createElement('li')
    // sellItems.innerHTML="";
    sellItems.textContent = "1 trinket sold for " + sells[i].toFixed(0) + " gold coins."
    parent.appendChild(sellItems);
    }
}