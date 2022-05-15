const name = document.querySelector('[data-user="name"]');
const email = document.querySelector('[data-user="email"]');
const password = document.querySelector('[data-user="password"]');
const passwordConfirm = document.querySelector('[data-user="passwordConfirm"]');

const button = document.getElementById("btn");

const verifyFields = (name, email, password, passwordConfirm) => {
    let stringBuilder = "";

    // full name validation
    if (name.value === "") {
        stringBuilder += "name is a required field\n"
    } else if (name.value.length < 2) {
        stringBuilder += "use your complete name\n"
    }

    // email validation
    if (email.value !== "") {
        if (email.value.split("@").length > 1) {
            if (email.value.split("@")[1] === "") {
                stringBuilder += "invalid e-mail ex. (johnDoe@email.com.br)')\n"
            } else {
                console.log(email.value.split("@")[1].split('.'));
                if (email.value.split("@")[1].split('.').length === 1) {
                    stringBuilder += "invalid e-mail ex. (johnDoe@email.com.br)')\n"
                } else if (email.value.split("@")[1].split('.')[1] !== "com") {
                    stringBuilder += "invalid e-mail ex. (johnDoe@email.com.br)')\n"
                }
            }
        } else {
            stringBuilder += "e-mail format ex. (johnDoe@email.com.br)\n"
        }
    } else {
        stringBuilder += "e-mail is a required field\n"
    }

    // password validation
    if (password !== "" && passwordConfirm !== "") {
        if (password.value.length < 8) {
            stringBuilder += "password must contain at least 8 characters\n";
        } else if (password.value !== passwordConfirm.value) {
            stringBuilder += "passwords don't match\n";
        }
    }
    if (stringBuilder !== "") {
        alert(stringBuilder);
    }
}

button.addEventListener("click", (evt) => {
    evt.preventDefault();
    verifyFields(name, email, password, passwordConfirm);
})