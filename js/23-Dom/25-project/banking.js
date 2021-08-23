// 25-6 Get User deposit and set deposit total value

// handle deposite
document.getElementById('depositeBtn').addEventListener('click' , function(){
    const depositeInput = document.getElementById('deposit-Input');

    const depositeAmount = depositeInput.value;
    console.log(depositeAmount);
    // console.log('clicked');

    // update deposit total
    const depositTotal = document.getElementById('deposite-total');

    const previousDeposit = depositTotal.innerText;

    const newDeposit = parseFloat(previousDeposit) + parseFloat(depositeAmount);

    depositTotal.innerText = newDeposit;



    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newbalance = previousBalanceTotal + parseFloat(depositeAmount);

    balanceTotal.innerText = newbalance;




    // clear deposit input field
    depositeInput.value = '';

});


// withdraw
document.getElementById('withdrawBtn').addEventListener('click' , function(){
    const withdrawInput = document.getElementById('withdraw-input');
    // console.log(withdrawInput.value);

    const newWithdraw = withdrawInput.value;

    // update withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    
    const previousWithdraw = withdrawTotal.innerText;

    const newWidthdrawTotal = parseFloat(newWithdraw) + parseFloat(previousWithdraw);

    withdrawTotal.innerText = newWidthdrawTotal;


    // update balance after withdrawing the money
    const totalBalance = document.getElementById('balance-total');
    const previousbalanceTotal = parseFloat(totalBalance.innerText);

    const newBalanceTotal = previousbalanceTotal -  parseFloat(newWithdraw);
    totalBalance.innerText = newBalanceTotal;




    // ereas input field
    withdrawInput.value = '';

});
