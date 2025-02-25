<template>
  <div class="product-list">
  
    <div class="product" v-for="(product, index) in products" :key="index" 
    @click="openPopup(product)">
      <div class="image-container">
        <img :src="product.image" :alt="product.name" class="product-image" />
      </div>
      <div class="product-info">
       <h2>{{ product.name }}</h2> 
      </div>
    </div>
  </div>

   <!-- Popup Modal -->
   <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <span class="close-btn" @click="closePopup">&times;</span>

      <!-- Popup Box that Contains Image and Content -->
      <div class="popup-box">
        <img :src="selectedProduct.image" alt="Product Image" class="popup-image" />
        <div class="popup-details">
          <h2>{{ selectedProduct.name }}</h2>
          <p class="price">Price: {{ selectedProduct.price }}</p>
          <p>{{ selectedProduct.description }}</p>
          <div class="buttons">
            <button class="add-to-cart" @click="addToCart(selectedProduct)">Add to Cart</button>
            <router-link to="/cart" class="go-to-cart">Go to Cart</router-link>
            <button class="buy-now" @click="buyNow(selectedProduct)">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/cart" class="cart-link">View Cart ({{ cart.length }})</router-link>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      showPopup: false,
      selectedProduct: { name: "", description: "", image: "", price: "" },
      cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from storage
      products: [
      {
          name: "Nykaa Matte Lipstick",
          image: "https://images-static.nykaa.com/media/catalog/product/0/d/0dc21ecNYKAC00000079-az_6.jpg?tr=w-500",
          description: "A long-lasting matte lipstick with a smooth finish.",
          price: 20,
        },
        {
          name: "Nykaa Matte Nailpaint",
          image: "https://i.pinimg.com/736x/22/30/70/223070edf077158b0f87191eb838602b.jpg",
          description: "Chip-resistant and vibrant nail paint.",
          price: 10,
        },
        {
          name: "Nykaa Eyeshadow Palette",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZw8vSMddav8G_avMCSMHyrgZhTCQL1hsDw&s",
          description: "A highly pigmented eyeshadow palette with vibrant shades.",
          price: 30,
        },
        {
          name: "Nykaa Fit Me Foundation",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8-dQEWec8tDNpjJf_QIXXECzPtZLzvRU9w&s", 
          description: "A foundation for flawless, natural-looking coverage.",
          price: 25,
        },
        {
          name: "Nyakaa 24/7 Kajal",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9KiP_UjIkmL9N05Q8M5v5yd-sZvhLmymKQ&s", 
          description: "A smudge-proof kajal for bold, defined eyes.",
          price: 10,
        },
        {
          name: "Nykaa Makeup Kit",
          image: "https://images-static.nykaa.com/media/catalog/product/6/e/6e94760IBAHA00000090_2.jpg?tr=w-500", 
          description: "A comprehensive makeup kit with essential products.",
          price: 60,
        },
        {
          name: "Cetaphil Skin Cleanser",
          image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue323/Himalayan-HempOI.jpg",
          description: "A gentle cleanser that removes dirt without stripping the skin.",
          price: 30,
        },
        {
          name: "Nykaa Lip Linear",
          image: "https://adn-static1.nykaa.com/media/wysiwyg/8904245709105_topbanner.jpg?tr=w-400,pr-true",
          description: "A smooth, long-lasting lip liner to define and shape lips.",
          price: 15,
        },
        {
          name: "Nykaa Anti-Hairfall Shampoo",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0Wzu1TY1K0eUhWOnk0rGSJL0CgM6MABlpg&s",
          description: "A shampoo designed to strengthen and prevent hair fall.",
          price: 25,
        },
        {
          name: "Nykaa Contour Brush",
          image: "https://m.media-amazon.com/images/I/717GzR2ODrL.jpg",
          description: "A brush designed to apply and blend contour effortlessly.",
          price: 20,
        },
        {
          name: "Nykaa Face Wash",
          image: "https://m.media-amazon.com/images/I/811yBylnuoL.jpg",
          description: "A gentle face wash that removes impurities while nourishing the skin.",
          price: 17,
        },
        {
          name: "Nykaa Primer",
          image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/2024/10/YUG-Banner.jpg",
          description: "A lightweight primer that smooths and preps skin for makeup.",
          price: 35,
        },
        {
          name: "MAC Velvet Teddy Lipstick",
          image: "https://indiatechdesk.com/wp-content/uploads/2020/11/nykaa-2.jpg",
          description: "A luxurious, creamy matte lipstick with a soft finish.",
          price: 15,
        },
        {
          name: "Nykaa Hydro Boost Moisturizer",
          image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue275/FACE-OILS-101_OI.jpg",
          description: "A hydrating moisturizer that leaves skin soft and refreshed.",
          price: 28,
        },
        {
          name: "Nykaa Absolute Compact Powder",
          image: "https://m.media-amazon.com/images/I/31Xl8IobZsL.jpg",
          description: "A compact powder for a flawless, matte finish.",
          price: 22,
        },
        {
          name: "L'Oréal Paris Kajal Eyeliner",
          image: "https://images-static.nykaa.com/media/catalog/product/2/a/2a24ca28904245700850_rev1.jpg",
          description: "A rich, intense kajal eyeliner for defined eyes.",
          price: 30,
        },
        {
          name: "Nyakaa Matte Nailpaint",
          image: "https://images-static.nykaa.com/media/catalog/product/b/4/b4ede038904245706968_8.jpg?tr=w-500",
          description: "Adds volume and length to your lashes without clumping.",
          price: 19,
        },
        {
          name: "Nykaa Makeup Kit",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_luov0kCeBCUwsKfeln3cUu-q4OK6kkUo8Q&s",
          description: "A silky-smooth compact powder for a shine-free finish.",
          price: 15,
        },
      ],
    };
  },
  methods: {
    openPopup(product) {
      this.selectedProduct = product;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    
    addToCart(product) {
      alert(`${product.name} has been added to your cart!`);
      this.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(this.cart)); // Save cart in storage
    },
    buyNow(product) {
      alert(`Redirecting to buy ${product.name}`);
      window.location.href = "https://yourwebsite.com/checkout";
    },
  },
};
</script>

