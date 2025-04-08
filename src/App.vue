<template>
  <div class="container">
    <a href="https://sistema.rotaexata.com.br/0/0/mapa" target="_blank">
      <img src="./assets/rotaexatalight.png" class="logo vue"/>
    </a>
    <h1>Storybook</h1>
  </div>
</template>

<script setup>
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2em;
  max-width: 800px;
  margin: 0 auto;
}
</style>
