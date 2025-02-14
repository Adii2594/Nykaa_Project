<template>
  <div class="wrapper">
  <div class="container">
    <h1>User Authentication</h1>

    <div v-if="isLogin">
      <h2>Login</h2>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
      <div class="alert" v-if="loginError">{{ loginError }}</div>
      <p>
        Don't have an account?
        <a href="#" @click.prevent="toggleForm">Register</a>
      </p>
    </div>

    <div v-else>
      <h2>Register</h2>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="handleRegister">Register</button>
      <div class="alert" v-if="registerError">{{ registerError }}</div>
      <p>
        Already have an account?
        <a href="#" @click.prevent="toggleForm">Login</a>
      </p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// State variables
const isLogin = ref(true);
const username = ref('');
const password = ref('');
const loginError = ref('');
const registerError = ref('');

// Toggle between login and register forms
const toggleForm = () => {
  isLogin.value = !isLogin.value;
  username.value = '';
  password.value = '';
  loginError.value = '';
  registerError.value = '';
};

// Handle login
const handleLogin = () => {
  if (!username.value || !password.value) {
    loginError.value = 'Please fill out both fields.';
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem(username.value));
  if (storedUser && storedUser.password === password.value) {
    alert('Login Successful!');
  } else {
    loginError.value = 'Invalid username or password.';
  }
};

// Handle registration
const handleRegister = () => {
  if (!username.value || !password.value) {
    registerError.value = 'Please fill out both fields.';
    return;
  }

  const userExists = localStorage.getItem(username.value);
  if (!userExists) {
    const user = { username: username.value, password: password.value };
    localStorage.setItem(username.value, JSON.stringify(user));
    alert('Registration Successful!');
    toggleForm();
  } else {
    registerError.value = 'Username already exists.';
  }
};
</script>

<style>
.wrapper {
  background-color: pink;
  margin: 0;
  padding:0;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h1 {
  text-align: center;
  font-size: 2rem;
}

input {
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
}

button:hover {
  background-color: #45a049;
}

.alert {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: center;
}
</style>
