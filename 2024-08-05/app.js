const express = require('express');

const app = express();
app.use(express.json()); //configura servidor para receber json nas requisições

const times = ["palmeiras", "corinthians", "flamengo"]
const time = ""
app.post('/api/new-game', (req, res) => {
    const getRandomTime = () => {
        const randomIndex = Math.floor(Math.random() * times.length);
        return times[randomIndex];
    }

    time = getRandomTime()

    res.json({ time });
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});
