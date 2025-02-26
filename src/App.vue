<template>
    <div id="app">
      <Navbar />
     <!-- <HomePage />
     <ProductPage />
      <AboutUs />
      <UserLogin />--> 
      <router-view/>
      <footer class="footer">
        <div class="footer-container">
      
      <!-- Company Info -->
      <div class="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press & Media</a></li>
        </ul>
      </div>

      <!-- Customer Support -->
      <div class="footer-section">
        <h3>Customer Support</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Returns & Refunds</a></li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Offers & Discounts</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Beauty Advice</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div class="footer-section social-media">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube"></a>
        </div>
      </div>

    </div>

    <!-- Newsletter & Copyright -->
    <div class="footer-bottom">
      <div class="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <div class="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <p>© 2024 Nykaa. All Rights Reserved | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
    </div>
      </footer>
    </div>
  </template>
  
  <script>
  import Navbar from "./components/AppNavbar.vue";
  //import ProductPage from "./pages/ProductPage.vue";
  //import HomePage from "./pages/HomePage.vue";
  //import AboutUs from "./pages/AboutUs.vue";
  //import UserLogin from "./components/UserLogin.vue";
  
  export default {
    components: {
      Navbar,
      //HomePage,
      //ProductPage,
      //AboutUs,
      //UserLogin,
    },
  };
  </script>
  
  <style>
  /* Footer */

.footer {
  background: #535151;
  color: #fff;
  padding: 40px 20px;
  font-size: 14px;
  text-align: center;
}

/* Footer Container (Grid Layout) */
.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  padding: 20px 0;
}

/* Footer Sections */
.footer-section h3 {
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: bold;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
  
}

.footer-section ul li a {
  text-decoration: none;
  color: #ccc;
  transition: color 0.3s;

}

.footer-section ul li a:hover {
  color: #ff4081;
}

/* Social Media Icons */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.social-icons a img {
  width: 25px;
  height: 25px;
  transition: transform 0.3s ease;
}

.social-icons a img:hover {
  transform: scale(1.1);
}

/* Footer Divider */
.footer-divider {
  margin: 20px auto;
  width: 90%;
  border: 0.5px solid #555;
}

/* Newsletter Section */
.footer-bottom {
  margin-top: 20px;
}

.newsletter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.newsletter h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.newsletter-box {
  display: flex;
  gap: 5px;
  width: 350px;
}

.newsletter-box input {
  padding: 8px;
  border: none;
  border-radius: 4px;
  flex-grow: 1;
}

.newsletter-box button {
  padding: 8px 12px;
  border: none;
  background: #ff4081;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;
}

.newsletter-box button:hover {
  background: #e91e63;
}

/* Copyright */
.footer-bottom p {
  font-size: 12px;
  margin-top: 10px;
}

.footer-bottom a {
  color: #ff4081;
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  .newsletter-box {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .newsletter-box {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .newsletter-box input {
    width: 100%;
  }
}

</style>
  