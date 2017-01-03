// Need to load exchange rate, 
// set variables for trinkets and gold coins
// Need to create button event listeners on click for buy and sell

let coins = 100;
let trinkets = 0;
let exchange = 0;



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
    coinNumber.textContent = coins;
    

};

function showTrinkets(){

    
    
    let trinketNumber = document.querySelector('.trinkets p');
    trinketNumber.textContent = trinkets;
   

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

        let parent = document.querySelector('.exchange');

        let exchangeRate = document.createElement('p');
        exchangeRate.textContent = number.toFixed(4);
        parent.appendChild(exchangeRate);

}
        
   
function buyTrinket(){
    if (coins >= exchange){
        coins = coins - exchange;
        trinkets = trinkets + 1;
    };

   
    showCoins();
  
    showTrinkets();

}

function sellTrinket(){
    if (trinkets > 0){
        coins = coins + exchange;
        trinkets = trinkets - 1;
    };

   
    showCoins();
  
    showTrinkets();
    
}
