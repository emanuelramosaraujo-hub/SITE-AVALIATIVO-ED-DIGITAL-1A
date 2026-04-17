const dados = [
    { a: "-3500", t: "A Roda", d: "Revolucionou tudo!" },
    { a: "1928", t: "Penicilina", d: "Salvou bilhões de pessoas." },
    { a: "1969", t: "Lua", d: "O grande salto da humanidade." }
];

const container = document.getElementById('timeline');
const som = document.getElementById('click-sound');

dados.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<span>${item.a}</span><h2>${item.t}</h2><p>${item.d}</p>`;
    
    div.onclick = () => {
        som.currentTime = 0;
        som.play(); // ISSO FAZ O SOM FUNCIONAR
    };
    
    container.appendChild(div);
});
