const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#password");


togglePassword.addEventListener("click", ()=> {

    if (password.type ==="password"){
        password.type = "text";
        
    }
})

