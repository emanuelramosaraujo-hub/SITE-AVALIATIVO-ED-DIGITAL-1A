const descobertas = [
    { 
        ano: "≈ 400.000 a.C.", t: "O Despertar do Fogo", cat: "Evolução Humana",
        d: "Mais que calor, o fogo trouxe o cozimento, a luz e a união das tribos ao redor das chamas.",
        img: "fogo.png" 
    },
    { 
        ano: "1450", t: "A Prensa de Gutenberg", cat: "Conhecimento",
        d: "A primeira grande revolução da informação. O mundo nunca mais ficaria em silêncio.",
        img: "prensa.png"
    },
    { 
        ano: "1879", t: "A Era da Luz", cat: "Energia",
        d: "Thomas Edison não inventou apenas a lâmpada, ele inventou o estilo de vida moderno.",
        img: "lampada.png"
    },
    { 
        ano: "1928", t: "O Milagre da Penicilina", cat: "Medicina",
        d: "Alexander Fleming descobriu a arma definitiva contra as doenças, mudando nossa história.",
        img: "penicilina.png"
    },
    { 
        ano: "1969", t: "A Conquista da Lua", cat: "Exploração",
        d: "O momento em que a Terra ficou pequena e o universo se tornou o nosso novo quintal.",
        img: "apollo.png"
    },
    { 
        ano: "2023", t: "Singularidade da IA", cat: "Futuro",
        d: "A inteligência artificial generativa redefine o que significa ser criativo e produtivo.",
        img: "ia.png"
    }
];

const container = document.getElementById('timeline');
const clickSound = document.getElementById('click-sound');

function render() {
    descobertas.forEach((item) => {
        const card = document.createElement('section');
        card.className = 'card';
        card.innerHTML = `
            <div class="img-container">
                <img src="${item.img}" alt="${item.t}">
            </div>
            <div class="card-content">
                <span class="category">${item.cat} • ${item.ano}</span>
                <h2>${item.t}</h2>
                <p>${item.d}</p>
            </div>
        `;
        
        card.addEventListener('mouseenter', () => {
            clickSound.currentTime = 0;
            clickSound.volume = 0.2;
            clickSound.play();
        });

        container.appendChild(card);
    });

    // Observer para animar os cards ao rolar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
}

// Lógica da Barra de Progresso
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

render();
