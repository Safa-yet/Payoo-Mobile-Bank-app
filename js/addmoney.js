document.getElementById("add-money-btn").addEventListener("click",function(){
    if(getInputValue("select-bank") == 'Select Your Bank'){
        alert("Please Select Your Bank");
        return;
    }
    if(getInputValue('add-account-number') != accNum()){
        alert("Invalid Account Number");
        return;
    }

    let newBalance = balance() + Number(getInputValue("add-ammount"));

    if(getInputValue("add-pin-number") === pinNum()){
        alert("Add Money Successfully Done");
        setBalance(newBalance);


        let historyCon = document.getElementById("history-payment-list")


let newList = document.createElement("div");

newList.innerHTML= `
    <li class="list-row flex justify-between items-center  rounded-xl bg-white">
    <div  class="w-11/12 flex gap-2">
    
    <div ><img class="size-10 rounded-box" src="./assets/opt-1.png"/></div>
    <div>
      <div class="font-semibold">Add Money <span class="text-lg text-primary"> ${"$ "+getInputValue("add-ammount") }</span> </div>
      <div class="text-xs  font-semibold opacity-80">From ${getInputValue("select-bank")}</div>
    </div>
    </div>
   
   <p>${new Date().toLocaleString()}</p>
  </li>`;

    historyCon.append(newList)

    }
    else{

        alert("Incorrect Pin");
        return;
    }
})