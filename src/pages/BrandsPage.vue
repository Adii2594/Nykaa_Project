<template>
  <div class="brand-page">
    <h1>Top Cosmetic Brands & Their Products</h1>
    <div class="brands">
      <div v-for="brand in brands" :key="brand.id" class="brand-card">
        <h2>{{ brand.name }}</h2>
        <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
        <p>{{ brand.description }}</p>
        <h3>Products:</h3>
        <ul>
          <li v-for="product in brand.products" :key="product.id">
            {{ product.name }} - ${{ product.price }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const brands = ref([
  {
    id: 1,
    name: 'L\'Oréal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/L%27Or%C3%A9al_logo.svg',
    description: 'A global leader in beauty and skincare.',
    products: [
      { id: 101, name: 'L\'Oréal Paris Foundation', price: 14.99 },
      { id: 102, name: 'Revitalift Anti-Aging Cream', price: 19.99 },
    ],
  },
  {
    id: 2,
    name: 'MAC Cosmetics',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/MAC_Cosmetics_logo.svg',
    description: 'Professional makeup brand loved by artists.',
    products: [
      { id: 201, name: 'MAC Matte Lipstick', price: 19.99 },
      { id: 202, name: 'Studio Fix Powder Foundation', price: 29.99 },
    ],
  },
  {
    id: 3,
    name: 'Fenty Beauty',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Fenty_Beauty_logo.svg',
    description: 'Rihanna\'s inclusive beauty brand for all skin tones.',
    products: [
      { id: 301, name: 'Pro Filt\'r Foundation', price: 34.99 },
      { id: 302, name: 'Gloss Bomb Lip Luminizer', price: 18.99 },
    ],
  },
  {
    id: 4,
    name: 'Estée Lauder',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Est%C3%A9e_Lauder_Companies_logo.svg',
    description: 'Luxury skincare, makeup, and fragrance brand.',
    products: [
      { id: 401, name: 'Advanced Night Repair Serum', price: 78.99 },
      { id: 402, name: 'Double Wear Foundation', price: 42.99 },
    ],
  },
]);
</script>

<style scoped>
.brand-page {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}
.brands {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.brand-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.brand-logo {
  width: 100px;
  height: auto;
  margin: 10px 0;
}
</style>
