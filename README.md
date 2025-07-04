# DevLink

O DevLink é um projeto de código aberto que permite criar e gerenciar uma página de links personalizada. Com ele, você pode agrupar todos os seus links importantes em um só lugar, facilitando o compartilhamento e a divulgação do seu trabalho.

## Funcionalidades

- **Login social:** Autenticação segura com Google e GitHub.
- **Gerenciamento de links:** Adicione, edite e remova links de forma simples e intuitiva.
- **Personalização:** Customize a aparência da sua página de links.
- **Visualização de links:** Acesse uma prévia de como sua página de links será exibida para os visitantes.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Firebase**
- **Tailwind CSS**
- **React Router**
- **React Icons**

## Como Começar

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/devlink.git
    ```

2.  **Instale as dependências:**

    ```bash
    cd devlink
    npm install
    ```

3.  **Configure o Firebase:**

    - Crie um projeto no [Firebase](https://console.firebase.google.com/).
    - Nas configurações do projeto, adicione um novo aplicativo da web.
    - Crie um arquivo `.env` na raiz do projeto e adicione as credenciais do Firebase, como no exemplo abaixo:
      ```
      VITE_API_KEY=SUA_API_KEY
      VITE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
      VITE_PROJECT_ID=SEU_PROJECT_ID
      VITE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
      VITE_MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
      VITE_APP_ID=SEU_APP_ID
      ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

## Estrutura do Projeto

```
/
├── public/
│   └── vite.svg
└── src/
    ├── components/
    │   ├── Header/
    │   ├── Input/
    │   ├── routes/
    │   └── social/
    ├── pages/
    │   ├── admin/
    │   ├── home/
    │   ├── login/
    │   └── networks/
    └── services/
        └── firebaseConnection.ts
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.