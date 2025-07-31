# Metodologia Utilizada no Projeto `login-client`

Este projeto é uma aplicação web de autenticação de usuários, desenvolvida com foco em **boas práticas ágeis, versionamento, integração contínua e testabilidade**.

---

## Tecnologias Utilizadas

- **Frontend**: [React.js](https://reactjs.org)  
- **Backend/API**: [Node.js](https://nodejs.org) (API desenvolvida manualmente)  
- **Hospedagem do Frontend**: [Vercel](https://vercel.com)  
- **Hospedagem da API (Backend)**: [Render](https://render.com)  
- **Versionamento de Código**: [Git](https://git-scm.com) + [GitHub](https://github.com)  
- **Gerenciamento Ágil**: [Jira](https://www.atlassian.com/software/jira)

---

## Metodologia e Processo de Desenvolvimento

### 1. Planejamento com Histórias de Usuário no Jira

- Funcionalidades organizadas por **épicos**.  
- Cada funcionalidade foi escrita como **história de usuário** com:
  - Intenção clara do usuário  
  - Comportamento esperado  
  - Critérios de aceitação bem definidos  
- As histórias foram pensadas com foco na **testabilidade**.

#### Exemplo de Organização no Jira

As tarefas foram organizadas por épicos e histórias de usuário no Jira, garantindo clareza e rastreabilidade:

![Organização das histórias no Jira](https://github.com/Daiane567/login-client/blob/main/img/Apresenta%C3%A7%C3%A3o/jira.png)

---

### 2. Desenvolvimento com Integração Contínua

- Versionamento feito com **Git e GitHub**.  
- Projeto desenvolvido em **arquitetura desacoplada**: frontend e backend separados.  
- Boa separação de responsabilidades e manutenibilidade do código.

---

### 3. Deploy Contínuo

- **Frontend** implantado na [Vercel](https://vercel.com), com deploy automático.  
- **Backend/API** hospedado na [Render](https://render.com), acessível pelo frontend.

---

### 4. Foco em Testabilidade

- As histórias do Jira permitiram derivar **casos de teste funcionais e de interface**.  
- **Testes manuais** executados com foco em:
  - Login com e sem sucesso  
  - Redirecionamentos protegidos  
  - Armazenamento seguro do token JWT  
  - Layout em múltiplos dispositivos  
  - Mensagens de erro claras  

---

### 5. Responsividade e Acessibilidade

- Layout responsivo e compatível com navegadores modernos: Chrome, Firefox, Edge.  
- **Boas práticas de UX e acessibilidade** nas mensagens de erro:
  - Sem jargões técnicos  
  - Ícones e cores para facilitar a compreensão  

---

## Benefícios da Abordagem

- Organização clara e visível no Jira  
- Modularidade entre frontend e backend  
- Facilidade de manutenção e escalabilidade  
- Testes manuais e automatizados facilitados  
