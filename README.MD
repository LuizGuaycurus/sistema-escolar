# Sistema Escolar Web

Um sistema de gerenciamento escolar completo construído com Django e Angular, projetado para administrar alunos, professores, turmas e notas de forma eficiente.

##  Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Backend:**
    * [Python](https://www.python.org/)
    * [Django](https://www.djangoproject.com/)
    * [Django REST Framework](https://www.django-rest-framework.org/)
    * [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
* **Frontend:**
    * [Angular](https://angular.io/)
    * [TypeScript](https://www.typescriptlang.org/)
* **Banco de Dados:**
    * [MySQL](https://www.mysql.com/)
* **Versionamento:**
    * [Git](https://git-scm.com/) & [GitHub](https://github.com)

## 🚀 Funcionalidades Atuais

* [x] API RESTful segura com Django REST Framework.
* [x] Autenticação de usuários com Tokens JWT.
* [x] Interface de Login com Angular e redirecionamento.
* [x] Layout principal com menu lateral (sidebar) recolhível e tema escuro.
* [x] Visualização (Read) da lista de Alunos no dashboard.
* [ ] Gerenciamento de Alunos (Criar, Atualizar, Deletar).
* [ ] Gerenciamento de Professores (CRUD).
* [ ] Gerenciamento de Turmas (CRUD).

## 🔧 Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

### Pré-requisitos

* Python 3.10+
* Node.js e npm
* MySQL Server
* Git

### 1. Backend (Django)

```bash
# Clone o repositório (substitua pela URL do seu repositório no GitHub)
git clone [https://github.com/LuizGuaycurus/sistema-escolar.git](https://github.com/LuizGuaycurus/sistema-escolar.git)
cd sistema-escolar

# Crie e ative o ambiente virtual
python -m venv venv
# No Windows: venv\Scripts\activate
# No Linux/Mac: source venv/bin/activate

# Navegue até a pasta do backend e instale as dependências
cd backend
pip install -r requirements.txt

# Lembre-se de criar o banco de dados no MySQL e
# configurar suas credenciais no arquivo core/settings.py

# Aplique as migrações no banco de dados
python manage.py migrate
```

### 2. Frontend (Angular)

```bash
# Em um novo terminal, navegue até a pasta do frontend
cd frontend/sistema-web

# Instale as dependências do Node.js
npm install
```

## ▶️ Executando o Projeto

É necessário ter dois terminais abertos.

1.  **Executar o Backend:**
    ```bash
    # Na pasta 'backend' (com a venv ativada)
    python manage.py runserver
    ```
    O servidor Django estará rodando em `http://127.0.0.1:8000`.

2.  **Executar o Frontend:**
    ```bash
    # Na pasta 'frontend/sistema-web'
    ng serve
    ```
    A aplicação Angular estará disponível em `http://localhost:4200`.
