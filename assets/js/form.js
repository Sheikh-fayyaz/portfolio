document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input fields
    const fname = document.querySelector('input[name="fname"]');
    const lname = document.querySelector('input[name="lname"]');
    const email = document.querySelector('input[name="email"]');
    const phone = document.querySelector('input[name="phone"]');

    // Get the associated <small> elements for error messages
    const fnameWarning = fname.nextElementSibling;
    const lnameWarning = lname.nextElementSibling;
    const emailWarning = email.nextElementSibling;
    const phoneWarning = phone.nextElementSibling;

    const contactForm = document.getElementById('contactForm');
    const thankyou = document.getElementById('thankyou');

    let isValid = true;

    // Validate First Name
    if (fname.value.trim() === '') {
        fnameWarning.style.display = 'block';
        isValid = false;
    } else {
        fnameWarning.style.display = 'none'; // Hide warning if valid
    }

    // Validate Last Name
    if (lname.value.trim() === '') {
        lnameWarning.style.display = 'block';
        isValid = false;
    } else {
        lnameWarning.style.display = 'none'; // Hide warning if valid
    }

    // Validate Email
    if (email.value.trim() === '') {
        emailWarning.style.display = 'block';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailWarning.style.display = 'block';
        isValid = false;
    } else {
        emailWarning.style.display = 'none'; // Hide warning if valid
    }

    // Validate Phone
    if (phone.value.trim() === '') {
        phoneWarning.style.display = 'block';
        isValid = false;
    } else {
        phoneWarning.style.display = 'none'; // Hide warning if valid
    }

    // If all fields are valid, proceed with EmailJS
    if (isValid) {
        emailjs.sendForm('service_w9dlk8a', 'template_xgbd3vg', this)
            .then(function(response) {
                contactForm.style.display = 'none';
                thankyou.style.display = 'block';
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.log('FAILED...', error);
            });
    }
});

// Fields and their corresponding warning elements
const fields = ['fname', 'lname', 'email', 'phone'];

fields.forEach(fieldName => {
    document.querySelector(`input[name="${fieldName}"]`).addEventListener('input', function() {
        const warning = this.nextElementSibling;
        if (this.value.trim() !== '') {
            warning.style.display = 'none';
        }
        else{
            warning.style.display = 'block';
        }
    });
});













    