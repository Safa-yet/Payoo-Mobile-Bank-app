let loginBtn = document.getElementById("login-btn")



loginBtn.addEventListener("click", function(){
    let userNum = document.getElementById('mobile-number').value;
let pin = document.getElementById('pin-number').value;

let alertMsg =document.getElementById('alert-msg')

    if(userNum == accNum() && pin == pinNum()){
        alertMsg.style.display ='flex';
        window.location.assign ('./home.html')
    }else{
        alert("Login Failed.! Try Again..")
    }

})