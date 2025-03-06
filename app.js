// Criação do servidor onde a aplicação estará localizada.
const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('João Lucas dos Santos Pimentel fez isso funcionar!')
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})