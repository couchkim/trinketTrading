// Need to load exchange rate, 
// set variables for trinkets and gold coins
// Need to create button event listeners on click for buy and sell

let coins = 100
let trinkets = 0



window.addEventListener ('load', function (){
    console.log("working");

    showCoins();
    showTrinkets();
    showExchange();

    let buy = document.querySelector('#buy');
    buy.addEventListener('click', buyTrinket);

    let sell = document.querySelector('#sell');
    sell.addEventListener('click', sellTrinket);

})

function showCoins(){
    let parent = document.querySelector('.goldCoins');
    
    let coinNumber = document.createElement('p');
    coinNumber.textContent = coins;
    parent.appendChild(coinNumber);

};

function showTrinkets(){

    let parent = document.querySelector('.trinkets');
    
    let trinketNumber = document.createElement('p');
    trinketNumber.textContent = trinkets;
    parent.appendChild(trinketNumber);

};

function showExchange(){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/trinkets');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);

        console.log(response);
    })

    request.send();

}

function buyTrinket(){

}

function sellTrinket(){

    
}
