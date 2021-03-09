
$(document).ready(function () {
    console.log("Hello");
    $("#lp-pom-button-18").attr('disabled', 'disabled');
    $('#Form4 > input').keyup(function () {

        var empty = false;
        $('#Form4 > input').each(function () {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#lp-pom-button-18').attr('disabled', 'disabled');
        } else {
            $('#lp-pom-button-18').removeAttr('disabled');
        }
    });
    localStorage.setItem("page", "1");
    localStorage.removeItem("q1");
    localStorage.removeItem("q2");
    localStorage.removeItem("q3");
    localStorage.removeItem("q4");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    showhideFields();
});

function showhideFields() {
    let page = localStorage.getItem("page");
    if (page == 4) {
        // $("#hidden").hide(); // not in use
        $("#lp-pom-button-18").show();
    }
    else {
        // $("#hidden").hide();
        $("#lp-pom-button-18").hide();
    }
}