## ✅ Requisitos Funcionais

| Código | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| RF01   | O sistema deve permitir que o usuário se cadastre com email e senha.     |
| RF02   | O sistema deve validar os dados no cadastro e exibir mensagem de erro em caso de falha (ex: usuário já existe). |
| RF03   | O sistema deve permitir que o usuário faça login com email e senha.      |
| RF04   | O sistema deve autenticar o usuário por meio de um token JWT recebido da API. |
| RF05   | O token deve ser armazenado localmente no navegador (localStorage).      |
| RF06   | O sistema deve redirecionar o usuário autenticado para a página `/dashboard`. |
| RF07   | O sistema deve buscar e exibir o email do usuário logado ao acessar o `/dashboard`. |
| RF08   | O sistema deve redirecionar o usuário para o login caso o token seja inválido ou ausente. |
| RF09   | O sistema deve permitir logout removendo o token do localStorage e redirecionando para a tela de login. |
| RF10   | O sistema deve exibir mensagens de erro amigáveis em caso de falha na autenticação. |

---

## 🚫 Requisitos Não Funcionais

| Código | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| RNF01  | A aplicação deve ser responsiva e funcionar em diferentes tamanhos de tela. |
| RNF02  | A comunicação com a API deve ocorrer via HTTPS.                          |
| RNF03  | As senhas não devem ser armazenadas no front-end.                        |
| RNF04  | O tempo de resposta para login e cadastro deve ser inferior a 2 segundos.|
| RNF05  | A aplicação deve ser compatível com os navegadores modernos (Chrome, Firefox, Edge). |
