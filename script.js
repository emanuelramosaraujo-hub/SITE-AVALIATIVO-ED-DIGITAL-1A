const historyData = [
    {
        id: "ARCH-01", t: "Fogo", ano: "400.000 a.C.",
        d: "O domínio da combustão química foi o primeiro 'hack' biológico. Permitiu a digestão externa (cozimento), liberando energia para o crescimento neocortical e estabelecendo o conceito de 'lar'.",
        tags: ["Termodinâmica", "Evolução", "Bio-Hack"], img: "fogo.png"
    },
    {
        id: "ARCH-02", t: "Prensa", ano: "1450",
        d: "A serialização do pensamento. Gutenberg transformou a sabedoria subjetiva em dados objetivos e replicáveis, dando início ao processamento de informações em larga escala na Europa.",
        tags: ["Dados", "Replicação", "Saber"], img: "prensa.png"
    },
    {
        id: "ARCH-03", t: "Luz", ano: "1879",
        d: "A eletrificação da realidade. Ao desvincular a atividade humana do ciclo solar, a lâmpada criou a infraestrutura para a economia global ininterrupta.",
        tags: ["Fotónica", "Indústria", "Fluxo"], img: "lampada.png"
    },
    {
        id: "ARCH-04", t: "Cura", ano: "1928",
        d: "A descoberta do erro biológico. A penicilina foi o primeiro patch de correção para infecções bacterianas, estendendo o tempo de execução (tempo de vida) da espécie humana.",
        tags: ["Medicina", "Patch", "Sintético"], img: "penicilina.png"
    },
    {
        id: "ARCH-05", t: "Espaço", ano: "1969",
        d: "O escape da biosfera. O programa Apollo provou que a consciência humana pode operar fora dos limites atmosféricos originais, iniciando a era multiplanetária.",
        tags: ["Física", "Exploração", "Cosmos"], img: "apollo.png"
    },
    {
        id: "ARCH-06", t: "IA", ano: "2026",
        d: "A convergência absoluta. A IA Generativa e os sistemas neurais fundem-se, criando uma inteligência coletiva capaz de processar toda a história humana em milissegundos.",
        tags: ["Singularidade", "Neural", "Futuro"], img: "ia.png"
    }
];

const ultraEngine = document.getElementById('ultra-engine');
const glow = document.getElementById('cursor-glow');

// Seguimento do Mouse High-End
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

function createSections() {
    historyData.forEach((item, index) => {
        const section = document.createElement('section');
        section.className = 'era-section';
        section.id = `era-${index}`;
        
        section.innerHTML = `
            <div class="era-card">
                <div class="era-visual">
                    <img src="${item.img}" alt="${item.t}">
                </div>
                <div class="era-content">
                    <span class="era-id">${item.id} // ${item.ano}</span>
                    <h2 class="era-title">${item.t}</h2>
                    <p class="era-text">${item.d}</p>
                    <div class="era-tags">
                        ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        ultraEngine.appendChild(section);
    });

    // Remove Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').remove(), 1000);
    }, 2600);
}

// Lógica de Scroll "Sticky-Reveal"
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.era-section');
    sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight * 0.5) {
            document.querySelectorAll('.nav-item').forEach(n => n.style.opacity = '0.2');
            document.querySelector(`.nav-item[data-index="${idx}"]`).style.opacity = '1';
        }
    });
});

createSections();
