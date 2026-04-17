const dados = [
    { ano: "-3500", titulo: "A Roda", cat: "tecnologia", desc: "Revolucionou o transporte e a engenharia antiga." },
    { ano: "1609", titulo: "Telescópio", cat: "ciencia", desc: "Galileu Galilei observa o espaço como nunca antes." },
    { ano: "1928", titulo: "Penicilina", cat: "ciencia", desc: "A descoberta que salvou milhões de vidas." },
    { ano: "1969", titulo: "Homem na Lua", cat: "tecnologia", desc: "A missão Apollo 11 chega ao solo lunar." },
    { ano: "1989", titulo: "Internet (WWW)", cat: "tecnologia", desc: "A rede que conectou o mundo inteiro." }
];

const renderContainer = document.getElementById('timeline-render');

function render(filtro = 'todos', busca = '') {
    renderContainer.innerHTML = '';
    const filtrados = dados.filter(d => 
        (filtro === 'todos' || d.cat === filtro) && 
        d.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    filtrados.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-render';
        div.innerHTML = `<article class="card"><h3>${item.ano}: ${item.titulo}</h3><p>${item.desc}</p></article>`;
        renderContainer.appendChild(div);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show') });
    }, { threshold: 0.1 });
    document.querySelectorAll('.card').forEach(c => observer.observe(c));
}

document.getElementById('search-input').addEventListener('input', (e) => render('todos', e.target.value));
window.onscroll = () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const bar = document.getElementById("progress-bar");
    if(bar) bar.style.width = scrolled + "%";
};

document.getElementById('toggle-contrast').onclick = () => document.body.classList.toggle('high-contrast');
render();
