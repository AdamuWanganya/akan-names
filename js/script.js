function akanName() {

    let yearOfBirth = document.getElementById("yearInput").value;
    let monthOfBirth = document.getElementById("monthInput").value;
    let dayOfBirth = document.getElementById("dayInput").value;
    let gender = document.getElementById("gender").value;

    function clickgender() {
        if (gender.checked) {
            return gender.value;
        }
    }

    let genderValue = clickgender();
    console.log(genderValue);

    //day and month validator
    function dayValidation() {
        if (dayOfBirth <= 0 || dayOfBirth > 31) {
            return false;
        } else {
            return true;
        }
    }

}

//formula to generate Day of the week.
let Dayoftheweek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

//Creating arrays for males,females and Day of the week.
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "kwame"];

let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//getting index value on arrays
if (genderValue == = "male" && Dayoftheweek = = = 0) {
    document.getElementById('result').textContent = your Akan name is " + akanName[0];
}