let Slid = 1;
let TouchXaxis;

document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('nextButton');
    const nextButton1 = document.getElementById('nextButton1');

    nextButton.addEventListener('click', () => {
        if (Slid < 3) {
            Slid++;
            updateCarousel();
        }
    });





    nextButton1.addEventListener('click', () => {
        if (Slid < 3) {
            Slid++;
            updateCarousel();
        }
    });

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
});



function handleTouchStart(event) {
    TouchXaxis = event.touches[0].clientX;
}

function handleTouchMove(event) {
    event.preventDefault();
}

function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - TouchXaxis;

    if (deltaX > 50 && Slid > 1) {
        Slid--;
    } else if (deltaX < -50 && Slid < 3) {
        Slid++;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(calc(-${(Slid - 1) * 100}vw))`;

    updatePagination();
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index + 1 === Slid) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}



// CAROSEL IN SIGNUP PAGE

let Slde = 1;

var Disable = document.getElementById('nextButon')

document.addEventListener('DOMContentLoaded', function () {
    const nextButon = document.getElementById('nextButon');

    nextButon.addEventListener('click', () => {
        if (Slde < 4) {
            Slde++;
            uCal();
        }

        if (Slde == 3) {
            Disable.style.display = 'none';
        }


    });

});


function uCal() {
    const coel = document.querySelector('.cal');
    coel.style.transition = 'transform 0.5s ease-in-out';
    coel.style.transform = `translateX(calc(-${(Slde - 1) * 100}vw))`;

    updatePagination();
}


const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('nextButon');

checkbox.addEventListener('change', function () {
    button.disabled = !checkbox.checked;
});


function validateForm(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!isValidEmail(email)) {
        alert("Invalid email address");
        event.preventDefault();
    }

    if (!isValidPassword(password)) {
        alert("Invalid password");
        event.preventDefault();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\|:;<>,.?/~`]).{8,}$/;
    return passwordRegex.test(password);
}

function enableSubmitButton() {
    var password = document.getElementById("password").value;
    var submitButton = document.getElementById("submitButton");

    submitButton.disabled = !isValidPassword(password);
}


const imageInput = document.getElementById('imageInput');
const profileImage = document.getElementById('profileImage');
const submit = document.getElementById('submit');

imageInput.addEventListener('change', function () {
    if (imageInput.files.length > 0) {
        const selectedFile = imageInput.files[0];

        const reader = new FileReader();

        reader.onload = function (e) {
            profileImage.src = e.target.result;

            submit.disabled = false;
        };

        reader.readAsDataURL(selectedFile);
    } else {
        submit.disabled = true;
    }
});





function popupButton() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

document.getElementById('popup').addEventListener('scroll', function () {
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.popup .close');

    var distanceToBottom = popup.scrollHeight - (popup.scrollTop + popup.clientHeight);

    var threshold = 10;

    if (distanceToBottom <= threshold) {
        closeBtn.style.display = 'block';
    } else {
        closeBtn.style.display = 'none';
    }
});







function popupButton() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    void popup.offsetWidth;

    popup.style.height = '20vh';
}


function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.height = '0';

    void popup.offsetWidth;

    setTimeout(function () {
        popup.style.display = 'none';
        showCheckbox(); // Call the function to show the checkbox
    }, 1000);
}

function showCheckbox() {
    var checkbox = document.getElementById('myCheckbox');
    checkbox.style.display = 'block';
}