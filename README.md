
## Desafio API Github - Features ES6

### 1 - Crie uma variável que contém o userId de um usuário do GitHub.
### 2 - Crie uma função getUserData() que receba como parametro o userId do Github e dentro da função faça chamada da API com o exemplo abaixo do axios.
### 3 - Caso a API retornar os dados, chame uma função isPopular() passando os dados da requisição como parametro
### 4 - Na função isPopular(), verifique se o numero de seguidores e maior que os de seguindo.
#### - Caso tenha mais seguidores, mostre na tela "O usuário $name possui uma conta popular!"
#### - Caso tenha mais seguindo, mostre na tela "O usuário $name precisa melhorar sua popularidade!"
#### Example Axios

    axios.get("https://api.github.com/users/$userId")
      .then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.warn(error);
      });
