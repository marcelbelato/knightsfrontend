<template>
  <div class="home">
    <img alt="BTG logo" src="../assets/btg_logo.png">
    <div class="wrapper">
      <h3>Seja bem-vindo(a) ao App Knights Challenge</h3>
      <p>
        Aplicação desenvolvida por <a href="https://github.com/marcelbelato">Marcel Belato</a>, afim de seguir com o desafio proposto pela empresa BTG Pactual, para a posição de Tech Lead Fullstack para a célula de IT Credit Risk.
      </p>
      <p>
        A aplicação foi desenvolvida utilizando o framework Vue.js, 
        com o objetivo de criar uma SPA (Single Page Application), que consome uma API REST, desenvolvida em .NET 7 e C#, e banco de dados MongoDB.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home img {
  width: 350px;
  height: 200px;
}

.wrapper {
  max-width: 800px;
  padding: 0px 15px 20px 15px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #666;
}

.wrapper p {
  margin: 20px auto;
}

.wrapper a {
  color: #264da1;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 0px 5px 0px 5px;
}

h3 {
  margin: 40px auto;
}
</style>