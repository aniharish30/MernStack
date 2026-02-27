const login = document.getElementById("login_form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailerr = document.getElementById("emailerr");
const passerr = document.getElementById("passerr");

login.addEventListener('submit', (e) => {
    e.preventDefault();
    advanceValidation(email.value, password.value);

    if(advanceValidation(email.value,password.value)){
        savedata(email.value,password.value);
    }
});
const firebaseConfig = {
  apiKey: "AIzaSyCFGL5ZQDMi7XCQWi-41_11YHSTXQiGEWY",
  authDomain: "from-validation-2a1bf.firebaseapp.com",
  databaseURL: "https://from-validation-2a1bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "from-validation-2a1bf",
  storageBucket: "from-validation-2a1bf.firebasestorage.app",
  messagingSenderId: "65624545388",
  appId: "1:65624545388:web:d31c8ef3526a1f82216049",
  measurementId: "G-WCF028V48B"
};

const savedata=(email , password) =>{
    firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("ReqForm");

db.push({
  
  email: email,
  password: password,
});

}
const advanceValidation = (emailValue, passwordValue) => {

    const passRegx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var isVaild = true;
    if (passRegx.test(passwordValue)) {
        passerr.textContent = "";
        console.log("Password valid");
    } else {
        passerr.textContent= "Password must contain uppercase, lowercase, number and special character (min 8)";
        var isVaild = false;
    }

    const emailRegx = /^\S+@\S+\.\S+$/;
    var isVaild = true;
    if (emailRegx.test(emailValue)) {
        emailerr.textContent = "";
        console.log("Email valid");
    } else {
        emailerr.textContent = "Enter a valid email address";
        var isVaild = true;
    }
    return isVaild;
};
