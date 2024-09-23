const { z } = require('zod');
// VALIDAÇÃO DOS DADOS
const schema = z.object({
    email: z.string().email("invalid email"), //garantir formato email
    password: z.string().min(8, "Password too short"),
});

const data = {
    email: "gabriela@aluno.ifsp.edu.br",
    password: "minhasenha"
}

try {
    schema.parse(data);
    console.log("Data is valid");
} catch (error) {
    console.log(error.errors);
}