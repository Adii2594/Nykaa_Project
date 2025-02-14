<template>
    <div id="app">
      <!-- Header -->
      <header>
        <Navbar />
        <nav class="navbar">
          <div class="logo">
            <img src="https://i0.wp.com/infobeamsolution.com/wp-content/uploads/2024/06/nykaalogo.png?fit=640%2C159&ssl=1" alt="logo" />
          </div>
        <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/logo-icon" class="logo">
          <img src="https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg">
        </router-link></li>
      </ul>
    </nav>
    </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  
  <style >
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    width: auto;
    margin: 0;
    background-color: rgb(216, 212, 214);
    box-shadow: 3px 3px 3px 0px rgb(99, 99, 99);
  }
  
  .logo img 
  {
    height: 35px;
  }
  
  ul 
  {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  ul li a
  {
    text-decoration:none;
    color: rgb(46, 27, 65);
  }
  
  .login-icon 
  {
    width: 20px;
    cursor: pointer;
  }

  .login-icon:hover {
    transform: scale(1.1);
  }

   
  * {
  margin: 0px;
  padding: 0px;
}

  </style>
  