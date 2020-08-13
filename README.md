# Projeto de Teste - Tag Livros

Este é um projeto de teste de avaliação técnica.

## Getting Started

Este projeto foi produzido para avaliar habilidades técnicas, como organização de código e de testes unitários, coverage de testes e solução visual para o problema apresentado.

O preview do projeto pode ser acessado em [https://tag-livros-webapp-test.netlify.app/](https://tag-livros-webapp-test.netlify.app/)


## Instalação

Este comando irá instalar todas as dependencias tanto do front-end como do back-end.

```bash
yarn
# or
npm install
```

# Env files

O back-end e o front-end possuem .env separados. Para que funcione normalmente, é necessario copiar o .env a partir dos arquivos `.env.sample`, tanto no diretório `apps/web` como `apps/api`.

## Running

```bash
yarn start
# or
npm start
```

O front-end vai rodar em `http://localhost:3000` e o back-end vai rodar em `http://localhost:7000`.

## Linting

Este comando vai rodar o linter no front-end e back-end.

```bash
yarn lint
# or
npm run lint
```

## Testing

Este comando vai rodar o teste unitario no front-end e back-end.

```bash
yarn test
# or
npm test
```

Para rodar o teste de integração, primeiro inicie o app, executando o comando:

```bash
yarn start
# or
npm start
```

Quando o app estiver funcionando, execute o comando (em uma outra aba do terminal):

```bash
yarn e2e
# or
npm run e2e
```

Este comando irá executar o cypress, e os logs de execução do teste ficarão armazenados em `cypress/screenshots` e `cypress/videos`