const facts = [
    "I am fluent in French.",
    "I am a content creator on Social Media Platforms.",
    "I listen to every kind of music except Country.",
    "Soemtimes, I dream of solving technical question.",
    "I am originally from the Democratic Republic of Congo."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFactDisplay').innerText = facts[randomIndex];
}

// Load a random fact on initial page load
document.addEventListener('DOMContentLoaded', showRandomFact);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});
