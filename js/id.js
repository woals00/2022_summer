const login_form = document.querySelector(".login-wrapper #login-form");
const login_id = document.querySelector("div form #id");
const login_password = document.querySelector("div form #password");
// console.log(login_form); 

function onLoginSubmit(event){
    event.preventDefault();
    const username = login_id.value;
    const userPassword = login_password.value;
    localStorage.setItem("user_id", username);
    localStorage.setItem("user_password", userPassword);
}


login_form.addEventListener("sumbit", onLoginSubmit);