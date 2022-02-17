function getIncomeInput() {
    return incomeInput = parseInt(document.getElementById('incomeInput').value);
}
function getTotalCost() {
    const foodCost = parseInt(document.getElementById('foodCost').value);
    const rentCost = parseInt(document.getElementById('rentCost').value);
    const clothesCost = parseInt(document.getElementById('clothesCost').value);
    const totalCost = foodCost + rentCost + clothesCost;
    console.log(totalCost)
    return totalCost;
}
function getBalance() {
    const totalCost = getTotalCost();
    const incomeInput = getIncomeInput();
    const balance = document.getElementById('balance');
    balance.innerText = incomeInput - totalCost;
    return parseInt(balance.innerText);
}

document.getElementById('calculateButton').addEventListener('click', function () {
    const totalCost = getTotalCost();
    // show total cost in total expense field
    const totalExpenses = document.getElementById('totalExpenses');
    totalExpenses.innerText = totalCost;
    //set balance by substraction of income and cost 
    const incomeInput = getIncomeInput();
    const balance = document.getElementById('balance');
    balance.innerText = incomeInput - totalCost;
})

document.getElementById('savingButton').addEventListener('click', function () {
    const incomeInput = getIncomeInput();

    const savingPercent = parseInt(document.getElementById('savingInput').value);

    const savingAmountText = document.getElementById('savingAmount');
    savingAmountText.innerText = incomeInput / 100 * savingPercent;

    const balance = getBalance();
    const savingAmount = parseInt(savingAmountText.innerText);
    const remainBalance = document.getElementById('remainingBalance');
    remainBalance.innerText = balance - savingAmount;
})