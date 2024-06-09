// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Add your form submission logic here
        document.getElementById('formMessage').innerText = 'Thank you for your message!';
        this.reset();
    } else {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
    }
});

// Random fact generator
const facts = [
    "I am fluent in French and English.",
    "I have 400,000 followers on TikTok, Instagram, and YouTube.",
    "I used to run Track and Fields and was mainly a jumper.",
    "I love playing Chess although I suck at it.",
    "I used to play Soccer and played LB.",
    "I listen to all kinds of music except Country.",
    "I am a middle child.",
    "I am neither introverted nor extroverted."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFactDisplay').innerText = facts[randomIndex];
}
