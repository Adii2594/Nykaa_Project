<template>
  <div class="luxury-container">
    <!--Section 1: Top Brands logo-->
    <h1 class="title">Top Luxury Brands</h1>
    <div class="brand-list">
      <div v-for="brand in brands" :key="brand.id" class="brand-card">
        <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
      </div>
    </div>

    <!--Section 2: Product List-->
    <h2 class="product-title">Top Brand Products</h2>
    <div class="product-grid">
      <div v-for="product in allProducts" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p class="brand-name">{{ product.brand }}</p>
        <p class="price">${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Brand & Product Data
const brands = ref([
  {
    id: 1,
    name: "L'Oréal",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Loreal-Logo.jpg",
    products: [
      { id: 101, name: "Paris Foundation", price: 14.99, brand: "L'Oréal", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_f5HTzWd8mRE1IRVv1C1cGfaWurl-h3cow&s" },
      { id: 102, name: "L'Oréal Shampoo", price: 19.99, brand: "L'Oréal", 
      image: "https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg" },
    ],
  },
  {
    id: 2,
    name: "MAC Cosmetics",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHosyVxp3YcTG_H9v1wExI9AF5Bd3rNnYHIg&s",
    products: [
      { id: 201, name: "Matte Lipstick", price: 19.99, brand: "MAC Cosmetics", 
      image: "https://images.squarespace-cdn.com/content/v1/5c34764c297114ca20d6777b/e0491b06-0c43-4922-b543-e0b1f49d6c7a/Media+Banner.jpg" },
      { id: 202, name: "Studio Fix Powder", price: 29.99, brand: "MAC Cosmetics", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5nyZCUw0EbuvhEgmJ4VIFawqqSLZ6ThZSA&s" },
    ],
  },
  {
    id: 3,
    name: "Fenty Beauty",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GQAOh2n_uEBKvjqgOjZ1SC4ScEbupw__8L7mQ2UwewueqCZabuL7XpDm5IMXy-UqKdY&usqp=CAU",
    products: [
      { id: 301, name: "Pro Filt'r Foundation", price: 34.99, brand: "Fenty Beauty", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKeGzUf1-97lDwm-7LmMmG6zEqW2UMuQuzg&s" },
      { id: 302, name: "Gloss Bomb Luminizer", price: 18.99, brand: "Fenty Beauty", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHQZ0azKzcQQBbxvCLUT1eotMI198bICU2Q&s" },
    ],
  },
  {
    id: 4,
    name: "Estée Lauder",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRaZg-WV9GljeBJOn99R7qSI8uWgv3-8ZuA&s",
    products: [
      { id: 401, name: "Night Repair Serum", price: 78.99, brand: "Estée Lauder", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVyn3xgCVIa7X9IkIZbcVBgeRBknh4kp4UHiJanwuELabIa4NwsbqWdsKuleKxVqq4is&usqp=CAU" },
      { id: 402, name: "Double Wear Foundation", price: 42.99, brand: "Estée Lauder", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC50dAaNPIZEI9Triao4zNilBg2eoUf9N1w&s" },
    ],
  },
  {
    id: 5,
    name: "YSL",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZIi07MQPbzC2l1UaVeTB-fpHd59s7-W2_A&s",
    products: [
      { id: 401, name: "YSL Heels", price: 78.99, brand: "YSL", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtThBt-f-SeKP0cTaDrLX88mx-1jsnyrEZQ&s" },
      { id: 402, name: "YSL Shine Lipstick", price: 42.99, brand: "YSL", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHf4UZt8OZrMwi1XSudCVNdbo68dtI3HjUdonSb__DmNQPQiF1gJPba5TgJcd9CKbehc&usqp=CAU" },
    ],
  },
  {
    id: 6,
    name: "Givenchy",
    logo: "https://www.vhv.rs/dpng/d/545-5458266_givenchy-pi-air-eau-de-toilette-spray-givenchy.png",
    products: [
      { id: 401, name: "volume disturbia mascara ", price: 78.99, brand: "Givenchy", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzWnLd3_3bixuDtUzXvO8-xGaxr-WHbbchA&s" },
      { id: 402, name: "Le Soin Noir Cream", price: 42.99, brand: "Givenchy", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBq7iVg8eCNXzUwjW0smDegPCXBq0LrlFxg&s" },
    ],
  },
  {
    id: 7,
    name: "Insight",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYtCCRSbgmc4EBDno4EKVWHxB7TJbieurSD6EVI-81LygyLa5j1LHtWNwKkJc5s73nVM&usqp=CAU",
    products: [
      { id: 401, name: "Insight Primer", price: 78.99, brand: "Insight", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VoMoC61DPZLwIWDL7fgObcATs1vxhxgV3kMbBkAaUJwBQinXcO6aFXEXaAy_MeJfs6k&usqp=CAU" },
      { id: 402, name: "Concealer Palette ", price: 42.99, brand: "Insight", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMY-hkYnQp24-884YdwYYT9PmKRSUraY62FXVZz0a9gwpz31eDLIcULC5m0pf_-nbZ__0&usqp=CAU" },
    ],
  },
]);

//Extract all products from brands
const allProducts = computed(() => {
  return brands.value.flatMap((brand) => brand.products);
});
</script>

<style scoped>
/* Main Container */
.luxury-container {
  text-align: center;
  padding: 40px 20px;
  background: #f8f8f8;
  font-family: 'Poppins', sans-serif;
}

/* Section 1: Top Brands */
.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #333;
  text-transform: uppercase;
}

/* Brand List */
.brand-list {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 15px;
  justify-content: center;
  scroll-behavior: smooth;
  white-space: nowrap;
}

/* Hide Scrollbar */
.brand-list::-webkit-scrollbar {
  display: none;
}

/* Logo Box */
.brand-card {
  flex: 0 0 auto;
  padding: 15px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border: 1px solid #e0e0e0;
}

/* Hover Effect */
.brand-card:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-6px);
}

/* Brand Logo */
.brand-logo {
  width: 90px;
  height: auto;
  transition: transform 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.1);
}

/* Section 2: Product List */
.product-title {
  margin-top: 40px;
  font-size: 26px;
  font-weight: 600;
  color: #444;
  text-transform: uppercase;
}

/* Product Grid */
.product-grid {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 20px;
}

/* Product Card */
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  background: white;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.12);
  text-align: center;
  width: 220px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover Effect */
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

/* Product Image */
.product-image {
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* Price */
.price {
  font-weight: bold;
  color: #ff4081;
  font-size: 18px;
}

/* Brand Name */
.brand-name {
  font-size: 14px;
  color: gray;
}

</style>
