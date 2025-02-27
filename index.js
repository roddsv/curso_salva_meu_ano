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
    const testimonials = Array.from(track.children);
    const videoWidth = 320; // Largura de cada item (ajuste se necessário)
    let currentIndex = 1; // Inicia no primeiro item real

    // 🔹 CLONANDO PRIMEIRO E ÚLTIMO ITEM PARA O EFEITO INFINITO 🔹
    const firstClone = testimonials[0].cloneNode(true);
    const lastClone = testimonials[testimonials.length - 1].cloneNode(true);
    track.appendChild(firstClone); // Adiciona o primeiro item no final
    track.insertBefore(lastClone, testimonials[0]); // Adiciona o último item no início

    // 🔹 CONFIGURANDO TAMANHO DO CARROSSEL 🔹
    const items = track.children.length; // Atualizado com os clones
    track.style.width = `${items * videoWidth}px`;
    track.style.transform = `translateX(${-currentIndex * videoWidth}px)`;

    function moveCarousel(direction) {
        currentIndex += direction;
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(${-currentIndex * videoWidth}px)`;

        // 🔹 RESETAR POSIÇÃO QUANDO CHEGAR NO FINAL 🔹
        setTimeout(() => {
            if (currentIndex >= items - 1) {
                currentIndex = 1; // Volta para o primeiro real
                track.style.transition = "none"; // Remove a transição para parecer contínuo
                track.style.transform = `translateX(${-currentIndex * videoWidth}px)`;
            }
            if (currentIndex <= 0) {
                currentIndex = items - 2; // Volta para o último real
                track.style.transition = "none";
                track.style.transform = `translateX(${-currentIndex * videoWidth}px)`;
            }
        }, 500); // Aguarda a transição antes de resetar
    }

    nextButton.addEventListener("click", function () {
        moveCarousel(1);
    });

    prevButton.addEventListener("click", function () {
        moveCarousel(-1);
    });

    // 🔹 SCROLL AUTOMÁTICO 🔹
    // setInterval(() => moveCarousel(1), 5000);
});
