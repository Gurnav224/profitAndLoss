const intialPrice = document.querySelector('#intial-price');
const quantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#current-price');
const showBtn = document.querySelector('#show-btn');
const outputBox = document.querySelector('#output');






function calulateProfitAndLoss(intialPrice,quantity,currentPrice){

    if(intialPrice>currentPrice){
        // loss
        let loss = (intialPrice-currentPrice)*quantity;
        let lossPercentage = loss/(intialPrice*quantity)*100;

        showOutput(`Whoops! Your Loss is ${loss} and loss Percentage is ${lossPercentage.toFixed(2)} %`);
        
    }
    else if(currentPrice>intialPrice){
          // profit
          let profit = (currentPrice-intialPrice)*quantity;
          let profitPercentage = profit/(intialPrice*quantity)*100;

          showOutput(`YAY! Your Profit is ${profit} and Profit Percentage is ${profitPercentage.toFixed(2)} %`);
    }
    else{
      // equal
     showOutput('no pain no gain and no gain no pain');
    }
}

function showOutput(message){
    outputBox.innerHTML = message
}




function clickHandler(){
    let ip = Number(intialPrice.value);
    let qty = Number(quantity.value);
    let curr = Number(currentPrice.value);

    if(ip && qty && curr){
       calulateProfitAndLoss(ip,qty,curr)
    }
    else{
      alert("please fill out the all fields")
    }
}




showBtn.addEventListener('click',clickHandler);