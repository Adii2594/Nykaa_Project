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
        <h1 style="color: black; margin-bottom: 10px;">Shop by Category</h1>
        <div class="product-grid">
          <div class="product-card" v-for="(product, index) in products" :key="index">
            <img :src="product.image" alt="Product" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <button class="product-button" @click="goToProductPage">Buy Now</button>
          </div>
        </div>
      </section>
      <!--seller section-->
      <section class="sellers">
        <h1 style="color: black; margin-bottom: 10px;">Best Sellers</h1>
        <div class="seller-grid">
          <div class="seller-card" v-for="(seller, index) in sellers" :key="index">
            <img :src="seller.image" alt="seller" />
            <h3>{{ seller.name }}</h3>
            <button class="seller-button" @click="goToBrandsPage">Visit Now</button>
          </div>
        </div>
      </section>
  
    </main>
  </template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const images = ref([
  'https://images-static.nykaa.com/uploads/a34feca7-b919-4917-be04-518122356cfd.gif',
  'https://digitalscholar.in/wp-content/uploads/2022/05/janhvi-kapoor-nykaa-dicount.gif',
  'https://images-static.nykaa.com/uploads/ef2d18a6-50bd-406f-af90-41f11d4915a3.gif',
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
  {
    image: 'https://images-static.nykaa.com/uploads/cc93e5cd-b47c-4482-8af5-c4206454c6a7.jpg',
    name: 'Matte Nailpaint',
    price: '$10',
  },
  {
    image: 'https://res.cloudinary.com/dyqcevdpm/image/upload/v1612596460/new-website/Compressed%20Images/img_product_banner2_mobile.jpg',
    name: 'HairCare',
    price: '$30',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNbTAO4cgy6rrZ5JNvcs1JOrrPDfRByxwnQ&s',
    name: 'Organic Product',
    price: '$24.99',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqjWHiuwSxqMqVQGBId5DxqzESP10vfIDgQ&s',
    name: 'Accessories',
    price: '$40',
  },
]);

const sellers = ref([
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_y5wYbLyf0AYAOl1khcn_Ir0da6RaDR21Bg&s',
    name: 'Huda Beauty Eyeshadow Palette',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLwtH6B2roN_nR0W6Ya7I8EFhBUwRDpfYgg&s',
    name: 'Dior’s Sauvage Perfumes',
  },
  {
    image: 'https://i.ebayimg.com/images/g/4JAAAOSwL6Bl42c9/s-l400.jpg',
    name: 'L’Oréal Paris True Match Foundation',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrbcZGR1jKZZIFM8pMiNVsHLtDJVqB2imeQ&s',
    name: 'Lakme’s Eyeconic  Kajal',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26SQuQ7tTGkAx9ociDTMOspobmQBhsJX9YA&s',
    name: 'Dove Advance HairCare',
  },
]);

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 2000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const goToBrandsPage = () => {
  router.push('/brands');
};

const goToProductPage = () => {
    router.push('/products');
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

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
  
 /* Products Section */
.products {
  text-align: center;
  padding: 50px 20px;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

/* Product Card */
.product-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

/* Product Image */
.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

/* Product Button */
.product-button {
  background: #ff4081;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;
}

.product-button:hover {
  background: #e03572;
}

/* Seller Section */
.sellers {
  text-align: center;
  padding: 50px 20px;
  background: #f9f9f9;
}

/* Seller Grid */
.seller-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive */
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

/* Seller Card */
.seller-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.seller-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.seller-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

/* Seller Button */
.seller-button {
  background: #09a104;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;
}

.seller-button:hover {
  background: #067c02;
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-grid,
  .seller-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-grid,
  .seller-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}


</style>
    