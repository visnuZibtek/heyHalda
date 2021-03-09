
window.ub.hooks.beforeFormSubmit.push(function (args) {
    let question1 = args.formElement.querySelector('#question1');
    let question2 = args.formElement.querySelector('#question2');
    let question3 = args.formElement.querySelector('#question3');
    //let question4 = args.formElement.querySelector('#question4');


    let firstname = args.formElement.querySelector('#firstname');
    let lastname = args.formElement.querySelector('#lastname');
    let electronicMail = args.formElement.querySelector('#electronicMail');
    let phoneNumber = args.formElement.querySelector('#phoneNumber');

    let response = args.formElement.querySelector('#response_answer');

    question1.value = localStorage.getItem("q1");
    question2.value = localStorage.getItem("q2");
    question3.value = localStorage.getItem("q3");
    //question4.value = localStorage.getItem("q4");

    localStorage.setItem("response", question2.value);

    firstname.value = localStorage.getItem("fname");
    lastname.value = localStorage.getItem("lname");
    electronicMail.value = localStorage.getItem("email");
    phoneNumber.value = localStorage.getItem("phone");

    localStorage.removeItem("q1");
    localStorage.removeItem("q2");
    localStorage.removeItem("q3");
    //localStorage.removeItem("q4");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");

    if (question2.value == "Financial Aid") response.value = "Financial Aid";
    else if (question2.value == "Scholarships") response.value = "Scholarships";
    else if (question2.value == "Campus Visits") response.value = "Campus Visits";
    else response.value = "Other";


});
