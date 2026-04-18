// --- GESTÃO DE DADOS (ARRAY DE OBJETOS) ---
const historyData = [
    { t: "Domínio do Fogo", d: "Energia térmica e cozimento proteico.", tags: "400k a.C.", img: "fogo.png" },
    { t: "Prensa de Gutenberg", d: "Serialização da informação escrita.", tags: "1450", img: "prensa.png" },
    { t: "Lâmpada Elétrica", d: "Eletrificação e controle da noite.", tags: "1879", img: "lampada.png" },
    { t: "Era da IA", d: "Sistemas neurais e processamento generativo.", tags: "2026", img: "ia.png" }
];

const faqData = [
    { q: "Qual o impacto do Fogo?", a: "Permitiu o desenvolvimento cerebral através do cozimento de carnes." },
    { q: "Por que 2026?", a: "O ano da convergência entre IA e consciência humana." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function renderApp() {
    const grid = document.getElementById('dynamic-grid');
    const accordion = document.getElementById('accordion-container');

    // Injetar Cards
    grid.innerHTML = historyData.map(item => `
        <article class="card">
            <span class="era-tag">${item.tags}</span>
            <h3>${item.t}</h3>
            <p>${item.d}</p>
        </article>
    `).join('');

    // Injetar Acordeão
    accordion.innerHTML = faqData.map((item, i) => `
        <div class="accordion-item">
            <button class="accordion-trigger" aria-expanded="false" onclick="toggleAccordion(${i})">
                ${item.q}
            </button>
            <div class="accordion-content" id="content-${i}">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// --- ACESSIBILIDADE: TAMANHO DA FONTE ---
let currentFontSize = 1;
function changeFontSize(action) {
    currentFontSize += action === 'increase' ? 0.1 : -0.1;
    document.documentElement.style.setProperty('--font-base', `${currentFontSize}rem`);
}

// --- CONTRASTE ---
document.getElementById('contrast-toggle').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// --- COMPONENTES: ACORDEÃO ---
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const triggers = document.querySelectorAll('.accordion-trigger');
    
    contents[index].classList.toggle('open');
    const isOpen = contents[index].classList.contains('open');
    triggers[index].setAttribute('aria-expanded', isOpen);
}

// --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
}, { threshold: 0.1 });

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
});
