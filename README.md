# FURIA-CHALLENGE
Um sistema de chat em tempo real inspirado no universo do CS:GO, com foco na equipe brasileira FURIA. O FURIACHAT permite a comunicação entre usuários por WebSocket, com uma interface visual personalizada com os principais jogadores da cena competitiva.

## Deploy no Render
O projeto está hospedado no render - Acesse: https://furia-challenge-front.onrender.com

FURIA-CHALLENGE/
│
├── backend/           # Servidor Node.js com WebSocket
│ ├── src/server.js    # Lógica principal do servidor
│ ├── .env             # Variáveis de ambiente
│ └── package.json     # Dependências e scripts
│
└── frontend/          # Interface do usuário
├── index.html         # Página principal
├── css/style.css      # Estilo visual do site
├── js/script.js       # Script cliente para WebSocket
└── images/            # Logos, background e avatares dos jogadores

## Funcionalidades
- ✅ Tela de login com nome personalizado
- ✅ Envio e recebimento de mensagens em tempo real
- ✅ Cores aleatórias por usuário para distinguir mensagens
- ✅ Cards interativos com os jogadores do time FURIA: nome, função, nacionalidade e idade
- ✅ Ao clicar no card o usuário é direcionado para a rede social **X** do Jogador
- ✅ Menu de navegação entre o chat, a loja da furia e a seção de jogadores

## 🛠️ Tecnologias utilizadas

- **Frontend**: HTML5, CSS3, JavaScript 
- **Backend**: Node.js + WebSocket (`ws`)

## 🛠️ Como executar o projeto localmente

### Pré-requisitos
- Node.js instalado em sua máquina

1. Clone o repositório:
   ```bash
   git clone https://github.com/NataliaMelendre/FURIACHAT.git
   cd FURIACHAT/backend
   cd src
   node server.js

2. Abra o index.html diretamente no navegador.

🌐 Comunicação via WebSocket
- O frontend se conecta ao servidor WebSocket utilizando o IP e porta definidos no .env.
- As mensagens são trocadas em tempo real entre múltiplos clientes.
## 🖼️ Prévia da Interface

### Tela de Login
![image](https://github.com/user-attachments/assets/a3c4b506-6716-4880-9717-45c5b2c92081)

### Tela de Chat
![image](https://github.com/user-attachments/assets/27c2a491-b380-4079-ae02-cce4e39e0a9a)

### Cards dos Jogadores
![image](https://github.com/user-attachments/assets/8971faa5-9f74-4bd0-98f3-1180bf3aa4ea)

## 👤 Autora
Desenvolvido por Natalia Melendre
