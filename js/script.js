const facts = [
    "I am fluent in French.",
    "I am a content creator on Social Media Platforms.",
    "I listen to every kind of music except Country.",
    "Sometimes, I dream of solving technical question.",
    "I am originally from the Democratic Republic of Congo.",
    "I played Soccer and ran Track.",
    "I love playing Chess although I suck at it."
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
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    // Target all sections with class 'section'
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About Me', 'Resume', 'Projects', 'Fun Facts', 'Contact'],
        showActiveTooltip: true,
        sectionsColor: ['#333333', '#222222', '#1a1a1a', '#111111', '#0a0a0a'], // Adjusted to darker shades
        scrollHorizontally: true,
        css3: true,
        easingcss3: 'ease-in-out'
    });
});



