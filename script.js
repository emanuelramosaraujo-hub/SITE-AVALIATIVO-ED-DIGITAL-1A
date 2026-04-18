const timelineData = [
    { n: "01", ano: "≈ 400.000 a.C.", t: "Domínio do Fogo", d: "A primeira tecnologia disruptiva. O fogo alterou a biologia humana e permitiu a expansão do pensamento abstrato ao redor das chamas.", img: "fogo.png" },
    { n: "02", ano: "1450", t: "Prensa de Gutenberg", d: "A democratização total do saber. O código escrito tornou-se a primeira rede social da história, conectando mentes através dos séculos.", img: "prensa.png" },
    { n: "03", ano: "1879", t: "Lâmpada Elétrica", d: "O controle sobre o tempo. A luz artificial removeu as barreiras solares da produtividade, criando a civilização urbana moderna.", img: "lampada.png" },
    { n: "04", ano: "1928", t: "Penicilina", d: "A bio-revolução. Pela primeira vez, a humanidade dominou as ameaças invisíveis, redefinindo o conceito de longevidade.", img: "penicilina.png" },
    { n: "05", ano: "1969", t: "Apolo 11", d: "O êxodo planetário. O momento em que a Terra deixou de ser o único limite para a exploração da consciência e da tecnologia.", img: "apollo.png" },
    { n: "06", ano: "2026", t: "Era da IA Híbrida", d: "A simbiose perfeita. A inteligência artificial funde-se com a criatividade humana para criar um novo paradigma de realidade.", img: "ia.png" }
];

const container = document.getElementById('timeline-container');

function init() {
    timelineData.forEach((item) => {
        const section = document.createElement('section');
        section.className = 't-section';
        section.innerHTML = `
            <div class="t-image-wrap">
                <img src="${item.img}" alt="${item.t}">
            </div>
            <div class="t-content">
                <span class="t-number">${item.n} / 06</span>
                <div class="t-year">${item.ano}</div>
                <h2 class="t-title">${item.t}</h2>
                <p class="t-desc">${item.d}</p>
            </div>
        `;
        container.appendChild(section);
    });

    // Fade out Loader com precisão
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1200);
    });
}

// Parallax Suave nas Imagens
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.t-image-wrap img');
    images.forEach(img => {
        const speed = 0.15;
        const rect = img.parentElement.getBoundingClientRect();
        const yPos = -(rect.top * speed);
        img.style.transform = `translateY(${yPos}px) scale(1.1)`;
    });
});

init();
