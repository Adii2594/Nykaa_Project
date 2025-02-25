<template>
    <div id="app">
      <!-- Header -->
      <header>
        <Navbar />
        <nav class="navbar">
          <div class="logo">
            <ul>
            <li><router-link to="/"><img src="https://i0.wp.com/infobeamsolution.com/wp-content/uploads/2024/06/nykaalogo.png?fit=640%2C159&ssl=1" 
              alt="logo" /></router-link></li>
            <li><input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar" /></li>
          </ul>
          </div>
        <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/brands">Brands</router-link></li>
        <li><router-link to="/cart">
          <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"
          style="height: 25px; width: 22px;" />
        </router-link></li>
        <li><router-link to="/login">
          <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" 
          style="height: 22px;  width: 20px;">
        </router-link></li>
      </ul>
    </nav>
    </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return{
        searchQuery: ''
      };
    }
  };
  </script>
  
  <style >
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    width: 100%;
    right: 0%;
    left:0%;
    margin: 0;
    background-color: rgb(216, 212, 214);
    box-shadow: 3px 3px 3px 0px rgb(99, 99, 99, 0.4);
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  
  .logo img 
  {
    height: 35px;
  }
  
  ul 
  {
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  ul li a
  {
    text-decoration:none;
    color: rgb(46, 27, 65);
  }
  
  .search-bar {
  padding: 7px;
  margin-top: 0;
  border-radius: 4px;
  border:rgb(5, 5, 5);
  color: black;
  background-color: rgb(189, 183, 184);
}

  .login-icon 
  {
    height: 15px;
    width: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .login-icon:hover {
    transform: scale(1.1);
  }
   
  * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

  </style>
  