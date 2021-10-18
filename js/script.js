function akanName() {
    let yearOfBirth = document.getElementById("yearInput").value;
    let monthOfBirth = Number(document.getElementById("monthInput").value);
    let dayOfBirth = Number(document.getElementById("dayInput").value);
    let genders = document.getElementById("gender").value;

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

    //validation variables
    let monthValid = monthValidation();
    let dayValid = dayValidation();


    function monthValidation() {
        if (monthOfBirth <= 0 || monthOfBirth > 12) {
            return false
        } else {
            return true;
        }
    }


    //formula to generate Day of the week.
    let Dayoftheweek = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) +
        ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7);

    //Creating arrays for males,females and Day of the week.
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "kwame"];

    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //generating and index value to select items on arrays
    let index;
    // fix formula bug
    if (dayOfWeekNumber == 0) {
        index = 6;
    } else {
        index = dayOfWeekNumber - 1;
    }

    console.log(index);

    if (genderValue == "male" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You were born on a " + dayOfWeek[index] + " , your Akan name is " + male[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h1').textContent = "Hello" + " " + male[index];
        return false;
    } else if (genderValue == "female" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You were born on a " + dayOfWeek[index] + " , your Akan name is " + female[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h1').textContent = "Hello" + " " + female[index];
        return false;
    } else {
        alert("You entered an invalid day or month, please try again");
    }
}