const dados = [
    { ano: "-3500", titulo: "A Roda", desc: "Revolucionou o transporte humano." },
    { ano: "1609", titulo: "Telescópio", desc: "Galileu observa os astros." },
    { ano: "1928", titulo: "Penicilina", desc: "O primeiro antibiótico do mundo." },
    { ano: "1969", titulo: "Homem na Lua", desc: "A conquista do espaço." }
];
const render = document.getElementById('timeline-render');
dados.forEach(d => {
    render.innerHTML += `<article class="card"><h3>${d.ano} - ${d.titulo}</h3><p>${d.desc}</p></article>`;
});
window.onscroll = () => {
    const s = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("progress-bar").style.width = s + "%";
};
document.getElementById('toggle-contrast').onclick = () => document.body.classList.toggle('high-contrast');
