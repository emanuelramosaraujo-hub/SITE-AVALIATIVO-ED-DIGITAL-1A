@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&family=Bebas+Neue&family=Outfit:wght@100;400;900&display=swap');

:root {
    --bg: #000;
    --primary: #fff;
    --accent: #00e5ff;
    --glass: rgba(255, 255, 255, 0.02);
    --border: rgba(255, 255, 255, 0.08);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--primary); font-family: 'Outfit', sans-serif; overflow-x: hidden; }

/* Efeito de Cursor de Luz */
#cursor-glow {
    position: fixed; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 70%);
    pointer-events: none; z-index: 1; transform: translate(-50%, -50%);
}

.grain { position: fixed; inset: 0; z-index: 999; background: url('https://grainy-gradients.vercel.app/noise.svg'); opacity: 0.05; pointer-events: none; }

/* Loader Terminal */
#loader {
    position: fixed; inset: 0; background: #000; z-index: 10000;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
}
.terminal-text { font-family: monospace; font-size: 0.8rem; letter-spacing: 3px; margin-bottom: 20px; color: var(--accent); }
.load-bar { width: 200px; height: 2px; background: #111; position: relative; }
.load-bar .fill { position: absolute; height: 100%; background: var(--accent); width: 0; animation: loading 2.5s forwards; }
@keyframes loading { to { width: 100%; } }

/* Hero */
.mega-hero { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.hero-title { font-family: 'Bebas Neue', sans-serif; font-size: 20vw; line-height: 0.8; letter-spacing: -5px; }
.hero-sub { margin-top: 40px; font-size: 0.9rem; opacity: 0.6; }

/* HUD Nav */
.hud-nav { position: fixed; right: 40px; top: 50%; transform: translateY(-50%); z-index: 100; display: flex; flex-direction: column; gap: 20px; }
.nav-item { font-size: 0.7rem; font-weight: 900; opacity: 0.2; cursor: pointer; transition: 0.3s; }
.nav-item:hover { opacity: 1; color: var(--accent); }

/* Engine Card System */
.era-section { min-height: 140vh; display: flex; align-items: center; justify-content: center; padding: 100px 8%; position: relative; }
.era-card {
    display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: flex-start;
    background: var(--glass); border: 1px solid var(--border); border-radius: 40px;
    padding: 80px; backdrop-filter: blur(20px); width: 100%;
}

.era-visual { position: sticky; top: 100px; border-radius: 20px; overflow: hidden; height: 500px; }
.era-visual img { width: 100%; height: 100%; object-fit: contain; background: #050505; transition: 1s transform; }

.era-content { padding-top: 20px; }
.era-id { font-family: monospace; color: var(--accent); font-size: 1rem; margin-bottom: 20px; display: block; }
.era-title { font-size: 5rem; font-weight: 900; margin-bottom: 30px; line-height: 0.9; }
.era-text { font-size: 1.3rem; color: #888; line-height: 1.8; margin-bottom: 40px; }

.era-tags { display: flex; gap: 10px; flex-wrap: wrap; }
.tag { padding: 6px 15px; border: 1px solid var(--border); border-radius: 50px; font-size: 0.7rem; color: #555; text-transform: uppercase; }

/* Efeito Hover Ultra */
.era-section:hover .era-visual img { transform: scale(1.05) rotate(1deg); }
.era-section:hover .tag { border-color: var(--accent); color: var(--accent); }

@media (max-width: 1000px) {
    .era-card { grid-template-columns: 1fr; padding: 40px; gap: 40px; }
    .era-visual { position: relative; top: 0; height: 350px; }
}
