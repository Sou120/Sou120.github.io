// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for contact form
const contactButton = document.getElementById('contactButton');
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close');

contactButton.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Add event listener to contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Select input fields within the form
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic validation
    if (!name || !email || !message) {
        console.error('Please fill in all fields.');
        return;
    }

    // Log data (you can replace this with an actual submission)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Close modal after submission
    modal.style.display = "none";
    alert('Thank you for your message!');
});
