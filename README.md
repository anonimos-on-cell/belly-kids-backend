###

===1° - Criação da pasta Mãe===
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto> mkdir belly-kids-backend

    Diretório: C:\Users\Aluno.CEPFSII047699\Desktop\projeto

Mode LastWriteTime Length Name

---

d----- 01/10/2026 20:03 belly-kids-backend

###

===2° -Vou te entregar todos os arquivos prontos em formato de estrutura ZIP — você só precisa copiar, criar a pasta e montar exatamente como abaixo! 📦✨
📦 belly-kids-backend.zip — Estrutura Completa
plaintext
📄 Arquivo 1 — package.json
json
📄 Arquivo 2 — .env
env
📄 Arquivo 3 — src/server.js
javascript
📄 Arquivo 4 — src/config/database.js
javascript
📄 Arquivo 5 — src/config/gerarChave.js
javascript
📄 Arquivo 6 — src/scripts/inicializarAdmin.js
javascript
📄 Arquivo 7 — src/middlewares/authMiddleware.js
javascript
📄 Arquivos de Modelos
src/models/Categoria.js
javascript
src/models/Produto.js
javascript
src/models/Usuario.js
javascript
src/models/Pedido.js
javascript
src/models/ItemPedido.js
javascript
📄 Arquivos de Rotas
src/routes/produtos.js
javascript
src/routes/categorias.js
javascript
src/routes/auth.js
javascript
src/routes/pedidos.js
javascript
🚀 Instruções para Usar
Copie todos os blocos acima → crie a pasta belly-kids-backend e monte os arquivos na estrutura indicada
No terminal:
bash
cd belly-kids-backend
npm install
npm run gerar-chave

# Copie a chave gerada e cole no .env em JWT_SECRET=

# Edite .env com seu usuário/senha do PostgreSQL

# Crie o banco no PostgreSQL: CREATE DATABASE belly_kids;

npm run init-admin
npm run dev
✅ Tudo pronto! Usuária Mariane com senha Mariane1610 já configurada! 👶✨
Quer que eu te prepare um guia rápido de testes no Postman pra você testar todas as rotas? 😊
Rápido | Pro

###

===

PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend> code .env

> > PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend> mkdir src

    Diretório: C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend

Mode LastWriteTime Length Name

---

d----- 01/10/2026 20:24 src

PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend> cd .\src\
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> code server.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> mkdir config/models/routes/middlewares/scripts/

    Diretório:
    C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\config\models\routes\middlewares

Mode LastWriteTime Length Name

---

d----- 01/10/2026 20:29 scripts

PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> cd .\config\
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\config> code database.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\config> code gerarChave.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\config> cd ..
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> cd .\scripts\  
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\scripts> code inicializarAdmin.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\scripts> cd ..
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> cd .\middlewares\
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\middlewares> code authMiddleware.js

PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\middlewares> cd ..  
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> cd .\models\  
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\models> code Categoria.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\models> code Produto.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\models> code Usuario.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\models> code Pedido.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\models> code ItemPedido.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\models> cd ..
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src> cd .\routes\  
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\routes> code produtos.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\routes> code categorias.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\routes> code auth.js
PS C:\Users\Aluno.CEPFSII047699\Desktop\projeto\belly-kids-backend\src\routes> code pedidos.js
