function moveCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    const items = track.children.length;
    const itemWidth = track.children[0].offsetWidth + 15;
    track.style.transform = `translateX(${-direction * itemWidth}px)`;
}

document.querySelector('a[href="#checkout"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#checkout').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});