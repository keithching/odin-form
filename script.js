const form = (() => {

    // store as properties
    let email;
    let country;
    let zipcode;
    let password;
    
    const showError = (type) => {

        if (type.id == 'email') {
            const errorMsg = document.querySelector('#email + span.error');
            if (!type.validity.valid) {
                if (type.validity.valueMissing) {
                    errorMsg.textContent = 'please provide email';
                } else if (!type.validity.valid) {
                    errorMsg.textContent = 'please provide correct format';
                }
            } else {
                errorMsg.textContent = '';
            }   
        } else if (type.id == 'country') {
            const errorMsg = document.querySelector('#country + span.error');
            if (!type.validity.valid) {
                if (type.validity.valueMissing) {
                    errorMsg.textContent = 'please provide country name';
                } else if (!type.validity.valid) {
                    errorMsg.textContent = 'please provide correct format';
                }
            } else {
                errorMsg.textContent = '';
            }
        } else if (type.id == 'zipcode') {
            const errorMsg = document.querySelector('#zipcode + span.error');
            if (!type.validity.valid) {
                if (type.validity.valueMissing) {
                    errorMsg.textContent = 'please provide zip code';
                } else if (!type.validity.valid) {
                    errorMsg.textContent = 'please provide correct format';
                }
            } else {
                errorMsg.textContent = '';
            }
        } else if (type.id == 'password') {
            const errorMsg = document.querySelector('#password + span.error');
            if (!type.validity.valid) {
                if (type.validity.valueMissing) {
                    errorMsg.textContent = 'please provide password';
                } else if (type.validity.tooShort || type.validity.tooLong) {
                    errorMsg.textContent = 'please provide password between 8 and 16 characters';
                }
            } else {
                errorMsg.textContent = '';
            }
        } else if (type.id == 'passwordConfirm') {
            const errorMsg = document.querySelector('#passwordConfirm + span.error');
            if (form.password != type.value) {
                errorMsg.textContent = 'not match with password';
                type.classList.add('invalid'); // add invalid class manually
            } else if (type.validity.valueMissing) {
                errorMsg.textContent = 'please provide password confirmation';
            } else {
                errorMsg.textContent = '';
                type.classList.remove('invalid'); // remove invalid class
            }
        }     
    };

    return {
        email, 
        country,
        zipcode,
        password,
        showError
    };

})();

const email = document.getElementById('email');
email.addEventListener('change', () => {
    form.email = email.value;
    form.showError(email);
});

const country = document.getElementById('country');
country.addEventListener('change', () => {
    form.country = country.value;
    form.showError(country);        
});

const zipcode = document.getElementById('zipcode');
zipcode.addEventListener('change', () => {
    form.zipcode = zipcode.value;
    form.showError(zipcode);        
});

const password = document.getElementById('password');
password.addEventListener('change', () => {
    form.password = password.value;
    form.showError(password);
    form.showError(passwordConfirm); // password confirmation field listens to password field
});

const passwordConfirm = document.getElementById('passwordConfirm');
passwordConfirm.addEventListener('change', () => {
    form.showError(passwordConfirm);
});

const HTMLform = document.getElementsByTagName('form')[0];
HTMLform.addEventListener('submit', () => {
    if (email.validity.valid && country.validity.valid && zipcode.validity.valid && 
    password.validity.valid && passwordConfirm.validity.valid && (form.password == passwordConfirm.value)) {
        // inform the user about valid form
        HTMLform.classList.add('validForm');
    } else {
        // inform the user about invalid form
        HTMLform.classList.add('invalidForm');
    }
    // prevent the form from being sent by canceling the event
    event.preventDefault();
});

HTMLform.addEventListener('transitionend', () => {
    HTMLform.classList.remove('validForm');
    HTMLform.classList.remove('invalidForm');
});