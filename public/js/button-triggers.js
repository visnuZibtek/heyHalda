// code from unbounce

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Next4 = document.getElementById("Next4");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");

var progress = document.getElementById("progress");

Next1.onclick = function () {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "180px";
    localStorage.setItem("page", "2");
}

Back1.onclick = function () {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "90px";
    localStorage.setItem("page", "1");
}

Next2.onclick = function () {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "270px";
    localStorage.setItem("page", "3");
}

Back2.onclick = function () {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "180px";
    localStorage.setItem("page", "2");
}

Next3.onclick = function () {
    Form3.style.left = "-450px";
    Form4.style.left = "40px";
    progress.style.width = "360px";
    localStorage.setItem("page", "4");
    showhideFields();
}

// Back3.onclick = function () {
//     Form3.style.left = "40px";
//     Form4.style.left = "450px";
//     progress.style.width = "270px";
//     localStorage.setItem("page", "3");
// }


function showhideFields() {
    let page = localStorage.getItem("page");
    if (page == "4") {
        // $("#hidden").hide();
        $("#lp-pom-button-18").show();
    }
    else {
        // $("#hidden").hide();
        $("#lp-pom-button-18").hide();
    }
}