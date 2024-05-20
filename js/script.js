document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'About Me', 'Resume', 'Projects', 'Fun Facts', 'Contact'],
        showActiveTooltip: true,
        sectionsColor: ['#333', '#444', '#555', '#666', '#777'], // Different shades of dark for each section
        scrollHorizontally: true,
        css3: true,
        easingcss3: 'ease-in-out'
    });
});

function showRandomFact() {
    const facts = [
        "Multilingual: Fluent in French and English.",
        "Tech Content Creator: Over 400,000 followers on YouTube and TikTok.",
        "Avid Runner: Completed several half-marathons.",
        "Chess Enthusiast: Enjoys challenging friends to chess games.",
        "DIY Tech Projects: Built a computer from scratch.",
        "Volunteer Work: Teaches computer skills at local community centers.",
        "Gourmet Cook: Specializes in French pastries and East African cuisine.",
        "Nature Photographer: Captures landscapes during travels.",
        "Bookworm: Aims to read a book from every country.",
        "Environmental Advocate: Participates in local clean-up drives."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFactDisplay').textContent = facts[randomIndex];
}
