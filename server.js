const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE HTML>
    <html data-filename="pages/SovereignMigrationCommand" data-linenumber="85" data-visual-selector-id="pages/SovereignMigrationCommand85">
    <head data-filename="pages/SovereignMigrationCommand" data-linenumber="86" data-visual-selector-id="pages/SovereignMigrationCommand86">
        <title data-filename="pages/SovereignMigrationCommand" data-linenumber="87" data-visual-selector-id="pages/SovereignMigrationCommand87">SpeakAlly - Sovereign Empire</title>
        <style data-filename="pages/SovereignMigrationCommand" data-linenumber="88" data-visual-selector-id="pages/SovereignMigrationCommand88">
            body { 
                background: #0a0a14; 
                color: #00ff88; 
                font-family: monospace; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
                text-align: center; 
            }
            .container { 
                border: 1px solid #00ff88; 
                padding: 2rem 4rem; 
                box-shadow: 0 0 20px #00ff88; 
                background: rgba(0, 255, 136, 0.05); 
            }
            h1 { 
                font-size: 3rem; 
                margin-bottom: 1rem; 
                text-shadow: 0 0 5px #00ff88; 
            }
            p { color: #88ffcc; }
            .blink { animation: blink 1.2s infinite; }
            @keyframes blink { 50% { opacity: 0.2; } }
        </style>
    </head>
    <body data-filename="pages/SovereignMigrationCommand" data-linenumber="116" data-visual-selector-id="pages/SovereignMigrationCommand116">
        <div data-filename="pages/SovereignMigrationCommand" data-linenumber="117" data-visual-selector-id="pages/SovereignMigrationCommand117" class="container">
            <h1 data-filename="pages/SovereignMigrationCommand" data-linenumber="118" data-visual-selector-id="pages/SovereignMigrationCommand118">🏛️ SPEAKALLY 🏛️</h1>
            <p data-filename="pages/SovereignMigrationCommand" data-linenumber="119" data-visual-selector-id="pages/SovereignMigrationCommand119">STATUS: <span data-filename="pages/SovereignMigrationCommand" data-linenumber="119" data-visual-selector-id="pages/SovereignMigrationCommand119" class="blink">SOVEREIGN_OPERATIONAL</span></p>
            <p data-filename="pages/SovereignMigrationCommand" data-linenumber="120" data-visual-selector-id="pages/SovereignMigrationCommand120">SERVER: apexempire.org</p>
            <p data-filename="pages/SovereignMigrationCommand" data-linenumber="121" data-visual-selector-id="pages/SovereignMigrationCommand121">OPERATOR: chidoweywey@gmail.com</p>
        </div>
    </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'SOVEREIGN_OPERATIONAL',
    app: 'SpeakAlly',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`SpeakAlly server running on port ${PORT}`);
});
