const bcrypt = require('bcrypt');
// CRIPTOGRAFIA - REVERSO
async function comparePasswords() {
    const data = "minhasenha";
    const encrypted = '$2b$10$2t08ZxsuOd80oU5Le6ZhbON0S/LM9IXEom36V8dTyuqKSXkKN47ce';

    const result = await bcrypt.compare(data, encrypted);

    console.log(result);
}

comparePasswords();