const express = require('express');

const app = express(); // iniciar o express

// localhost:3000/hello-string  
app.get('/hello-string', function(request, response){
    return response.send("Hello, String!") //send = texto
}); //rota get dá pra testar com navegador

// localhost:3000/hello-json
app.get('/hello-json', (req, res) => {
    const data = {
        message: "Hello, JSON!",
        nome: "Gabriela"
    }
    return res.status(201).json(data);
});

// GET localhost:3000/api/users
const users = [
    { id: 1, username: "gabi", status: "Disponível" },
    { id: 2, username: "joao", status: "Ocupado" },
]
users.push({ id: 3, username: "Carlos", status: "Na escola" })
const usuario = { id: 4, username: "Fulano", status: "No trabalho" }
users[users.length] = usuario

const PORT = process.env.PORT || 3000;

const onServerStart = function() {
    console.log(`Server is running on port ${PORT}`)
}; // ` permite misturar código com texto

app.listen(PORT, onServerStart);