# 🌊 Projeto Avatar - Explorador de Personagens

Bem-vindo ao **Explorador de Personagens de Avatar!** 🌿🔥💧💨  
Um projeto interativo que consome a **[Last Airbender API](https://last-airbender-api.fly.dev/api/v1/characters)** para exibir os personagens do universo de **Avatar: A Lenda de Aang** e **A Lenda de Korra**.

---

## 🧠 Sobre o Projeto

O site exibe cards com **nome, imagem e afiliação** dos personagens da série Avatar.  
Além disso, o usuário pode **favoritar** seus personagens preferidos com um clique ❤️.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript puro**, com foco em:
- Manipulação de **DOM** 🧩  
- Consumo de **API REST** 🌐  
- **Animações e transições suaves** no carregamento dos cards ✨  
- Um layout temático e responsivo inspirado no universo Avatar 🌊  

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **API Pública** → [Last Airbender API](https://last-airbender-api.fly.dev/api/v1/characters)

---

## 🧩 Estrutura de Pastas

📂 projeto-avatar
│
├── 📁 Js
│ └── carregar_dados.js # Lógica principal para buscar dados e criar os cards
│
├── 📁 static
│ └── style.css # Estilos e animações do layout
│
├── 📁 img
│ └── avatar.jpg # Imagem de fundo do site
│
└── index.html # Página principal

yaml
Copiar código

---

## ⚙️ Como Funciona

1. Ao carregar a página, o script `carregar_dados.js` faz uma requisição `fetch()` para a API:  
https://last-airbender-api.fly.dev/api/v1/characters

yaml
Copiar código

2. Os dados retornados são transformados em **cards dinâmicos**, contendo:
- 🖼️ Imagem do personagem  
- 🪶 Nome em destaque  
- 🏹 Afiliação  

3. Cada card tem um **ícone de coração ❤️**, que o usuário pode clicar para marcar como **favorito**.

---

## 🎨 Destaques Visuais

- Fundo temático com **imagem do Avatar** 🌅  
- Gradientes animados no título principal  
- Efeitos de **hover** e **fade-in** nos cards  
- Ícones interativos de **favoritar/desfavoritar**  

---

## 💖 Exemplo de Interação

🔘 **Não favoritado:** 🤍  
🔴 **Favoritado:** ❤️  

Os favoritos são apenas visuais (não salvos em banco), mas demonstram manipulação dinâmica de classes no DOM.

---

## 📸 Demonstração

> *(Insira aqui uma captura de tela ou gif do seu site rodando, se quiser)*

---

## 🧰 Como Executar o Projeto

1. Baixe ou clone o repositório:
```bash
git clone https://github.com/seuusuario/projeto-avatar.git
Abra o arquivo index.html no seu navegador.

Pronto! 🌊 Os personagens começarão a carregar automaticamente.

🧑‍💻 Autor(a)
Alan Vieira
💌 Projeto desenvolvido para prática de consumo de APIs e manipulação de DOM.
📚 Inspirado no universo incrível de Avatar: A Lenda de Aang.

🪶 Créditos
API: The Last Airbender API

Imagem de fundo: Fan art temática de Avatar

Ícones: HTML Entities (♥ e ♡)
