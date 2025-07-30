# Teste de Usabilidade — Sistema de Login e Cadastro

## Objetivo
Avaliar se os usuários conseguem:

- **Cadastrar‐se** e **fazer login** com facilidade (RF01–RF03)  
- Entender e interagir corretamente com **mensagens de erro** (RF02, RF10)  
- Navegar pelo sistema de forma fluida e segura (RF04–RF09)  
- Usar a aplicação em diferentes dispositivos e navegadores (RNF01, RNF05)  

---

## Perfil dos Participantes
- 3 – 5 usuários comuns, não desenvolvedores  
- Utilizam serviços online com frequência (e‑mail, redes sociais)  
- Nenhum conhecimento prévio da aplicação  

---

## Tarefas

### Tarefa 1 – Cadastro  
**Requisitos avaliados:** RF01, RF02, RNF04  

> “Acesse o sistema e tente se cadastrar com seu e‑mail e uma senha qualquer.”

**O que observar**  
- Facilidade para encontrar o formulário de cadastro  
- Mensagens de erro claras para e‑mail inválido ou senha fraca  
- Tempo de resposta \< 2 s  

---

### Tarefa 2 – Login com dados válidos  
**Requisitos avaliados:** RF03, RF04, RF06, RF07, RNF04  

> “Agora que você está cadastrado, tente fazer login.”

**O que observar**  
- Login concluído rapidamente  
- Redirecionamento automático para `/dashboard`  
- E‑mail do usuário exibido na dashboard  
- (Verificação técnica) token JWT salvo no *localStorage*  

---

### Tarefa 3 – Login com dados inválidos  
**Requisitos avaliados:** RF02, RF10  

> “Tente fazer login com um e‑mail incorreto ou senha errada.”

**O que observar**  
- Mensagem de erro amigável (“Senha incorreta”, “Usuário não encontrado”)  
- Nenhum detalhe técnico exposto  

---

### Tarefa 4 – Logout  
**Requisito avaliado:** RF09  

> “Clique em ‘Sair’ ou ‘Logout’.”

**O que observar**  
- Token removido do *localStorage*  
- Redirecionamento para a tela de login  

---

### Tarefa 5 – Acesso direto à dashboard sem login  
**Requisito avaliado:** RF08  

> “Abra uma nova aba e tente acessar diretamente `/dashboard`.”

**O que observar**  
- Usuário não autenticado é redirecionado para a tela de login  
- Token inválido ou ausente tratado corretamente  

---

### Tarefa 6 – Dispositivos e navegadores distintos  
**Requisitos avaliados:** RNF01, RNF05  

> “Abra o sistema no celular e em outro navegador (Firefox ou Edge). Faça login.”

**O que observar**  
- Layout responsivo sem quebras visuais  
- Funcionalidade idêntica em Chrome, Firefox e Edge  

---

## Validações Técnicas (em paralelo)

| Verificação | Requisitos | Como checar |
|-------------|------------|-------------|
| Token JWT salvo em *localStorage* | RF05 | Ferramentas de desenvolvedor → Application |
| Comunicação via HTTPS | RNF02 | Cadeado na barra de endereço |
| Senha não armazenada no front‑end | RNF03 | Inspecionar código / rede |
| Tempo de resposta \< 2 s | RNF04 | Aba **Network** do navegador |

---

Relatório de Resultados — Teste de Usabilidade: Sistema de Login e Cadastro
Participantes

    Usuário 1 – Carla, 32 anos, publicitária, usa e‑mail e redes sociais diariamente.

    Usuário 2 – João, 27 anos, estudante de engenharia, familiarizado com tecnologia, mas não desenvolvedor.

    Usuário 3 – Marina, 45 anos, professora, utiliza sistemas online com frequência.


R# 📋 Relatório de Resultados – Teste de Usabilidade (Login e Cadastro)

| Participante | Tarefa                       | Concluiu? | Comentário do Usuário                          | Observação do Avaliador                                     |
|--------------|------------------------------|-----------|------------------------------------------------|--------------------------------------------------------------|
| Usuário 1    | Cadastro                     | ✅        | “A senha precisa de mais caracteres.”          | Mensagem de erro clara para senha fraca                      |
| Usuário 1    | Login (válido)               | ✅        | “Foi rápido.”                                  | Token JWT gerado e salvo corretamente no localStorage        |
| Usuário 1    | Login (inválido)             | ✅        | “Escrevi o e-mail errado.”                     | Mensagem amigável exibida: “Usuário não encontrado”          |
| Usuário 1    | Logout                       | ✅        | “Saiu direto.”                                 | Token removido, redirecionado para tela de login            |
| Usuário 1    | Acesso direto à /dashboard   | ✅        | “Me jogou para a tela de login.”               | Redirecionamento correto sem token válido                    |
| Usuário 1    | Navegadores / dispositivos   | ✅        | “No celular ficou bem ajustado.”               | Layout responsivo, funcionou bem no Firefox e no celular     |
| Usuário 2    | Cadastro                     | ✅        | “Faltou dizer que a senha precisa de número.”  | Mensagem de erro pouco específica                            |
| Usuário 2    | Login (válido)               | ✅        | “Bem simples de entrar.”                       | Redirecionado corretamente para /dashboard                   |
| Usuário 2    | Login (inválido)             | ✅        | “Achei que mostraria o motivo da falha.”       | Mensagem genérica, sem detalhes técnicos                     |
| Usuário 2    | Logout                       | ✅        | “Funcionou normal.”                            | Token removido e redirecionamento feito                      |
| Usuário 2    | Acesso direto à /dashboard   | ✅        | “Não consegui entrar direto.”                  | Bloqueio correto sem autenticação                            |
| Usuário 2    | Navegadores / dispositivos   | ✅        | “Ficou estranho no Edge.”                      | Pequena quebra de layout no Edge                             |
| Usuário 3    | Cadastro                     | ❌        | “Não entendi por que não aceitou minha senha.” | Mensagem de erro confusa                                     |
| Usuário 3    | Login (válido)               | ✅        | “Agora foi.”                                   | Login feito, e-mail exibido na dashboard                     |
| Usuário 3    | Login (inválido)             | ✅        | “Apareceu erro, mas sem detalhes.”             | Mensagem amigável exibida, sem mostrar dados técnicos        |
| Usuário 3    | Logout                       | ✅        | “Beleza.”                                      | Logout com redirecionamento correto                          |
| Usuário 3    | Acesso direto à /dashboard   | ✅        | “Voltou pra tela de login.”                    | Redirecionamento correto, token ausente                      |
| Usuário 3    | Navegadores / dispositivos   | ✅        | “Igual no Chrome.”                             | Comportamento consistente em navegadores e no celular        |
