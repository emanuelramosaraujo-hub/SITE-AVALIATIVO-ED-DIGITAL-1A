body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #0f172a;
    color: white;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    padding: 60px 20px;
    text-align: center;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    width: 100%;
}

.container {
    max-width: 800px;
    margin: 20px;
    border-left: 4px solid #38bdf8;
    padding-left: 20px;
}

.card {
    background: #1e293b;
    margin: 20px 0;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: transform 0.3s, background 0.3s;
    cursor: pointer;
    border: 1px solid #334155;
}

.card:hover {
    transform: scale(1.05);
    background: #334155;
    border-color: #38bdf8;
}

h2 { color: #38bdf8; margin-top: 0; }
