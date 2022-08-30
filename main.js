// Step 1 - selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
var emoji = document.querySelector("#emoji");


let root = document.documentElement;

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    if(lossPercentage > 50){
      emoji.innerHTML = '&#128078;';
      root.style.setProperty('--primary-color', "red");
    }
    
    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    emoji.innerHTML = '&#128077;';
    root.style.setProperty('--primary-color', "#F9A826");
    
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
