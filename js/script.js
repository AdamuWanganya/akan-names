var a = document.getElementById("btnClick"); //created a button "a" from the "btnClick" in html
a.addEventListener("click", function() { //added an onclick event listener to btnClick so that when clicked, the function runs
    var DOB = document.getElementById('dateOB').valueAsDate //variable "DOB" stores the value from the date picker
    var dayOfBirth = DOB.getDay(); //variable "dayOfBirth" returns an integer value for the day of the week
    //0 is Sunday and Saturday 6.
    function myFunction() {
        document.getElementById("form").reset();
    }
    var radioselect = document.querySelector('input[name="gender"]:checked').value; //var "radioselect" gets the choice selected from the radio buttons
    if (radioselect == "male" && dayOfBirth == 0) {
        document.getElementById("resultSection").innerHTML = "Kwasi";
    } else if (radioselect == "male" && dayOfBirth == 1) {
        document.getElementById("resultSection").innerHTML = "Kwadwo";
    } else if (radioselect == "male" && dayOfBirth == 2) {
        document.getElementById("resultSection").innerHTML = "Kwabena";
    } else if (radioselect == "male" && dayOfBirth == 3) {
        document.getElementById("resultSection").innerHTML = "Kwaku";
    } else if (radioselect == "male" && dayOfBirth == 4) {
        document.getElementById("resultSection").innerHTML = "Yaw";
    } else if (radioselect == "male" && dayOfBirth == 5) {
        document.getElementById("resultSection").innerHTML = "Kofi";
    } else if (radioselect == "male" && dayOfBirth == 6) {
        document.getElementById("resultSection").innerHTML = "Kwame";
    } else if (radioselect == "female" && dayOfBirth == 0) {
        document.getElementById("resultSection").innerHTML = "Akosua";
    } else if (radioselect == "female" && dayOfBirth == 1) {
        document.getElementById("resultSection").innerHTML = "Adwoa";
    } else if (radioselect == "female" && dayOfBirth == 2) {
        document.getElementById("resultSection").innerHTML = "Abenaa";
    } else if (radioselect == "female" && dayOfBirth == 3) {
        document.getElementById("resultSection").innerHTML = "Akua";
    } else if (radioselect == "female" && dayOfBirth == 4) {
        document.getElementById("resultSection").innerHTML = "Yaa";
    } else if (radioselect == "female" && dayOfBirth == 5) {
        document.getElementById("resultSection").innerHTML = "Afua";
    } else if (radioselect == "female" && dayOfBirth == 6) {
        document.getElementById("resultSection").innerHTML = "Ama";
    } else alert("error");
});