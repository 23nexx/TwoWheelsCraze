const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 3000;

// Middleware pra ler JSON e dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Teste simples
app.get('/', (req, res) => {
    res.send('Servidor Node.js funcionando! 👑');
});

// Cadastro de usuários (simples, sem banco ainda)
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Preenche tudo aí, meu rei!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Novo usuário: ${email}`);
    console.log(`Senha criptografada: ${hashedPassword}`);

    res.send('Cadastro feito com sucesso!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});