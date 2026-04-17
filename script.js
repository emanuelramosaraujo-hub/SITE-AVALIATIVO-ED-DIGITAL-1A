const descobertas = [
    { 
        ano: "≈ 400.000 a.C.", 
        t: "Domínio do Fogo", 
        d: "A descoberta que permitiu a sobrevivência, o cozimento de alimentos e a proteção contra predadores.",
        img: "fogo.png" // Coloque o nome que você salvou no GitHub
    },
    { 
        ano: "1450", 
        t: "Prensa de Gutenberg", 
        d: "Revolucionou a comunicação, permitindo a produção em massa de livros e o acesso ao conhecimento.",
        img: "prensa.png"
    },
    { 
        ano: "1879", 
        t: "Lâmpada Elétrica", 
        d: "Thomas Edison mudou o ritmo da humanidade, iluminando cidades e estendendo a produtividade humana.",
        img: "lampada.png"
    },
    { 
        ano: "1928", 
        t: "Penicilina", 
        d: "Alexander Fleming descobriu o primeiro antibiótico, salvando centenas de milhões de vidas.",
        img: "penicilina.png"
    },
    { 
        ano: "1969", 
        t: "Apolo 11", 
        d: "O primeiro passo humano na Lua. Um marco histórico da tecnologia e exploração espacial.",
        img: "apollo.png"
    },
    { 
        ano: "2023", 
        t: "Era da IA Generativa", 
        d: "A inteligência artificial transforma a criação humana, a medicina e a tecnologia global.",
        img: "ia.png"
    }
];

const container = document.getElementById('timeline');
const clickAudio = document.getElementById('click-sound');

function renderTimeline() {
    container.innerHTML = ''; // Limpa antes de renderizar
    descobertas.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <small>${item.ano}</small>
            <h2>${item.t}</h2>
            <img src="${item.img}" alt="${item.t}" style="width:100%; border-radius:12px; margin: 15px 0; border: 1px solid rgba(255,255,255,0.1);">
            <p>${item.d}</p>
        `;

        card.addEventListener('click', () => {
            if(clickAudio) {
                clickAudio.currentTime = 0;
                clickAudio.play();
            }
            card.style.borderColor = "#38bdf8";
            setTimeout(() => card.style.borderColor = "rgba(255,255,255,0.1)", 300);
        });

        container.appendChild(card);
    });
}

// Barra de progresso
window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("progress-bar");
    if(bar) bar.style.width = scrolled + "%";
};

renderTimeline();
