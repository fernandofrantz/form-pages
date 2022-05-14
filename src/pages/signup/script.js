const name = document.querySelector('[data-user="name"]');
const email = document.querySelector('[data-user="email"]');
const password = document.querySelector('[data-user="password"]');
const passwordConfirm = document.querySelector('[data-user="passwordConfirm"]');

const button = document.getElementById("btn");

const verifyFields = (name, email, password, passwordConfirm) => {
    let stringBuilder = "";

    name.value.length === 1 ? stringBuilder += "use your complete name\n" : null;


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

    console.log(stringBuilder)

}

button.addEventListener("click", (evt) => {
    evt.preventDefault();
    verifyFields(name, email, password, passwordConfirm);
})