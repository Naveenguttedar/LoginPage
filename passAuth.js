const authCodes = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  a: "n",
  b: "o",
  c: "p",
  d: "q",
  e: "r",
  f: "s",
  g: "t",
  h: "u",
  i: "v",
  j: "w",
  k: "x",
  l: "y",
  m: "z",
  n: "a",
  o: "b",
  p: "c",
  q: "d",
  r: "e",
  s: "f",
  t: "g",
  u: "h",
  v: "i",
  w: "j",
  x: "k",
  y: "l",
  z: "m",
  0: "5",
  1: "6",
  2: "7",
  3: "8",
  4: "9",
  5: "0",
  6: "1",
  7: "2",
  8: "3",
  9: "4",
  "!": "#",
  $: "%",
  "&": "+",
  "-": "@",
  _: "~",
  "#": "!",
  "%": "$",
  "+": "&",
  "@": "-",
  "~": "_",
};
let Database = localStorage.getItem("userinfo");

let tempDatabase = sessionStorage.getItem("userinfo");

let logMsg = (logElement, log, color_code) => {
  logElement.innerText = log;
  logElement.style.color = color_code;
  logElement.style.display = "block";
};
let encode = (inputString) => {
  const arr = inputString.split("");
  const encodeArr = arr.map((ele) => {
    for (let key in authCodes) if (key == ele) return authCodes[key];
  });
  return encodeArr.join("");
};
let decode = (inputString) => {
  const arr = inputString.split("");
  let decodeArr = [];
  for (let val of arr) {
    for (let key in authCodes) {
      if (authCodes[key] == val) decodeArr.push(key);
    }
  }
  return decodeArr.join("");
};
let validateUser = (username, password) => {
  let usrinfo = Database == null ? tempDatabase : Database;
  usrinfo = JSON.parse(usrinfo);
  if (username == usrinfo.username && password == decode(usrinfo.pass))
    return "access valid";
  return "access invalid";
};
let see = "seeing";
export {
  authCodes,
  Database,
  tempDatabase,
  encode,
  decode,
  validateUser,
  logMsg,
};
