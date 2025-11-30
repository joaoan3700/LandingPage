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