<style>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  padding: 20px;
}

.product {
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease-in-out;
}

.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.product-image {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  border-bottom: 2px solid #ccc; 
  box-shadow: 5px 5px 5px 5px rgb(180, 173, 173);
}

.product-image:hover {
  transform: scale(1.1);
}

.product-info {
  padding: 10px;
}

.product-info h2 {
  margin: 10px 0;
  font-size: 15px;
  font-weight: bold;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
background: #333; /* Dark gray background */
color: #fff;
padding: 20px;
border-radius: 10px;
width: 50%;
max-width: 500px;
animation: fadeIn 0.3s ease-in-out;
position: relative;
}

.popup-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Popup Image */
.popup-image {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Popup Details */
.popup-details {
  padding: 10px;
}

.price {
  font-weight: bold;
  color: #ff4081;
  margin-bottom: 10px;
}

.popup-content p {
  font-size: 14px;
  color: #ddd;
  margin: 5px 0px;
}

.popup-image {
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

/* Buttons */
.buttons {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.add-to-cart,
.buy-now {
  flex: 1;
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Add to Cart */
.add-to-cart {
  background-color: #ff4081;
  color: white;
}

.add-to-cart:hover {
  background-color: #e91e63;
}

/* Buy Now */
.buy-now {
  background-color: #28a745;
  color: white;
}

.buy-now:hover {
  background-color: #218838;
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .popup-content {
    width: 90%;
  }
}

.cart-link {
  display: block;
  margin: 20px auto;
  text-align: center;
  font-size: 18px;
  color: white;
  background-color: #ff4081;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  text-decoration: none;
}

.cart-link:hover {
  background-color: #e91e63;
}
</style>