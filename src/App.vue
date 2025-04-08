<template>
  <nav>
    <RouterLink v-if="isMainPage" to="/form">
      Mostrar formulário
    </RouterLink>
    <RouterLink v-if="!isMainPage" to="/">
      Voltar
    </RouterLink>
  </nav>
  <main class="main-container">
    <router-view />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isMainPage = computed(() => {
  return route.path === '/'
})

</script>
<style scoped>
.main-container {
  margin-top: 12px;
}

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
