const descobertas = [
    { ano: "≈ 400.000 a.C.", t: "Domínio do Fogo", d: "O ponto de virada que permitiu a sobrevivência e evolução da espécie humana." },
    { ano: "1450", t: "Prensa de Gutenberg", d: "A invenção que permitiu a disseminação do conhecimento em massa." },
    { ano: "1879", t: "Lâmpada Elétrica", d: "Thomas Edison muda para sempre a forma como vivemos e trabalhamos." },
    { ano: "1969", t: "Apolo 11", d: "O momento em que a humanidade deixou de ser uma espécie presa a um único planeta." },
    { ano: "2023", t: "Era da IA Generativa", d: "A fronteira final entre a criatividade humana e a inteligência artificial." }
];

const container = document.getElementById('timeline');
const clickAudio = document.getElementById('click-sound');

function renderTimeline() {
    descobertas.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Alterna os lados no desktop para um visual profissional
        if (window.innerWidth > 768) {
            card.style.alignSelf = index % 2 === 0 ? 'flex-start' : 'flex-end';
            card.style.marginLeft = index % 2 === 0 ? '0' : 'auto';
        }

        card.innerHTML = `
            <small>${item.ano}</small>
            <h2>${item.t}</h2>
            <p>${item.d}</p>
        `;

        card.addEventListener('click', () => {
            clickAudio.currentTime = 0;
            clickAudio.play();
            // Efeito visual de clique
            card.style.borderColor = "#fff";
            setTimeout(() => card.style.borderColor = "rgba(255,255,255,0.1)", 300);
        });

        container.appendChild(card);
    });
}

// Barra de progresso e animação de scroll
window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

renderTimeline();
