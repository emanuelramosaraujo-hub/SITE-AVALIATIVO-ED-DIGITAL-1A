@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Syncopate:wght@400;700&display=swap');

:root {
    --bg: #000;
    --accent: #00f2ff;
    --glass: rgba(255, 255, 255, 0.03);
    --border: rgba(255, 255, 255, 0.1);
}

* { box-sizing: border-box; }

body {
    background: var(--bg);
    color: #fff;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* Loader */
#loader {
    position: fixed; inset: 0; background: #000; z-index: 10000;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    transition: 1s ease-in-out;
}
.spinner {
    width: 50px; height: 50px; border: 3px solid var(--accent);
    border-top-color: transparent; border-radius: 50%;
    animation: spin 1s linear infinite; margin-bottom: 20px;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Hero Section */
.hero {
    height: 100vh; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
}
.bg-vignette {
    position: absolute; inset: 0;
    background: radial-gradient(circle, transparent 20%, #000 90%);
    z-index: 1;
}
.hero-content { z-index: 2; text-align: center; }
.pre-title { letter-spacing: 5px; color: var(--accent); font-size: 0.8rem; text-transform: uppercase; }
.main-title {
    font-family: 'Syncopate', sans-serif; font-size: clamp(3rem, 15vw, 10rem);
    margin: 20px 0; font-weight: 700; letter-spacing: -2px;
    background: linear-gradient(to bottom, #fff, #444);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

/* Timeline Layout */
.section-card {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    padding: 100px 5%; position: relative;
}

.card-inner {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    max-width: 1200px; width: 100%; align-items: center;
}

.img-box {
    position: relative; border-radius: 40px; overflow: hidden;
    border: 1px solid var(--border); transition: 0.8s cubic-bezier(0.2, 1, 0.3, 1);
}
.img-box img { 
    width: 100%; height: 500px; object-fit: contain; background: #080808; 
    transition: 1.2s;
}

.info-box { position: relative; }
.year-tag { font-family: 'Syncopate'; color: var(--accent); font-size: 2rem; margin-bottom: 10px; display: block; }
h2 { font-size: 3.5rem; margin: 10px 0; font-weight: 700; line-height: 1; }
p { font-size: 1.2rem; color: #aaa; line-height: 1.8; }

.features {
    display: flex; gap: 15px; margin-top: 30px;
}
.feat {
    padding: 8px 18px; background: var(--glass); border: 1px solid var(--border);
    border-radius: 12px; font-size: 0.8rem; color: var(--accent);
}

/* Scroll Progress */
#scroll-progress {
    position: fixed; top: 0; left: 0; width: 0%; height: 4px;
    background: var(--accent); z-index: 9999; box-shadow: 0 0 20px var(--accent);
}

/* Animations */
.reveal { opacity: 0; transform: translateY(80px); transition: 1s all ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) {
    .card-inner { grid-template-columns: 1fr; text-align: center; gap: 40px; }
    .img-box img { height: 300px; }
}
