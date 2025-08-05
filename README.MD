Sistema de Gerenciamento Escolar
1. Sinopse
Este repositório contém o código-fonte de um Sistema de Gerenciamento Escolar (SGE) desenvolvido como uma aplicação web full-stack. O projeto implementa uma arquitetura de serviços desacoplada, com uma API RESTful no backend e uma Single-Page Application (SPA) no frontend. O objetivo principal é fornecer uma plataforma robusta e escalável para a administração de entidades acadêmicas como alunos, corpo docente e turmas.

2. Arquitetura da Aplicação
A arquitetura do sistema é dividida em três componentes principais:

2.1. Backend (API)
Framework: Django

Linguagem: Python

API: Django REST Framework (DRF) para a construção da API RESTful.

Autenticação: O sistema utiliza JSON Web Tokens (JWT) para a autenticação segura de endpoints, implementada através da biblioteca djangorestframework-simplejwt.

Comunicação Frontend-Backend: A política de Cross-Origin Resource Sharing (CORS) é gerenciada pela biblioteca django-cors-headers para permitir requisições da aplicação frontend.

2.2. Frontend (Cliente Web)
Framework: Angular

Linguagem: TypeScript

Renderização: A aplicação foi configurada para suportar Server-Side Rendering (SSR), visando otimizar o desempenho de carregamento inicial e a indexação por motores de busca (SEO).

Comunicação com API: O módulo HttpClient do Angular é utilizado para consumir os endpoints da API RESTful do backend.

2.3. Banco de Dados
Sistema de Gerenciamento de Banco de Dados (SGBD): MySQL.

Driver de Conexão: A integração entre o Django e o MySQL é realizada através do driver mysqlclient.

3. Roadmap de Funcionalidades
O escopo atual e futuro do projeto inclui as seguintes funcionalidades:

[x] Estrutura da API RESTful com Django REST Framework.

[x] Mecanismo de autenticação de usuários via JSON Web Tokens (JWT).

[x] Interface de autenticação (Login) no frontend Angular.

[ ] Módulo de gerenciamento de Alunos (operações CRUD).

[ ] Módulo de gerenciamento de Professores (operações CRUD).

[ ] Módulo de gerenciamento de Turmas e Matrículas.

4. Guia de Instalação e Configuração
Para executar este projeto em um ambiente de desenvolvimento local, siga os procedimentos detalhados abaixo.

4.1. Pré-requisitos
Certifique-se de que os seguintes softwares estão instalados em seu sistema:

Python (versão 3.10 ou superior)

Node.js e o gerenciador de pacotes npm

Servidor de banco de dados MySQL

Git

4.2. Configuração do Backend
# 1. Clone o repositório para o seu ambiente local
git clone https://github.com/LuizGuaycurus/sistema-escolar.git
cd nome-do-repositorio

# 2. Crie e ative um ambiente virtual Python
python -m venv venv
# No Windows:
# venv\Scripts\activate
# No macOS/Linux:
# source venv/bin/activate

# 3. Instale as dependências do Python a partir do arquivo de requerimentos
cd backend
pip install -r requirements.txt

# 4. Configure a conexão com o banco de dados no arquivo 'core/settings.py'
# e execute as migrações para criar as tabelas do banco de dados.
python manage.py migrate

4.3. Configuração do Frontend
# 1. Em um novo terminal, navegue para o diretório do frontend
cd frontend/sistema-web

# 2. Instale as dependências do Node.js
npm install

5. Instruções de Execução
Para iniciar a aplicação, é necessário executar os servidores de backend e frontend simultaneamente.

Execução do Servidor Backend (Django):

# No diretório 'backend', com o ambiente virtual ativado:
python manage.py runserver

A API estará acessível em http://127.0.0.1:8000.

Execução do Servidor Frontend (Angular):

# No diretório 'frontend/sistema-web':
ng serve

A aplicação web estará acessível em http://localhost:4200.