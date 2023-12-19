//toggling navbar via mobile phone
const navbarToggle = document.querySelector(".navbar-toggle");
const primaryNav = document.querySelector(".primary-nav");

navbarToggle.addEventListener('click', ()=>{
    primaryNav.classList.toggle("show-nav");
});

// get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();

//flipping card
const card = document.querySelector('.works-card');

card.addEventListener('click', () => {
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});
