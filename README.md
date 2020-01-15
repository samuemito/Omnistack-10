# Definição da Omnistack de acordo com a Rocketseat

## O que é a semana omnistack?

Um evento para você conhecer na prática o poder do Node.js, ReactJS, React Native e levar suas aplicações e sua carreira de programador para o próximo nível!

## O que vamos aprender nessa semana?

Durante essa semana você vai descobrir na prática porque essas tecnologias fazem tanto sentido juntas, construindo do zero uma aplicação completa com Node.js no back-end, ReactJS no front-end e React Native no mobile.

Você vai aprender como cada uma dessas tecnologias funcionam, como elas se integram, e quais os critérios para a escolha dessa stack. E finalmente vai entender como ela pode levar suas aplicações e a sua carreira para o próximo nível.


[Rocketseat](https://rocketseat.com.br/)

## Vamos começar

```js
function init(version) {
	alert(`Semana omnistack ${version}° edição começando...\nVamos programar.`);
}
init(10)
```


# Segundo dia a Omnistack estou aqui firme e forte caminhando

Nesse dia a comunidade fez uma API Rest em NodeJS para ser consumida futuramente pelo frontend web e mobile, no meu projeto tem algumas alterações do original assim como estou usando a versão 13.6.0 do node e estou utilizando ES Module, nós utilizamos como banco de dados o MongoDB para colocar sua conexão ao MongoDB basta criar o arquivo `backend/private/bd.js` e colocar esse código e configurar de acordo com seu link de acesso.
```js
const bd = {
  url: "link_de_conexão"
}

export default bd;
```