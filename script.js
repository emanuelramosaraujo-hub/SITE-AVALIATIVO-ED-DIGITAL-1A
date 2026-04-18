const timelineData = [
    { 
        ano: "≈ 400.000 a.C.", 
        titulo: "Domínio do Fogo", 
        desc: "A base da evolução humana. O fogo permitiu o cozimento de alimentos e a proteção contra predadores, acelerando o desenvolvimento do cérebro.", 
        img: "fogo.png" 
    },
    { 
        ano: "1450", 
        titulo: "Prensa de Gutenberg", 
        desc: "A revolução do conhecimento. A imprensa permitiu a produção em massa de livros, democratizando a informação e a ciência.", 
        img: "prensa.png" 
    },
    { 
        ano: "1879", 
        titulo: "Lâmpada Elétrica", 
        desc: "A conquista da luz. Thomas Edison mudou o ritmo do mundo, permitindo a produtividade noturna e a segurança urbana.", 
        img: "lampada.png" 
    },
    { 
        ano: "1928", 
        titulo: "Penicilina", 
        desc: "O milagre da medicina. A descoberta dos antibióticos dobrou a expectativa de vida humana e erradicou doenças fatais.", 
        img: "penicilina.png" 
    },
    { 
        ano: "1969", 
        titulo: "Apolo 11", 
        desc: "O salto gigante da humanidade. O momento em que o Homem provou que o seu destino não está limitado apenas à Terra.", 
        img: "apollo.png" 
    },
    { 
        ano: "2023", 
        titulo: "Era da IA", 
        desc: "A nova fronteira digital. A inteligência artificial redefine a criatividade, a tecnologia e a forma como interagimos com o mundo.", 
        img: "ia.png" 
    }
];

const main = document.getElementById('timeline-v2');

function buildTimeline() {
    timelineData.forEach((item, index) => {
        const section = document.createElement('section');
        section.className = 'section-card';
        section.innerHTML = `
            <div class="card-inner">
                <div class="img-box reveal"><img src="${item.img}" alt="${item.titulo}"></div>
                <div class="info-box reveal">
                    <span class="year-tag">${item.ano}</span>
                    <h2>${item.titulo}</h2>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        main.appendChild(section);
    });

    // Remove a tela de carregamento após 2 segundos
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 1000);
        }
    }, 2000);
}

// Lógica de Scroll e Revelação
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) el.classList.add('active');
    });
    
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById('scroll-progress').style.width = (winScroll / height) * 100 + "%";
});

buildTimeline();
