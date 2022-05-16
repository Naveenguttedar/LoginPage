import {
  Database,
  tempDatabase,
  validateUser,
  encode,
  logMsg,
} from "./passAuth.js";
console.log(Database, tempDatabase);
const login = document.getElementById("login");
const signup = document.getElementById("signUp");
const username = document.getElementById("username");
const pass = document.getElementById("password");
const remember = document.getElementById("remembered");
const button = document.getElementById("button");
const usrlog = document.getElementById("usrlog");
const passlog = document.getElementById("passlog");
let createAccount = false;
//template for database
class userinfo {
  constructor(username, pass) {
    (this.username = username), (this.pass = pass);
  }
}
//toggleing the styles of container title elements
login.addEventListener("click", () => {
  createAccount = true;
  console.log(createAccount);
  login.classList.remove("light");
  signup.classList.remove("dark");
  login.classList.add("dark");
});
signup.addEventListener("click", () => {
  signup.classList.add("dark");
  login.classList.remove("dark");
  login.classList.add("light");
});
let AddDatabase = (username, pass, remember) => {
  let user = new userinfo(username, encode(pass));
  if (remember !== "on") localStorage.setItem("userinfo", JSON.stringify(user));
  else sessionStorage.setItem("userinfo", JSON.stringify(user));
  console.log(remember);
};
//loginfunction
function loginAccount() {
  if (Database == null && tempDatabase == null) {
    alert("User do not exist Click on 'Sign Up'!");
    username.value = "";
    pass.value = "";
  } else {
    let response = validateUser(username.value, pass.value);
    button.innerText = response;
  }
}
//signup function
function checkUserData() {
  let log = "";
  username.addEventListener("blur", () => {
    if (!isNaN(username.value)) {
      log = "! username only include [A-Z] or [a-z]";
      logMsg(usrlog, log, "red");
    }
  });
  if (Database == null && tempDatabase == null) {
    pass.addEventListener("change", () => {
      pass.value.length < 5
        ? logMsg(passlog, "*Week", "red")
        : logMsg(passlog, "loks good !", "green");
    });
  }
}
checkUserData();
button.addEventListener("click", () => {
  console.log("in function", Database, tempDatabase);
  if (username.value == "") logMsg(usrlog, "*This field is required", "red");
  else if (pass.value == "") logMsg(passlog, "*This field is requierd", "red");
  else {
    if (Database === null && tempDatabase === null && !createAccount) {
      AddDatabase(username.value, pass.value, remember.value);
      username.value = "";
      button.innerText = "success";
      setTimeout(() => {
        location.reload();
      }, 1000);
    } else if (createAccount) loginAccount();
    else {
      alert('User Allready exits Click on "Log in"');
      username.value = "";
      pass.value = "";
    }
  }
});
