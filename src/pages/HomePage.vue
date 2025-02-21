<template>
  <!-- Image Slider -->
  <main>
    <div class="slider">
      <button @click="prevSlide" class="nav-button left" style="width: 100px;">Prev</button>
      <div class="image-wrapper">
        <img :src="images[currentIndex]" alt="Image Slider" class="slider-image" />
      </div>
      <button @click="nextSlide" class="nav-button right" style="width: 100px; position: absolute;">Next</button>
    </div>
    <!-- Featured Products Section -->
    <section class="products">
      <h1>Shop by Category</h1>
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <img :src="product.image" alt="Product" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <button class="product-button">Buy Now</button>
        </div>
      </div>
    </section>
    <!--seller section-->
    <section class="sellers">
      <h1>Best Sellers</h1>
      <div class="seller-grid">
        <div class="seller-card" v-for="(seller, index) in sellers" :key="index">
          <img :src="seller.image" alt="seller" />
          <h3>{{ seller.name }}</h3>
          <button class="seller-button">Visit Now</button>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = ref([
  'https://images-static.nykaa.com/uploads/a34feca7-b919-4917-be04-518122356cfd.gif',
  'https://digitalscholar.in/wp-content/uploads/2022/05/janhvi-kapoor-nykaa-dicount.gif',
  'https://images-static.nykaa.com/uploads/e011eada-d734-443b-9469-b3c5a9081766.gif',
  'https://images-static.nykaa.com/uploads/922faeea-fa45-4e14-97eb-e300f9e5c4a2.jpg',
  'https://www.analyticssteps.com/backend/media/thumbnail/6743613/7557273_1606234814_nyka.jpg',
]);

const products = ref([
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwYjswGD4rymXyLgYdywPQdoBMwArj5CQXKkHZ1txt-Inudisc0Qg3ykKIWpSf5OTg7c&usqp=CAU',
    name: 'Lipstick Matte',
    price: '$19.99',
  },
  {
    image: 'https://adn-static2.nykaa.com/media/wysiwyg/2019/a+/12-4-19/1topbanner.jpg?tr=w-400,pr-true',
    name: 'Foundation Cream',
    price: '$24.99',
  },
  {
    image: 'https://adn-static1.nykaa.com/media/wysiwyg/Ebony_Top-Banner.jpg?tr=w-400,pr-true',
    name: 'Eyeliner Pen',
    price: '$14.99',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf3vFDeJ_MRU4l3Zv_BiY2zaYxYsrrU-sRA&s',
    name: 'SkinCare',
    price: '$45.50',
  },
  {
    image: 'https://perfumania.com/cdn/shop/articles/Does_Perfume_Expire.webp?v=1716238844',
    name: 'Perfume',
    price: '$40',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUixNm2hwNTRYIZfspfPWzFoyKyx7qeYUFw&s',
    name: 'Charm & Blend',
    price: '$34.99',
  },
]);

const sellers = ref([
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_y5wYbLyf0AYAOl1khcn_Ir0da6RaDR21Bg&s',
    name: 'Huda Beauty Eyeshadow Palette',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLwtH6B2roN_nR0W6Ya7I8EFhBUwRDpfYgg&s',
    name: 'Dior Sauvage Perfume',
  },
  {
    image: 'https://i.ebayimg.com/images/g/4JAAAOSwL6Bl42c9/s-l400.jpg',
    name: 'L’Oréal Paris True Match Foundation',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrbcZGR1jKZZIFM8pMiNVsHLtDJVqB2imeQ&s',
    name: 'Lakmé Eyeconic Kajal',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26SQuQ7tTGkAx9ociDTMOspobmQBhsJX9YA&s',
    name: 'Dove Hair Therapy',
  },
]);
const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length; // Prevents negative index
};

onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
/* General Styles */


/* Image Slider */
.slider {
  position:relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgb(136, 152, 153);
  /* margin: auto; */
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  margin-top: -31px;
}

.nav-button {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
.slider-image {
  box-shadow: 10px 10px 10px 10px rgb(3, 3, 41);
}

/* product */
.products {
  text-align: center;
  padding: 45px;
}

.product-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 10px 20px rgba(31, 30, 30);
}

.product-card {
  width: 200px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
}

.product-card img {
  width: 100%;
  border-radius: 5px;
  height: 92px;
}

.product-button {
  background: #ff4081;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}


/* Seller */
.sellers {
  text-align: center;
  padding: 50px;
}

.seller-grid {
  display: flex;
  justify-content: center;
  gap: 23px;
  box-shadow: 0px 10px 20px rgb(31, 30, 30);
}

.seller-card {
  width: 200px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
}

.seller-card img {
  width: 100%;
  border-radius: 5px;
  height: 120px;
}

.seller-button {
  background: #09a104;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

</style>
  