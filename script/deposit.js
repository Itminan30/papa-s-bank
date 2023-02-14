// step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newdDepositAmount = depositField.value;
    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal)+parseFloat(newdDepositAmount);
    depositTotalElement.innerText = currentDepositTotal;

    // step-7: clear deposit field
    depositField.value = '';
})