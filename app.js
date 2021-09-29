const initial = document.querySelector("#initial-price");
const quantity = document.querySelector("#no-of-stocks");
const final = document.querySelector("#current-price");
const output = document.querySelector("#output-msg");
const submitBtn = document.querySelector("#output-btn");

submitBtn.addEventListener('click', function OutputHandler() {
    
    if (initial.value =="" || quantity.value == "" || final.value == "") {
        console.log(initial.value);
        output.style.color = "orange";
        output.innerHTML = "Warning:Value cannot be empty";
    } else {
        output.style.display = "none";
        var initialPrice = Number(initial.value);
        var finalPrice = Number(final.value);
        var stocksQuantity = Number(quantity.value);

        calculateProfitLoss(initialPrice, stocksQuantity, finalPrice);
    }

});

function calculateProfitLoss(i, q, f) {
    output.style.display = "block";
    if (i > f) {
        let loss = (i - f) * q;
        let lossPercent = (loss / (i * q)) * 100;
        output.style.color = "red";
        output.innerHTML = `Your Loss is ${loss} and loss Percentage is ${lossPercent.toFixed(2)}%`;
    } else if (i < f) {
        let profit = (f - i) * q;
        let profitPercent = (profit / (i * q)) * 100;
        output.style.color = "green";
        output.innerHTML = `Your Profit is ${profit} and profit Percentage is ${profitPercent.toFixed(2)}%`;
    } else {
        output.style.color = "white";
        output.innerHTML = `Break Even !! No pain No Gain`;
    }
}