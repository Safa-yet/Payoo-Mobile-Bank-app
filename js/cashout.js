let accountNumber = document.getElementById("account-number");
let ammountNumber = document.getElementById("ammount-number");
let pinNumber = document.getElementById("pin-number");
let balanceAmmount = document.getElementById('balance')

document.getElementById("withdraw-btn").addEventListener("click", function () {
  let account = accountNumber.value;
  let ammount = ammountNumber.value;
  let pin = pinNumber.value;
  
 if(account !== "01612554864"){
        alert("Incorrect NUmber")
        return;
    }
 
  if(pin == "2846"){
    alert("Withdraw Successfully Done.")
  }else{
    alert("Incorrect Pin..!");return;
  }

  
  let balance = Number(balanceAmmount.innerText)-Number(ammount);
  if(balance<0){
    alert("Insufficiant Balance");
    return;
  }

 balanceAmmount.innerText =balance;
 



});
