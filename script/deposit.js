// step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newdDepositAmount = depositField.value;
    // step-7: clear deposit field
    depositField.value = '';
    if (isNaN(parseFloat(newdDepositAmount))) {
        alert('Please insert a valid Number');
        return;
    }
    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal)+parseFloat(newdDepositAmount);
    // step-4: add numbers to set the total deposit
    depositTotalElement.innerText = currentDepositTotal;
    // step-5: get previous balance total
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotal =  previousBalanceElement.innerText;
    const newBalanceTotal = newdDepositAmount;
    // step-6: update previous balance total
    previousBalanceElement.innerText = parseFloat(newBalanceTotal) + parseFloat(previousBalanceTotal) ;
    // step-7: clear deposit field
    depositField.value = '';
})