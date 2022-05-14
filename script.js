console.log("hi");
const login = document.getElementById("login");
const signup = document.getElementById("signUp");
//toggleing the styles of container title elements
login.addEventListener("click", () => {
  login.classList.remove("light");
  signup.classList.remove("dark");
  login.classList.add("dark");
});
signup.addEventListener("click", () => {
  console.log("sign in");
  signup.classList.add("dark");
  login.classList.remove("dark");
  login.classList.add("light");
});
