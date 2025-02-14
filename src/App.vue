<template>
    <div id="app">
      <Navbar />
      <HomePage />
      <ProductPage />
      <AboutUs />
      <UserLogin />
      <router-view/>
      <footer class="footer">
        <p>&copy; 2025 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import Navbar from "./components/AppNavbar.vue";
  import ProductPage from "./pages/ProductPage.vue";
  import HomePage from "./pages/HomePage.vue";
  import AboutUs from "./pages/AboutUs.vue";
  import UserLogin from "./components/UserLogin.vue";
  
  export default {
    components: {
      Navbar,
      HomePage,
      ProductPage,
      AboutUs,
      UserLogin,
    },
  };
  </script>
  
  <style>
  /* Footer */
.footer {
  background-color: rgb(237, 124, 220);
  color: black;
  text-align: center;
  padding: 10px 0;
  bottom: 0;
  width: 100%;

}


</style>
  