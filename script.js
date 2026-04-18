/* --- GESTÃO DE DADOS DINÂMICOS --- */
const discoveries = [
    { title: "Domínio do Fogo", desc: "A base da civilização. Permitiu a evolução cerebral e proteção.", year: "400.000 a.C." },
    { title: "Prensa Móvel", desc: "A primeira revolução da informação global.", year: "1450" },
    { title: "Lâmpada Incandescente", desc: "O fim da dependência do ciclo solar.", year: "1879" },
    { title: "Penicilina", desc: "A era da biotecnologia salvando bilhões.", year: "1928" },
    { title: "Internet (WWW)", desc: "A conexão total da consciência humana.", year: "1989" },
    { title: "IA Generativa", desc: "A singularidade técnica e criativa de 2026.", year: "2026" }
];

const faq = [
    { q: "Qual o objetivo deste site?", a: "Demonstrar a união entre design futurista e acessibilidade inclusiva para 2026." },
    { q: "Como o Alto Contraste funciona?", a: "Ele altera as variáveis CSS globais para garantir legibilidade máxima conforme normas WCAG." }
];

/* --- RENDERIZAÇÃO --- */
function init() {
    const grid = document.getElementById('timeline-grid');
    const accordionRoot = document.getElementById('accordion-root');

    // Renderizar Cards
    grid.innerHTML = discoveries.map(item => `
        <article class="card">
            <span style="color: var(--primary); font-weight: bold;">${item.year}</span>
            <h3 style="margin: 1rem 0;">${item.title}</h3>
            <p style="color: var(--text-low);">${item.desc}</p>
        </article>
    `).join('');

    // Renderizar Accordions
    accordionRoot.innerHTML = faq.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-trigger" aria-expanded="false" onclick="toggleAccordion(${index})">
                ${item.q} <span>+</span>
            </button>
            <div class="accordion-content" id="faq-${index}">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

/* --- ACESSIBILIDADE: FONTE DINÂMICA --- */
let baseFontSize = 1.0;
function fontResizer(action) {
    baseFontSize += (action === 'increase' ? 0.1 : -0.1);
    document.documentElement.style.setProperty('--font-size', `${baseFontSize}rem`);
}

/* --- MODO CONTRASTE --- */
document.getElementById('contrast-btn').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

/* --- LÓGICA ACORDEÃO --- */
function toggleAccordion(idx) {
    const contents = document.querySelectorAll('.accordion-content');
    const triggers = document.querySelectorAll('.accordion-trigger');
    
    const isActive = contents[idx].classList.contains('active');
    
    // Fecha todos antes de abrir o selecionado
    contents.forEach(c => c.classList.remove('active'));
    triggers.forEach(t => t.setAttribute('aria-expanded', 'false'));

    if (!isActive) {
        contents[idx].classList.add('active');
        triggers[idx].setAttribute('aria-expanded', 'true');
    }
}

/* --- SCROLL REVEAL (INTERSECTION OBSERVER) --- */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

// Inicialização total
document.addEventListener('DOMContentLoaded', () => {
    init();
    // Observar cards após renderização
    document.querySelectorAll('.card, .reveal').forEach(el => revealObserver.observe(el));
});
