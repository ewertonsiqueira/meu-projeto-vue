<template>
    <div class="login-form">
        <span v-if="loggedText" data-testid="loggedtext">
            {{ loggedText }}
        </span>
      <form>
        <div>
          <label for="login">Login:</label>
          <input data-testid="login" id="login" v-model="login" type="text" required />
          <span v-if="errors.login" class="error">{{ errors.login }}</span>
        </div>
        <div>
          <label for="password">Senha:</label>
          <input data-testid="password" id="password" v-model="password" type="password" required />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>
        <r-button data-testid="button" label="Entrar" primary @click="handleSubmit"></r-button>
      </form>
    </div>
  </template>
  
  <script setup>
  import RButton from '../components/RButton.vue';
  import { ref } from 'vue';
  
  const loggedText = ref('');
  const login = ref('');
  const password = ref('');
  const errors = ref({ login: '', password: '' });
  
  const validateForm = () => {
    errors.value.login = login.value ? '' : 'O login é obrigatório.';
    errors.value.password = password.value.length >= 6 ? '' : 'A senha deve ter pelo menos 6 caracteres.';
    return !errors.value.login && !errors.value.password;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
        loggedText.value = 'Logado com sucesso!'
    } else {
        loggedText.value = ''
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: black;
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form div {
    margin-bottom: 10px;
  }
  label {
    display: block;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  /* button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  } */
  button:hover {
    background: #0056b3;
  }
  .error {
    color: red;
    font-size: 0.875em;
    margin-top: 5px;
    display: block;
  }
  </style>