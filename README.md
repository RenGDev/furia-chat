# 🦁 Chat Interativo - Torcida FURIA

Este é o frontend da **Projeto para FURIA**, um chat em tempo real desenvolvido com foco nos fãs do time de CS:GO da FURIA. A aplicação permite interação via comandos, exibe mensagens em tempo real e proporciona um ambiente imersivo para a torcida.

## 🚀 Funcionalidades

- Chat em tempo real com Firebase Realtime Database
- Comandos interativos com respostas automáticas
  - `/proximojogo`, `/jogadores`, `/curiosidade`, `/torcida`
- Interface responsiva (mobile-first)
- Mensagens persistentes no Firebase
- Layout temático dark, inspirado na identidade da FURIA

## 🛠 Tecnologias utilizadas

| Tecnologia     | Descrição                                  |
|----------------|----------------------------------------------|
| [Next.js](https://nextjs.org/)       | Framework React para SSR/SSG                              |
| [React](https://react.dev/)          | Biblioteca para construção da interface                   |
| [Tailwind CSS](https://tailwindcss.com/) | Framework de utilitários CSS responsivo e customizável  |
| [Firebase Realtime Database](https://firebase.google.com/products/realtime-database) | Backend em tempo real para mensagens                   |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para maior segurança e clareza no código |

## 📁 Estrutura de pastas

```
/app
└── page.tsx # Landing page principal
└── chat/page.tsx # Componente do chat
/lib
└── firebase.ts # Inicialização do Firebase
/public
└── chat-preview.png # Imagem usada na seção “Destaque Chat”
```

## 📦 Instalação e uso local

> Antes de tudo, certifique-se de ter o **Node.js 18+** e **npm** instalados.

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/chat-furia.git
cd chat-furia

```

### 2. Instale as dependencias
```
npm install

```
### 3 .Configure o Firebase

```
Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://xxxxx.firebaseio.com
```

### 4. Inicie o projeto localmente
```
bash
npm run dev
```

## 💡 Comandos disponíveis no chat
```
Comando	Resposta esperada
/proximojogo	Data e hora do próximo jogo da FURIA
/jogadores	Lista dos jogadores atuais
/curiosidade	Curiosidade sobre a história da FURIA
/torcida	Grito de torcida animado
```

## 📸 Prévia visual
```
<p align="center"> <img src="./public/chat-preview.png" alt="Preview do Chat da FURIA" width="600"/> </p>
```
## 🤝 Contribuição
Sinta-se à vontade para abrir issues ou PRs com melhorias, sugestões de novos comandos ou ajustes visuais.

## 🧠 Créditos
Desenvolvido por Lorenzo para o desafio Experiência Conversacional FURIA ⚡
Com orgulho pela comunidade gamer e pela paixão do CS:GO brasileiro.