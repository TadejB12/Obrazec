function validateForm() {
    var form = document.getElementById("form");
    var elements = form.querySelectorAll("input, select");
    var invalidElementId = "";

    var emailInput = document.getElementById("e_posta");
    var emailValue = emailInput.value;
    var emailInput2 = document.getElementById("e_postas");
    var emailValue2 = emailInput2.value;
    var emailPattern = /^[^]+@[^]+\.[^]+$/;

    var phoneInput = document.getElementById("telefon");
    var phoneValue = phoneInput.value;
    var parentPhoneInput = document.getElementById("telefons");
    var parentPhoneValue = parentPhoneInput.value;
    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;

    


    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].checkValidity()) {
            invalidElementId = elements[i].id;
            break;
        } else if (elements[i].id === 'e_posta' && emailValue && !emailPattern.test(emailValue)) {
            invalidElementId = "e_posta";
            break;
        } else if (elements[i].id === 'e_postas' && emailValue2 && !emailPattern.test(emailValue2)) {
            invalidElementId = "e_postas";
            break;
        } else if (elements[i].id === 'telefon' && phoneValue && !phonePattern.test(phoneValue)) {
            invalidElementId = "telefon";
            break;
        } else if (elements[i].id === 'telefons' && parentPhoneValue && !phonePattern.test(parentPhoneValue)) {
            invalidElementId = "telefons";
            break;
        }
    }

    if (invalidElementId) {
        let alertText;
        switch (invalidElementId) {
            case 'sola':
                alertText = 'Nisi vpisal šole!';
                break;
            case 'razred':
                alertText = 'Nisi vpisal razreda!';
                break;
            case 'ime':
                alertText = 'Nisi vpisal imena!';
                break;
            case 'priimek':
                alertText = 'Nisi vpisal priimka!';
                break;
            case 'spol':
                alertText = 'Nisi izbral spola!';
                break;
            case 'datumr':
                alertText = 'Nisi vpisal datuma rojstva!';
                break;
            case 'krajr':
                alertText = 'Nisi vpisal kraja rojstva!';
                break;
            case 'naslov':
                alertText = 'Nisi vpisal naslova bivališča!';
                break;
            case 'posta':
                alertText = 'Nisi vpisal pošte!';
                break;
            case 'termin':
                alertText = 'Nisi izbral termina!';
                break;
            case 'telefon':
                alertText = 'Nisi vpisal telefonske številke!';
                break;
            case 'e_posta':
                alertText = 'Nisi vpisal e-pošte!';
                break;
            case 'osebni':
                alertText = 'Nisi izbral vrsto osebnega dokumenta!';
                break;
            case 'stOsebne':
                alertText = 'Nisi vpisal številko osebnega dokumenta!';
                break;
            case 'veljavnost':
                alertText = 'Nisi vpisal do kdaj velja osebni dokument!';
                break;
            case 'telefons':
                alertText = 'Nisi vpisal telefonske številke starša!';
                break;
            case 'e_postas':
                alertText = 'Nisi vpisal e-pošte starša!';
                break;
            default:
                alertText = 'Nekaj je šlo narobe.';
        }

        swal({
            title: 'Napaka!',
            text: alertText,
            icon: 'error',
            button: {
                text: 'OK',
                className: 'swal-button1',
            }
        }).then((result) => {
            if (result) {
                if (invalidElementId === 'e_posta') {
                    var emailInput = document.getElementById("e_posta");
                    emailInput.setCustomValidity("Please enter a valid email address.");
                    emailInput.focus();
                    form.reportValidity();
                } else if (invalidElementId === 'e_postas') {
                    var emailInput = document.getElementById("e_postas");
                    emailInput.setCustomValidity("Please enter a valid email address.");
                    emailInput.focus();
                    form.reportValidity();
                } else if (invalidElementId === 'telefon') {
                    var phoneInput = document.getElementById("telefon");
                    phoneInput.setCustomValidity("Please enter a valid phone number (format: 123-456-789).");
                    phoneInput.focus();
                    form.reportValidity();
                } else if (invalidElementId === 'telefons') {
                    var parentPhoneInput = document.getElementById("telefons");
                    parentPhoneInput.setCustomValidity("Please enter a valid phone number (format: 123-456-789).");
                    parentPhoneInput.focus();
                    form.reportValidity();
                } else {
                    setTimeout(() => {
                        var firstInvalidElement = form.querySelector('[required]:invalid');
                        if (firstInvalidElement) {
                            firstInvalidElement.focus();
                            form.reportValidity();
                        }
                    }, 100); // Adjust the delay as needed 
                }
            }
        });
    } else {
        swal({
            title: 'Uspeh!',
            text: 'Prijava uspešna.',
            icon: 'success',
            button: {
                text: 'OK',
                className: 'swal-button2',
            }
        }).then(() => {
            form.reset();
            window.scrollTo(0, 0);
        });
    }
}

// Event listeners to reset custom validity message on input
document.getElementById("e_posta").addEventListener("input", function() {
    this.setCustomValidity(""); // Reset custom validity message on input
});
document.getElementById("e_postas").addEventListener("input", function() {
    this.setCustomValidity(""); // Reset custom validity message on input
});
document.getElementById("telefon").addEventListener("input", function() {
    this.setCustomValidity(""); // Reset custom validity message on input
});
document.getElementById("telefons").addEventListener("input", function() {
    this.setCustomValidity(""); // Reset custom validity message on input
});
