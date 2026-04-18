// --- GESTÃO DE DADOS ---
const historyData = [
    { t: "Domínio do Fogo", d: "Energia térmica e cozimento proteico.", tags: "400k a.C.", img: "image_753503.png" },
    { t: "Prensa de Gutenberg", d: "A revolução da informação escrita.", tags: "1450", img: "image_753844.png" },
    { t: "Lâmpada Elétrica", d: "O fim da dependência do ciclo solar.", tags: "1879", img: "image_753be7.png" },
    { t: "Penicilina", d: "A era da medicina moderna.", tags: "1928", img: "image_753f6c.png" },
    { t: "Apolo 11", d: "O salto gigante da humanidade.", tags: "1969", img: "image_754005.png" },
    { t: "Era da IA", d: "Inteligência generativa e futuro.", tags: "2026", img: "image_75432d.png" }
];

const faqData = [
    { q: "Qual o foco deste projeto?", a: "Unir UX moderna com acessibilidade inclusiva." },
    { q: "Como as fontes aumentam?", a: "Usamos Variáveis CSS para escalar todo o layout proporcionalmente." }
];

// --- RENDERIZAÇÃO ---
function initApp() {
    const grid = document.getElementById('dynamic-grid');
    const accRoot = document.getElementById('accordion-root');

    grid.innerHTML = historyData.map(item => `
        <article class="card">
            <img src="${item.img}" alt="${item.t}">
            <span style="color: var(--primary)">${item.tags}</span>
            <h3>${item.t}</h3>
            <p style="color: var(--text-muted)">${item.d}</p>
        </article>
    `).join('');

    accRoot.innerHTML = faqData.map((item, i) => `
        <div class="accordion-item">
            <button class="acc-trigger" aria-expanded="false" onclick="toggleAcc(${i})">
                ${item.q}
            </button>
            <div class="acc-content" id="acc-${i}">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// --- FUNÇÕES DE ACESSIBILIDADE ---
let fontSize = 1;
function changeFontSize(type) {
    fontSize += (type === 'increase' ? 0.1 : -0.1);
    document.documentElement.style.setProperty('--font-base', `${fontSize}rem`);
}

document.getElementById('contrast-toggle').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

function toggleAcc(index) {
    const contents = document.querySelectorAll('.acc-content');
    contents[index].classList.toggle('open');
}

// --- SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('reveal');
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    document.querySelectorAll('.card, .reveal').forEach(el => observer.observe(el));
});
