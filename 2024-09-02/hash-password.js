const bcrypt = require('bcrypt');
// CRIPTOGRAFIA
async function hashPassword() {
    const saltOrRounds = 10; //padrão
    const data = "minhasenha";

    const hash = await bcrypt.hash(data, saltOrRounds);

    console.log(hash);
}

hashPassword();