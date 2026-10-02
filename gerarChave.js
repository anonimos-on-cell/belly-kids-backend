const crypto = require('crypto');

function gerarChaveSecreta(tamanho = 64) {
  return crypto.randomBytes(tamanho).toString('hex');
}

if (require.main === module) {
  const chave = gerarChaveSecreta();
  console.log('✅ Chave secreta gerada automaticamente:');
  console.log(chave);
  console.log('\nCopie e cole no seu .env:');
  console.log(`JWT_SECRET=${chave}`);
}

module.exports = { gerarChaveSecreta };