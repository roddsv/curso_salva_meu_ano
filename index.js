document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carouselTrack");
  const prevButton = document.querySelector(".carousel-btn.prev");
  const nextButton = document.querySelector(".carousel-btn.next");
  const testimonials = track.children;
  const items = testimonials.length;
  track.style.transform = `translateX(0px)`;
  currentIndex = 0;
  setTimeout(updateCarousel, 100);
  currentIndex = 0;
  updateCarousel();
  track.scrollLeft = 0;

  function updateCarousel() {
      const videoWidth = 320; // Largura de um vídeo
      const visibleVideos = 2; // Quantidade de vídeos visíveis
      const containerWidth = videoWidth * visibleVideos;
      track.style.width = `${items * videoWidth}px`;
      track.style.transform = `translateX(${-currentIndex * videoWidth}px)`;
      prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
      nextButton.style.display = currentIndex >= items - visibleVideos ? 'none' : 'block';
      prevButton.style.display = 'block';
      nextButton.style.display = currentIndex === items - 1 ? 'none' : 'block';
  }

  function moveCarousel(direction) {
      if ((direction === 1 && currentIndex < items - 1) || (direction === -1 && currentIndex > 0)) {
          currentIndex += direction;
          updateCarousel();
      }
  }

  prevButton.addEventListener('click', function() { moveCarousel(-1); });
  nextButton.addEventListener('click', function() { moveCarousel(1); });

  updateCarousel();
});

