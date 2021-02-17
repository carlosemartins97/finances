# My Wallet Dashboard

# Sobre o projeto

O Projeto "My Wallet Dashboard" foi desenvolvido para por em práticas os fundamentos do ReactJs utilizando principalmente Typescript, Styled Components e boas práticas.

A Aplicação consiste em uma dashboard intuitiva para controle de economias, onde o usuário é capaz de analisar o histórico de gastos e todos os dados de forma dinâmica de acordo com o mês e o ano selecionado, podendo também, alterar o visual para o estilo Dark ou Light.

<img src="https://i.imgur.com/GHC5NTG.gif" alt="Projeto My Wallet Dashboard">

## Mobile e Laptop
<img src="https://i.imgur.com/P5aLcgD.png" alt="Projeto com tema light em todos os dispositivos">
<img src="https://i.ibb.co/MhQBWYK/Screenshot-1.png" alt="Projeto com tema dark em todos os dispositivos">

O projeto atualmente se mantém apenas no FrontWeb, com conteúdos e dados estáticos, sem ter qualquer envolvimento com o banco de dados e um backend.
Caso deseje adicionar novas linhas de conteúdo, veja abaixo:

## Dados
Entre na pasta do projeto e digite o comando:
```bash
cd src/repositories
```

Dentro dessa pasta existem 2 arquivos: 
```bash
"gains.ts","expenses.ts"
```
Edite conforme sua preferência mantendo o modelo abaixo:
```bash
{ 
  "description": "Salário",
  "amount": "1300.52",
  "type": "entrada",
  "frequency": "recorrente",
  "date": "2020-01-10" 
 }
```
description: 'Nome ou descrição' <br>
amount: 'Valor' (string) <br>
frequency: 'recorrente' || 'eventual' <br>
type: 'entrada' || 'saida' <br>
date: 'data referente à transação' (string) <br>



# Tecnologias utilizadas
- HTML / CSS / JavaScript
- ReactJS
- Styled Components
- Typescript

# Como executar o projeto
Pré-requisitos: npm / yarn

```bash
# entrar na pasta do projeto

# instalar dependências
npm / yarn install

# executar o projeto
npm start / yarn start
```




# Autor

Carlos Eduardo S. Martins

https://www.linkedin.com/in/carlosemartins97
