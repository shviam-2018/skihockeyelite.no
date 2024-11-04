// JavaScript to cycle sponsor images
let currentSponsor = 0;
const sponsors = document.querySelectorAll('.sponsor-banner img');

function rotateSponsors() {
    sponsors[currentSponsor].classList.remove('visible');
    currentSponsor = (currentSponsor + 1) % sponsors.length;
    sponsors[currentSponsor].classList.add('visible');
}

setInterval(rotateSponsors, 3000);
