const login = document.getElementById("login_form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailerr = document.getElementById("emailerr");
const passerr = document.getElementById("passerr");

login.addEventListener('submit', (e) => {
    e.preventDefault();
    advanceValidation(email.value, password.value);
});

const advanceValidation = (emailValue, passwordValue) => {

    const passRegx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (passRegx.test(passwordValue)) {
        passerr.textContent = "";
        console.log("Password valid");
    } else {
        passerr.textContent= "Password must contain uppercase, lowercase, number and special character (min 8)";
    }

    const emailRegx = /^\S+@\S+\.\S+$/;

    if (emailRegx.test(emailValue)) {
        emailerr.textContent = "";
        console.log("Email valid");
    } else {
        emailerr.textContent = "Enter a valid email address";
    }
};
