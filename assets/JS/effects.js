const bottomNavbar = document.querySelector(".bottomnavbar");
const topNavbar = document.querySelector(".topnavbar");

function handleScroll() {
    if(window.scrollY > 100){
        bottomNavbar.classList.add("bottomnavbaranime");
        bottomNavbar.classList.add("animate-links");
        topNavbar.classList.add("topnavbaranime");
    }else{
        bottomNavbar.classList.remove("bottomnavbaranime");
        bottomNavbar.classList.remove("animate-links");
        topNavbar.classList.remove("topnavbaranime");
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
handleScroll();

// ─── Featured Cards Entrance Animation ───────────────────────────────────────
// Uses IntersectionObserver: when the featured section enters the viewport,
// each card gets .card-visible one by one (CSS handles the stagger via transition-delay)

const featuredCards = document.querySelectorAll(".myFeaturedSlider .featured-card");

if (featuredCards.length > 0) {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate ALL cards the moment the slider section becomes visible
                featuredCards.forEach(card => {
                    card.classList.add("card-visible");
                });
                // Stop observing once triggered — animation plays once
                cardObserver.disconnect();
            }
        });
    }, {
        threshold: 0.15  // Trigger when 15% of the slider section is in view
    });

    // Observe the parent section container
    const featuredSection = document.querySelector(".featured-sliderbox");
    if (featuredSection) {
        cardObserver.observe(featuredSection);
    }
}