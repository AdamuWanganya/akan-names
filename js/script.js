function akanName() {
    let yearOfBirth = document.getElementById("birthday").value;
    let gender = document.getElementById("gender");

}

function clickgender(male, female) {
    if (gender.checked) {
        return gender.value;
    }
}

let genderValue = clickgender();
console.log(genderValue);

//formula to generate Day of the week.
let Dayoftheweek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;