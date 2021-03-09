Array.prototype.slice
    .call(document.querySelectorAll('.lp-pom-form form input[name^=ubafs-]'))
    .forEach(function (input) {
        input.parentNode.removeChild(input);
    });

Array.prototype.slice.call(document.querySelectorAll('.lp-pom-form form')).forEach(function (form) {
    var jevField = document.createElement('input');
    jevField.type = 'hidden';
    jevField.name = 'ubafs-jev';
    jevField.id = jevField.name;
    const clientMachine = {
        date: new Date(),
        agent: navigator.userAgent,
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
    jevField.value = JSON.stringify(clientMachine);
    form.appendChild(jevField);
    console.log(clientMachine);
});