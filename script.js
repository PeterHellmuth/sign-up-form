const passField1 = document.getElementById("password");
const passField2 = document.getElementById("confirm-password");
passField2.addEventListener("change", passwordFieldChange)

function passwordFieldChange(){
    if(passField1.value !== passField2.value){
        passField2.classList.remove('valid');
        passField2.classList.add('invalid');
        passField2.setCustomValidity("The passwords must match.");
    } else{
        passField2.classList.remove('invalid');
        passField2.classList.add('valid');
        passField2.setCustomValidity("");
    }
}
  