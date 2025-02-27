document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a[href='#checkout']").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#checkout").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

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
    const videoWidth = 320;
    const visibleVideos = 2;
    const containerWidth = videoWidth * visibleVideos;
    track.style.width = `${items * videoWidth}px`;
    track.style.transform = `translateX(${-currentIndex * videoWidth}px)`;
    prevButton.style.display = currentIndex === 0 ? "none" : "block";
    nextButton.style.display =
      currentIndex + visibleVideos >= items ? "none" : "block";
    prevButton.style.display = "block";
    nextButton.style.display = currentIndex === items - 1 ? "none" : "block";
  }

  function moveCarousel(direction) {
    if (
      (direction === 1 && currentIndex < items - 1) ||
      (direction === -1 && currentIndex > 0)
    ) {
      currentIndex += direction;
      updateCarousel();
    }
  }

  prevButton.addEventListener("click", function () {
    moveCarousel(-1);
  });
  nextButton.addEventListener("click", function () {
    moveCarousel(1);
  });

  updateCarousel();
});
