// code from unbounce
var module = {
    options: [],
    header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
    dataos: [
        { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
        { name: 'Windows', value: 'Win', version: 'NT' },
        { name: 'iPhone', value: 'iPhone', version: 'OS' },
        { name: 'iPad', value: 'iPad', version: 'OS' },
        { name: 'Kindle', value: 'Silk', version: 'Silk' },
        { name: 'Android', value: 'Android', version: 'Android' },
        { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
        { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
        { name: 'Macintosh', value: 'Mac', version: 'OS X' },
        { name: 'Linux', value: 'Linux', version: 'rv' },
        { name: 'Palm', value: 'Palm', version: 'PalmOS' }
    ],
    databrowser: [
        { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
        { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
        { name: 'Safari', value: 'Safari', version: 'Version' },
        { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
        { name: 'Opera', value: 'Opera', version: 'Opera' },
        { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
        { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
    ],
    init: function () {
        var agent = this.header.join(' '),
            os = this.matchItem(agent, this.dataos),
            browser = this.matchItem(agent, this.databrowser);

        return { os: os, browser: browser };
    },
    matchItem: function (string, data) {
        var i = 0,
            j = 0,
            html = '',
            regex,
            regexv,
            match,
            matches,
            version;

        for (i = 0; i < data.length; i += 1) {
            regex = new RegExp(data[i].value, 'i');
            match = regex.test(string);
            if (match) {
                regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                matches = string.match(regexv);
                version = '';
                if (matches) { if (matches[1]) { matches = matches[1]; } }
                if (matches) {
                    matches = matches.split(/[._]+/);
                    for (j = 0; j < matches.length; j += 1) {
                        if (j === 0) {
                            version += matches[j] + '.';
                        } else {
                            version += matches[j];
                        }
                    }
                } else {
                    version = '0';
                }
                return {
                    name: data[i].name,
                    version: parseFloat(version)
                };
            }
        }
        return { name: 'unknown', version: 0 };
    }
};


window['formData'] = { modelClosed: false };

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

$(document).ready(function () {
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
        $("#lp-pom-button-18").show();
    }
    else {
        $("#lp-pom-button-18").hide();
    }
}

function submitDetails(event) {
    event.preventDefault();
    onSave();
}

function onSave() {
    e = module.init();

    let question1 = document.querySelector('#question1');
    let question2 = document.querySelector('#question2');
    let question3 = document.querySelector('#question3');
    //let question4 = document.querySelector('#question4');

    let firstname = document.querySelector('#firstname');
    let lastname = document.querySelector('#lastname');
    let electronicMail = document.querySelector('#electronicMail');
    let phoneNumber = document.querySelector('#phoneNumber');

    let response = document.querySelector('#response_answer');

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

    let data = window['formData'] || { modelClosed: false };
    const heldaForm = document.getElementById('heldaForm');
    var formData = new FormData(heldaForm);
    for (const [name, value] of formData) {
        data[name] = value;
    }
    data['clientMachine'] = {
        date: new Date(),
        agent: navigator.userAgent,
        osName: e.os.name,
        osVersion: e.os.version,
        browserName: e.browser.name,
        browserVersion: e.browser.version,
        screen: {
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            width: screen.width,
            height: screen.height,
        },
        window: {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        },
        hasPlugins: 'length' in navigator.plugins && navigator.plugins.length > 0,
    }
    postFormData(data);
    setTimeout(() => fireTopLevelEvent('success'), 2000);
}

function postFormData(formDetails) {
    const url = "http://198.199.72.13:3000/formDetails";
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(formDetails),
        contentType: "application/json",
        complete: function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
        }
    });
}

const fireTopLevelEvent = (message) => {
    window.top.postMessage(message, '*')
}


(function addEventListner() {
    window.onmessage = (e) => {
        if (e.data == 'mdlClose') {
            window['formData']['modelClosed'] = true;
            onSave();
        }
    };
})();