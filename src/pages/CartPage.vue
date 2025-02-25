<template>
    <div class="cart">
      <h2>Shopping Cart</h2>
      <p v-if="cart.length === 0">Your cart is empty</p>
      <ul v-else>
        <li v-for="(item, index) in cart" :key="index">
          <img :src="item.image" alt="Product Image" class="cart-img" />
          <span>{{ item.name }} - ${{ item.price }}</span>
          <button @click="removeFromCart(index)" class="remove-btn">❌</button>
        </li>
      </ul>
      <h3>Total: ${{ totalPrice }}</h3>
      <router-link to="/products" class="back-link">Back to Products</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: JSON.parse(localStorage.getItem("cart")) || [], 
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart)); 
      },
    },
  };
  </script>
  
  <style>
  .cart {
    text-align: center;
    padding: 80px 20px 20px;
    background: #fff;
  }
  
  .cart ul {
    list-style: none;
    padding: 0;
  }
  
  .cart li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0px;
    border: 2px solid #e2dada;
    border-radius: 5px;
  }
  
  .cart-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border-color: rgb(182, 179, 179);
  }

  
  .remove-btn {
    background: rgb(197, 178, 178);
    color: white;
    border: none;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .remove-btn:hover {
    background: rgb(231, 200, 200);
  }
  
  .back-link {
    display: block;
    margin-top: 20px;
    font-size: 18px;
    color: white;
    background-color: #28a745;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .back-link:hover {
    background-color: #218838;
  }

  </style>
  