let accountNumber = document.getElementById("account-number");
let ammountNumber = document.getElementById("ammount-number");
let pinNumber = document.getElementById("cashout-pin-number");
let balanceAmmount = document.getElementById("balance");

document.getElementById("withdraw-btn").addEventListener("click", function () {
  let account = accountNumber.value;
  let ammount = ammountNumber.value;
  let pin = pinNumber.value;

  if (account !== "01612554864") {
    alert("Incorrect NUmber");
    return;
  }
  
    let balance = Number(balanceAmmount.innerText) - Number(ammount);
    if (balance < 0) {
      alert("Insufficiant Balance");
      return;
    }

  if (pin == "2846") {
      balanceAmmount.innerText = balance;
    alert("Withdraw Successfully Done.");

     let historyCon = document.getElementById("history-payment-list")


let newList = document.createElement("div");

newList.innerHTML= `
    <li class="list-row flex justify-between items-center  rounded-xl bg-white">
    <div  class="w-11/12 flex gap-2">
    
    <div ><img class="size-10 rounded-box" src="./assets/opt-2.png"/></div>
    <div>
      <div class="font-semibold">Cash Out<span class="text-lg text-primary"> ${"$ "+getInputValue("ammount-number") }</span> </div>
      <div class="text-xs  font-semibold opacity-80">To ${getInputValue("account-number")}</div>
    </div>
    </div>
   
   <p>${new Date().toLocaleString()}</p>
  </li>`;

    historyCon.append(newList)
  } else {
    alert("Incorrect Pin..!");
    return;
  }

});
