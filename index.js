// File is mainly for validations of input

let formSubmitBtn = document.querySelector(".formSubmit");
let form = document.querySelector("#inputs-container");
let inputEls = document.getElementsByTagName("input");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");
let passwordMatchErr = document.querySelector(".passwordMatchErr");


formSubmitBtn.addEventListener("click", () => {
    let willSubmit = true;
    // Validate inputs one by one
    Array.from(inputEls).forEach((inputEl) => {
        if ((inputEl.classList[0] === "required" && inputEl.value === "")) {
            willSubmit = false;
            inputEl.style.border = "1px solid red";
        };
        if (!inputEl.checkValidity()) {
            inputEl.reportValidity();
            willSubmit = false;
        }
    });
    // Check if confirm password matches password
    if (password.value !== confirmPassword.value) {
        passwordMatchErr.style.display = "block";
        willSubmit=false
    };

    if (willSubmit) form.submit();
    else console.log("Not Submiting");
});