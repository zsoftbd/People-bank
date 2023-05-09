
// login button event handelar
let loginBtn=document.getElementById('loginBtn');
loginBtn.addEventListener('click',function(){
    
    let loginArea=document.getElementById('login-area');
    loginArea.style.display='none'

    let transactionArea=document.getElementById('transaction-area')
    transactionArea.style.display='block';
})

// Deposit button add event handler
let addDeposit=document.getElementById('addDeposit');
addDeposit.addEventListener('click',function(){
    const depositAmount=document.getElementById('depositAmount').value;
    const depositNumber=parseFloat(depositAmount);

    document.getElementById('depositAmount').value='';
    upDateSpanText('carrentDeposit',depositNumber)
    upDateSpanText('carrentBalance',depositNumber)
})

// withdraw add event handler
let withdrawBtn=document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
    const withdrawAmount=document.getElementById('withdrawAmount').value;
    const widrowAmountNumber=parseFloat(withdrawAmount)
   
    upDateSpanText('carrentWithdraw',widrowAmountNumber);
    upDateSpanText('carrentBalance',-1* widrowAmountNumber);

    document.getElementById('withdrawAmount').value="";
    
})


function getInputNumber(){
    let amount=document.getElementById(id);
    let amountNumber=parseFloat(amount)
    return amountNumber;
}
function upDateSpanText(id,depositNumber){
    const carrent=document.getElementById(id).innerText;
    const carrentNumber=parseFloat(carrent)
    const toatalAmount=depositNumber+carrentNumber;
    document.getElementById(id).innerText=toatalAmount;

}
