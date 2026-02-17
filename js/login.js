let loginBtn = document.getElementById("login-btn")



loginBtn.addEventListener("click", function(){
    let userNum = document.getElementById('mobile-number').value;
let pin = document.getElementById('pin-number').value;

let alertMsg =document.getElementById('alert-msg')

    if(userNum == "01612554864" && pin == "2846"){
        alertMsg.style.display ='flex';
        window.location.assign ('./home.html')
    }else{
        alert("Login Failed.! Try Again..")
    }

})