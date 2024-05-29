document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About Me', 'Resume', 'Projects', 'Fun Facts', 'Contact'],
        showActiveTooltip: true,
        sectionsColor: ['#333', '#444', '#555', '#666', '#777'],
        scrollHorizontally: true,
        css3: true,
        easingcss3: 'ease-in-out'
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop: true
    });
});
function showRandomFact() {
    const facts = [
        "I am fluent in French and English.",
        "I have 400,000 followers on TikTok, Instagram and Youtube.",
        "I used to run Track and Fields and was mainly a jumper.",
        "I love playing Chess although I suck at it.",
        "I used to play Soccer and played LB.",
        "I listen to all kind of music except Country.",
        "I am a middle child.",
        "I am neither introverted or extroverted."
        
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFactDisplay').textContent = facts[randomIndex];
}
