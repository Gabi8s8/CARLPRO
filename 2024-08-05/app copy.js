const express = require('express');

const app = express();

const users = [
    { id: 1, name: 'Alice', status: 'Disponível' },
    { id: 2, name: 'Bob', status: 'Ocupado' },
    { id: 3, name: 'Charlie', status: 'Ausente'},
]

app.get('/api/users', (req, res) => {
    console.log(req.query);

    const status = req.query.status;
    if (status) {
        return res.status(200).json(users.filter(user => user.status === status));
    }

    return res.status(200).json(users);
})

app.get('/api/users/:id', (req, res) => {
    console.log(req.params);

    const id = parseInt(req.params.id); // extrai o id da url
    console.log(id)

    if (isNaN(id)) { // NaN = not a number
        return res.status(400).json({ error: 'O "id" do usuário deve ser um número.' });
    } // verifica se o id informado era realmente um numero (int)

    const user = users.find(user => user.id === id);
    console.log(user);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.'});
    }

    return res.status(200).json(user);
});

// configurar o servidor para receber dados JSON
app.use(express.json());

// para testar: extensão "Thunder Client"
// POST localhost:3000/api/users
app.post('/api/users', (req, res) => {
    console.log(req.body);

    const { body } = req;
    const id = users[users.length - 1].id + 1;
    const newUser = { ...body, id };
    users.push(newUser);

    return res.sendStatus(200).json(newUser);
});

// DELET localhost:3000/api/users/:id
app.delete('/api/users/:id', (req, res) => {
    console.log(req.params)

    const id = parseInt(req.params.id)

    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.sendStatus(404);
    }

    users.splice(index, 1)

    return res.sendStatus(204);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});
