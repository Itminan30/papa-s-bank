// step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})