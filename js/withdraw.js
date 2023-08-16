/*

1. add eventHandler with the withdraw button.

2. get the withdraw amount.

3. clear the withdraw input field

4. get previous withdraw total

5. calculate total withdraw amount and set it to the withdraw total amount.

6. get previous balance

*/


// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3:
    withdrawField.value = '';

    // step-4:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5:
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6:
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal
})