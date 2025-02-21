<template>
  <div class="wrapper">
    <!--background gif-->
    <img src="https://i.makeagif.com/media/9-26-2017/yb2-TV.gif" alt="Background Gif" class="bg-gif" />
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
import { useRouter } from 'vue-router';

// Initialize router
const router = useRouter();

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

    // Redirect to Home Page
    router.push('/');
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

/* Wrapper to position GIF and center content */
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Background GIF Styling */
.bg-gif {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Authentication Form Container (Glassmorphism Effect) */
.container {
  background: rgba(255, 255, 255, 0.1); /* Transparent white */
  backdrop-filter: blur(10px); /* Blur effect */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  width: 320px;
  z-index: 1;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2); /* Soft border */
}

/* Title Styles */
h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
}

/* Input Field Styles */
input {
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  outline: none;
}

/* Placeholder Text Color */
input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* Button Styles */
button {
  padding: 12px;
  background: linear-gradient(45deg, #4CAF50, #2E8B57);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  background: linear-gradient(45deg, #45a049, #1E6F5C);
}

/* Error Message */
.alert {
  color: rgb(255, 100, 100);
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: center;
}

/* Text and Links */
p {
  color: white;
}

a {
  color: #00e6ff;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
