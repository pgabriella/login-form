let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn");

modalBtn.onclick = function(){
    modal.style.display = "block"
}
closeBtn.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none"
    }
}



let attempt = 3;
function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username =="form" && password == "form23"){
        alert("Login succesfull");
        return true
    }else{
        attempt--;
        alert("You have " + attempt + " attempts left");
        if(attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}

