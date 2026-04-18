const epochs = [
    { id: "01", ano: "400.000 a.C.", t: "FOGO", d: "A primeira faísca da inteligência. O fogo moldou o nosso corpo e permitiu-nos conquistar a escuridão.", img: "fogo.png" },
    { id: "02", ano: "1450", t: "PRENSA", d: "A rede social original. Gutenberg criou o sistema que permitiu à humanidade partilhar o pensamento em massa.", img: "prensa.png" },
    { id: "03", ano: "1879", t: "LUZ", d: "A industrialização da noite. Thomas Edison deu à espécie humana o poder de ignorar o sol.", img: "lampada.png" },
    { id: "04", ano: "1928", t: "CURA", d: "O domínio sobre o invisível. A penicilina transformou a morte certa numa simples memória do passado.", img: "penicilina.png" },
    { id: "05", ano: "1969", t: "ASTRO", d: "A fuga da gravidade. Quando pisámos na lua, o universo deixou de ser um mistério para se tornar um destino.", img: "apollo.png" },
    { id: "06", ano: "2026", t: "NEURAL", d: "A era da inteligência sintética. Onde o código e a consciência começam a tornar-se um só.", img: "ia.png" }
];

const engine = document.getElementById('chronos-engine');
const cursor = document.getElementById('cursor');

// Custom Mouse Logic
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function init() {
    epochs.forEach(item => {
        const div = document.createElement('section');
        div.className = 'epoch-block';
        div.innerHTML = `
            <div class="epoch-card">
                <div class="epoch-visual">
                    <img src="${item.img}" alt="${item.t}">
                </div>
                <div class="epoch-info">
                    <h3>${item.id} // ${item.ano}</h3>
                    <h2>${item.t}</h2>
                    <p>${item.d}</p>
                </div>
            </div>
        `;
        engine.appendChild(div);
    });

    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 1000);
    }, 2500);
}

// Reveal on Scroll
window.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.epoch-block');
    blocks.forEach(block => {
        const top = block.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.7) {
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
        }
    });
});

init();
