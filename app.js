// Need to load exchange rate, 
// set variables for trinkets and gold coins
// Need to create button event listeners on click for buy and sell

let coins = 300;
let trinkets = 0;
let exchange = 0;

let transactions = [];



window.addEventListener ('load', function (){
    console.log("working");

    showCoins();
    showTrinkets();
    getExchange();
    setInterval(getExchange, 10000);

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
        transactions.push({type:'bought', rate: exchange});
        console.log(transactions);
    };

   
    showCoins();
    showTrinkets();
    showTransactions(transactions);

}

function sellTrinket(){
    if (trinkets > 0){
        coins = coins + exchange;
        trinkets = trinkets - 1;
        
        transactions.push({type:'sold', rate: exchange});
    };

   
    showCoins();
    showTrinkets();
    showTransactions(transactions);
    
}

function showTransactions(deals){
     
     let parent = document.querySelector('#list');
     parent.innerHTML = '';
    
    for (i=0; i<deals.length; i++){
    let items = document.createElement('li')
    items.textContent = "1 trinket " + deals[i].type + " for " + (deals[i].rate).toFixed(0) + " gold coins."
    parent.appendChild(items);
}
}
