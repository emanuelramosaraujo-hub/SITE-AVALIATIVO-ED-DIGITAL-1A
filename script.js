const descobertas = [
    { 
        ano: "≈ 400.000 a.C.", 
        t: "Domínio do Fogo", 
        cat: "Sobrevivência",
        topicos: ["Cozimento", "Calor", "Proteção"],
        img: "fogo.png" 
    },
    { 
        ano: "1450", 
        t: "Prensa de Gutenberg", 
        cat: "Comunicação",
        topicos: ["Livros", "Ciência", "Educação"],
        img: "prensa.png"
    },
    { 
        ano: "1879", 
        t: "Lâmpada Elétrica", 
        cat: "Energia",
        topicos: ["Indústria", "Cidades", "Segurança"],
        img: "lampada.png"
    },
    { 
        ano: "1928", 
        t: "Penicilina", 
        cat: "Saúde",
        topicos: ["Medicina", "Antibióticos", "Vida"],
        img: "penicilina.png"
    },
    { 
        ano: "1969", 
        t: "Apolo 11", 
        cat: "Espaço",
        topicos: ["Lua", "Astronomia", "Exploração"],
        img: "apollo.png"
    },
    { 
        ano: "2023", 
        t: "Era da IA Generativa", 
        cat: "Tecnologia",
        topicos: ["Criação", "Dados", "Futuro"],
        img: "ia.png"
    }
];

const container = document.getElementById('timeline');
const clickAudio = document.getElementById('click-sound');

function render() {
    container.innerHTML = '';
    descobertas.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';

        const lista = item.topicos.map(tp => `<li>${tp}</li>`).join('');

        card.innerHTML = `
            <div class="category-tag">${item.cat}</div>
            <h2 style="margin: 10px 0 5px; font-size: 1.8rem;">${item.t}</h2>
            <small style="opacity: 0.6; letter-spacing: 1px;">${item.ano}</small>
            <img src="${item.img}" alt="${item.t}">
            <ul class="topics-list">${lista}</ul>
        `;

        card.onclick = () => {
            clickAudio.currentTime = 0;
            clickAudio.play();
        };

        container.appendChild(card);
    });

    // Efeito de aparecer ao scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(c => observer.observe(c));
}

render();
