
//imageslider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");

function updateSlider() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0; 
    }
    updateSlider();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
}

//Valid form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let message = document.getElementById("message").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    let numberRegex = /^\d{10}$/;

    if (name === "" || email === "" || number === "" || message === "") {
        responseMessage.style.color = "red";
        responseMessage.innerText = "All fields are required!";
    } else if (!emailRegex.test(email)) {
        responseMessage.style.color = "red";
        responseMessage.innerText = "Enter a valid email!";
    } else if (!numberRegex.test(number)) {
        responseMessage.style.color = "red";
        responseMessage.innerText = "Enter a valid phone number (10 digits)!";
    } else {
        responseMessage.style.color = "green";
        responseMessage.innerText = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});
