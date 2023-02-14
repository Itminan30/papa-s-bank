// step-1: add event handler in withdraw-btn
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2:
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    
    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText) ;

    // step-7:
    withdrawFieldElement.value = '';
    
    if(newWithdrawAmount>previousBalanceTotal){
        alert("Baap er bank e eto taka nai");
        return;
    }

    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7:
    withdrawFieldElement.value = '';


})