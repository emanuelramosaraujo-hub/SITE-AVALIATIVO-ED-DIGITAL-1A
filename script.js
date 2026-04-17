const descobertas = [
    { ano: "≈ 400.000 a.C.", t: "Domínio do Fogo", d: "A primeira grande tecnologia da humanidade, permitindo luz e calor." },
    { ano: "1450", t: "Prensa de Gutenberg", d: "Início da democratização do conhecimento através dos livros." },
    { ano: "1928", t: "Penicilina", d: "Alexander Fleming descobre o primeiro antibiótico real." },
    { ano: "1969", t: "Apolo 11", d: "Neil Armstrong e Buzz Aldrin pisam na Lua pela primeira vez." },
    { ano: "2023", t: "Era da IA", d: "A inteligência artificial torna-se parte do cotidiano global." }
];

const container = document.getElementById('timeline');
const som = document.getElementById('click-sound');

descobertas.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.2}s`; // Efeito de cascata
    
    card.innerHTML = `
        <span style="font-weight:bold; opacity:0.7">${item.ano}</span>
        <h2>${item.t}</h2>
        <p>${item.d}</p>
    `;
    
    card.onclick = () => {
        som.currentTime = 0;
        som.play();
        // Feedback visual de clique
        card.style.background = "rgba(56, 189, 248, 0.3)";
        setTimeout(() => card.style.background = "rgba(255, 255, 255, 0.05)", 200);
    };
    
    container.appendChild(card);
});
