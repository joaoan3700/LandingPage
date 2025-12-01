const sr = ScrollReveal({
    distance: '40px',
    duration: 900,
    easing: 'ease-out',
    reset: false
});

// Títulos das seções (Passeio, SUVs, Caminhões, Agrícola)
sr.reveal('h3.prod', {
    origin: 'bottom'
});

// Cards das seções
sr.reveal('.card', {
    origin: 'bottom',
    interval: 150
});

// Cards das seções
sr.reveal('div.retangulo', 'div.retangulo-menor', {
    origin: 'left',
    interval: 150
});

//MODAL DE 6X ///////

const modal = document.getElementById("promoModal");

// Função para fechar com animação
function closePromoModal() {
    modal.style.animation = "zoomOut 0.4s forwards";
    setTimeout(() => modal.remove(), 400); // remove do DOM
}

// Fechar automaticamente em 10 segundos
setTimeout(closePromoModal, 20000);

//MODAL DE SAÍDA ///////

document.addEventListener("mouseout", function (e) {
    // Detecta mouse indo para fora do topo da janela
    if (e.clientY < 10) {
        var exitModal = new bootstrap.Modal(document.getElementById('exitModal'));
        exitModal.show();

        // Evita abrir mais de uma vez
        document.removeEventListener("mouseout", arguments.callee);
    }
});

const marquee = document.querySelector('.marquee-track');

marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
});

const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 3700) {
        btnTopo.style.transform = "translateX(0)";
    } else {
        btnTopo.style.transform = "translateX(-120%)";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const btnPhone = document.getElementById("btn-phone");

window.addEventListener("scroll", () => {
    if (window.scrollY > 3700) {
        btnPhone.style.transform = "translateX(0)";
    } else {
        btnPhone.style.transform = "translateX(-120%)";
    }
});


document.addEventListener("DOMContentLoaded", () => {

    /* =======================
       VARIÁVEIS DO CARROSSEL
    ======================== */
    const track = document.querySelector(".cc-track");
    const items = document.querySelectorAll(".cc-item");
    const nextBtn = document.querySelector(".cc-next");
    const prevBtn = document.querySelector(".cc-prev");

    let visible = window.innerWidth <= 576 ? 2 : 3;
    let index = 0;
    let autoplay;

    /* =======================
          RESPONSIVIDADE
    ======================== */
    const updateVisible = () => {
        visible = window.innerWidth <= 576 ? 2 : 3;
        moveCarousel();
    };

    window.addEventListener("resize", updateVisible);

    const moveCarousel = () => {
        const itemWidth = items[0].offsetWidth + 20; 
        track.style.transform = `translateX(${-index * itemWidth}px)`;
    };

    /* =======================
         CONTROLES MANUAIS
    ======================== */
    nextBtn.addEventListener("click", () => {
        if (index < items.length - visible) index++;
        moveCarousel();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) index--;
        moveCarousel();
    });

    /* =======================
             AUTOPLAY
    ======================== */
    const startAutoplay = () => {
        autoplay = setInterval(() => {
            if (index < items.length - visible) index++;
            else index = 0;
            moveCarousel();
        }, 10000);
    };

    const stopAutoplay = () => clearInterval(autoplay);

    startAutoplay();

    /* =======================
               MODAL
    ======================== */
    const modal = document.getElementById("ccModal");
    const modalImg = document.getElementById("ccModalImg");
    const closeBtn = document.querySelector(".cc-close");

    let selectedImageSrc = ""; // armazena a imagem clicada

    items.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            selectedImageSrc = img.src;  // guarda o src da imagem aberta
            stopAutoplay();
        });
    });

    /* Fechar modal no X */
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        startAutoplay();
    });

    /* Fechar modal ao clicar fora */
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            startAutoplay();
        }
    });

    /* =======================
        BOTÃO "TENHO INTERESSE"
    ======================== */
    const interestBtn = document.querySelector(".cc-btn-interest");

    interestBtn.addEventListener("click", () => {
        const message =
            "Olá, vim pelo site e gostaria de mais informações.%0AImagem:%0A" +
            encodeURIComponent(selectedImageSrc);

        const url =
            "https://wa.me/558000002146?text=" + message;

        window.open(url, "_blank");
    });

});
