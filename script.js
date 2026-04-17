const descobertas = [
    { 
        ano: "-400k", 
        titulo: "O Domínio do Fogo", 
        desc: "A transição fundamental da nossa espécie. O fogo permitiu o cozimento de proteínas, o que acelerou o desenvolvimento do cérebro humano, além de criar o primeiro ambiente social ao redor das fogueiras.",
        detalhes: ["Expansão Cerebral", "Segurança Noturna", "Socialização"],
        img: "fogo.png" 
    },
    { 
        ano: "1450", 
        titulo: "A Prensa de Gutenberg", 
        desc: "Johannes Gutenberg democratizou o acesso à Bíblia e aos clássicos, quebrando o monopólio da informação. Sem esta invenção, movimentos como a Ciência Moderna não teriam ocorrido tão rápido.",
        detalhes: ["Fim do Monopólio", "Alfabetização", "Produção em Massa"],
        img: "prensa.png"
    },
    { 
        ano: "1879", 
        titulo: "A Lâmpada Elétrica", 
        desc: "Thomas Edison transformou a noite em dia. Esta invenção não apenas iluminou casas, mas permitiu que a indústria e a economia operassem 24 horas por dia, mudando o ritmo biológico da humanidade.",
        detalhes: ["Economia 24h", "Segurança Urbana", "Revolução Industrial"],
        img: "lampada.png"
    },
    { 
        ano: "1928", 
        titulo: "A Revolução da Penicilina", 
        desc: "Antes de Alexander Fleming, uma simples ferida podia ser fatal. A penicilina abriu a era dos antibióticos, dobrando a expectativa de vida média do ser humano em apenas um século.",
        detalhes: ["Aumento da Vida", "Cirurgias Seguras", "Combate a Pragas"],
        img: "penicilina.png"
    },
    { 
        ano: "1969", 
        titulo: "Apolo 11: A Lua", 
        desc: "Pela primeira vez em bilhões de anos, a vida terrestre deixou o seu planeta de origem. Esta missão provou que a tecnologia humana não tem limites e uniu o mundo inteiro através das telas de TV.",
        detalhes: ["Exploração Espacial", "Avanço de TI", "União Global"],
        img: "apollo.png"
    },
    { 
        ano: "2023", 
        titulo: "IA Generativa", 
        desc: "A inteligência artificial deixou de ser apenas processamento de dados para se tornar criativa. Estamos agora na fronteira onde máquinas podem escrever, desenhar e programar connosco.",
        detalhes: ["Automação Criativa", "Novo Paradigma", "Eficiência Global"],
        img: "ia.png"
    }
];

const container = document.getElementById('timeline');

function render() {
    descobertas.forEach((item) => {
        // Criar Divisória
        const divider = document.createElement('div');
        divider.className = 'timeline-divider';
        divider.innerHTML = `<span>Março na História</span>`;
        container.appendChild(divider);

        // Criar Card
        const card = document.createElement('div');
        card.className = 'card';
        
        const detalhesHtml = item.detalhes.map(d => `<div class="detail-item">${d}</div>`).join('');

        card.innerHTML = `
            <div class="card-image-box">
                <img src="${item.img}" alt="${item.titulo}">
            </div>
            <div class="card-info">
                <span class="year-badge">${item.ano}</span>
                <h2>${item.titulo}</h2>
                <p class="card-description">${item.desc}</p>
                <div class="details-grid">
                    ${detalhesHtml}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});

render();
