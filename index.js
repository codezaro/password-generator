const passwordRangeInputEl = document.getElementById("passRangeInput");
const passRangeValueEl = document.getElementById("passRangeValue");
const genBtnEl = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");
let passwordLength = 7;
let isupperCase = false;
let isnumbers = false;
let issymbols = false;
const generatePassword = (passLength) => {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = isupperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isnumbers ? "1234567890" : "";
  const symbols = issymbols ? `!@#$%^&*()-+` : "";

  const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;
  //   console.log(string);
  //   passwordEl.innerText = string;
};

passwordRangeInputEl.addEventListener("input", (e) => {
  passwordLength = +e.target.value;

  passRangeValueEl.innerText = passwordLength;
});

genBtnEl.addEventListener("click", () => {
  const uppercaseEl = document.getElementById("uppercase");
  const numbersEl = document.getElementById("numbers");
  const symbolsEl = document.getElementById("symbols");

  isupperCase = uppercaseEl.checked;
  isnumbers = numbersEl.checked;
  issymbols = symbolsEl.checked;

  const password = generatePassword(passwordLength);
  passwordEl.innerHTML = password;
  console.log(password);
});

passwordEl.addEventListener("click", (e) => {
  if (e.target.innerHTML.length > 0) {
    navigator.clipboard
      .writeText(passwordEl.innerText)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        alert("Could not copy.");
      });
  }
});
