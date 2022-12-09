# Talker Manager API

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto Talker Manager foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento back-end onde iniciamos a utilização do NodeJS.

## Objetivo

A API Talker Manager tem o objetivo de oferecer opções de CRUD (create, read, update, delete) ao usuário, logo, é possível cadastrar, visualizar, pesquisar, editar e excluir informações através dos endpoints. Esta API atua como o back-end de um sistema de cadastro de palestrantes.

## Tecnologias e Ferramentas

<div>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
</div>

Neste projeto não é utilizado um banco de dados, portanto, utilizou-se o módulo **fs**, nativo do [NodeJS](https://nodejs.org/en/), para realizar leituras e escritas em um arquivo json. As demais tecnologias utilizadas foram [Express](https://expressjs.com/pt-br/) e [Docker](https://www.docker.com/). A ferramenta [ESlint](https://eslint.org/) foi utilizada para alinhamento do código.

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

      git clone git@github.com:larissaperinoto/talker-manager-API.git

Navegue até a raíz do projeto.

      cd talker-manager-API/

<details>
   <summary><strong>Rodando a aplicação com o Docker</strong></summary>
  </br>

   Na pasta app do projeto, suba o container <strong>talker_manager</strong> utilizando o docker-compose.yml. Utilize o comando abaixo.

        docker-compose up -d

   Entre no terminal do container

        docker exec -it talker_manager bash

   Instale as depedências do projeto

        npm install

   Inicie o servidor

        npm run dev

</details>

---

Desenvolvido por [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.
