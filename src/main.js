

/**
 * Desafio API Github - Utilizando as features ES6
 * 
 * 1 - Crie uma variavel que contem o userId de algum usuario do GitHub.
 *
 * 2 - Crie uma funcao getUserData() que receba como parametro 
 *     o userId do Github e dentro da funcao faca chamada da API
 *     com o exemplo abaixo do axios.
 *
 * 3 - Caso a API retornar os dados, chame uma funcao isPopular() passando 
 *     os dados da requisicao como parametro
 *
 * 4 - Na funcao isPopular(), verifique se o numero de seguidores
 *     e maior que os de seguindo. 
 *      - Caso tenha mais seguidores, mostre na tela "O usuario $name possui uma conta popular!"
 *      - Caso tenha mais seguindo, mostre na tela "O usuario $name precisa melhorar sua popularidade"
 */

/* Exemplo axios */

// axios.get("https://api.github.com/users/$userId")
//   .then(function(response) {
//     console.log(response);
//   }).catch(function(error) {
//     console.warn(error);
//   });

const userId = "luizchaves97";

const getUserData = (userId) => {
  axios.get("https://api.github.com/users/" + userId)
  .then( response => isPopular(response.data) )
  .catch( error => console.warn(error) );
}

const isPopular = (data) => {
  let followers = data.followers;
  let following = data.following;
  let resposta = ((followers > following) ? "Boa popularidade!" : "Precisa de seguidores!");
  console.log(resposta);
}

getUserData(userId);
