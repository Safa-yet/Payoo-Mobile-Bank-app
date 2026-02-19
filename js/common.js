// Make A Password

function accNum(){
    let pass = "01612554864";
    return pass;
}

function pinNum(){
    let pin = '2846';
    return pin;
}



// get Input value from any element

function getInputValue(id){
    let input = document.getElementById(id);
    let value = input.value;
    console.log("value :"+ value);
    return value;
}


function balance(){
    let balance = document.getElementById("balance");
    let balanceInput = balance.innerText;
    return Number(balanceInput);
}


function setBalance(calculation){
    let currentBalance= document.getElementById("balance");
    currentBalance.innerText = calculation;


}



// Show Only With A function


function showOnly(id){
    let addMoney = document.getElementById("add-money");
    let cashOut = document.getElementById("cash-out");
    let homePage = document.getElementById("lastest-payment");
    let transitionHistory = document.getElementById("transition-container")

    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden")
    homePage.classList.add("hidden")
    transitionHistory.classList.add("hidden")


    let selected = document.getElementById(id);
    selected.classList.remove("hidden")
}

