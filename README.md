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

# Terceiro dia estou aqui novamente

Hoje deu um problema em meu projeto eu uso uma ferramenta chamada Gitpod, ela é um container que tem um Visual Studio Code integrado, mas enquanto eu estavo fazendo meu código acontece que essa ferramenta cai, porém eu já tinha acabado o dia só falta dar um git push, então eu apenas esperei até ficar online novamente e dei um push, as únicas alterações que eu fiz no backend foi de adicionar uma função delete dev para quando um usuário clicar em uma lixeira do dev-item será excluido, porém tive que colocar 2 requisições ao banco de dados e uma a api então ficou um pouco de demora no resultado e isso me incomodou talvez amanhã eu tento otimizar um pouco mais.
