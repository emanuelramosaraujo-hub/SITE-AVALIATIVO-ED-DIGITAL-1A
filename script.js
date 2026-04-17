const descobertas = [
    { 
        ano: "≈ 400.000 a.C.", 
        t: "Domínio do Fogo", 
        cat: "SOBREVIVÊNCIA",
        topicos: ["Cozimento de alimentos", "Proteção contra predadores", "Luz e calor"],
        img: "fogo.png" 
    },
    { 
        ano: "1450", 
        t: "Prensa de Gutenberg", 
        cat: "COMUNICAÇÃO",
        topicos: ["Produção de livros", "Alfabetização em massa", "Revolução Científica"],
        img: "prensa.png"
    },
    { 
        ano: "1879", 
        t: "Lâmpada Elétrica", 
        cat: "ENERGIA",
        topicos: ["Iluminação urbana", "Expansão da produtividade", "Fim das lâmpadas a óleo"],
        img: "lampada.png"
    },
    { 
        ano: "1928", 
        t: "Penicilina", 
        cat: "SAÚDE",
        topicos: ["Primeiro antibiótico", "Cura de infecções fatais", "Expectativa de vida maior"],
        img: "penicilina.png"
    },
    { 
        ano: "1969", 
        t: "Apolo 11", 
        cat: "ESPAÇO",
        topicos: ["Pouso na Lua", "Corrida Espacial", "Avanço da computação"],
        img: "apollo.png"
    },
    { 
        ano: "2023", 
        t: "Era da IA Generativa", 
        cat: "TECNOLOGIA",
        topicos: ["Inteligência Artificial", "Automação Criativa", "Processamento de Dados"],
        img: "ia.png"
    }
];

const container = document.getElementById('timeline');
const clickAudio = document.getElementById('click-sound');

function renderTimeline() {
    container.innerHTML = '';
    descobertas.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';

        const listaTopicos = item.topicos.map(topico => `<li>• ${topico}</li>`).join('');

        card.innerHTML = `
            <div class="category-tag">${item.cat}</div>
            <small>${item.ano}</small>
            <h2>${item.t}</h2>
            <img src="${item.img}" alt="${item.t}">
            <ul class="topics-list">
                ${listaTopicos}
            </ul>
        `;

        card.addEventListener('click', () => {
            if(clickAudio) { clickAudio.currentTime = 0; clickAudio.play(); }
            card.style.transform = "scale(0.98)";
            setTimeout(() => card.style.transform = "translateY(-10px)", 100);
        });

        container.appendChild(card);
    });
}
renderTimeline();
