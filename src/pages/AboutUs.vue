<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero">
      <div class="overlay"></div>
      <h1 class="hero-text">About {{ company.name }}</h1>
    </div>

    <!-- About Section -->
    <div class="content">
      <p class="tagline">"{{ company.tagline }}"</p>
      <p class="description">{{ company.description }}</p>

      <!-- Offerings Section -->
      <h2 class="section-title">What We Offer</h2>
      <div class="offerings">
        <div v-for="(offer, index) in company.offerings" :key="index" class="offer-card">
          <img :src="offer.image" :alt="offer.title" class="offer-img" />
          <div class="offer-content">
            <h3 class="offer-title">{{ offer.title }}</h3>
            <p class="offer-description">{{ offer.description }}</p>
          </div>
        </div>
      </div>

      <!-- Mission, Vision, and Values -->
      <div class="info-boxes">
        <div class="info-box">
          <h3>Our Mission</h3>
          <p>{{ company.mission }}</p>
        </div>
        <div class="info-box">
          <h3>Our Vision</h3>
          <p>{{ company.vision }}</p>
        </div>
        <div class="info-box">
          <h3>Our Values</h3>
          <ul>
            <li v-for="(value, index) in company.values" :key="index">{{ value }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const company = ref({
  name: "Nykaa ",
  tagline: "Your Ultimate Beauty & Wellness Destination",
  description:
    "Nykaa is India's leading online beauty and cosmetics store, offering a wide range of skincare, haircare, and wellness products. Our platform provides authentic and high-quality beauty products from top global and Indian brands.",
  mission:
    "To make beauty accessible to everyone by offering a curated selection of the best brands, expert guidance, and a seamless shopping experience.",
  vision:
    "To become the most trusted and customer-centric beauty platform, empowering individuals to express themselves through self-care.",
  values: ["Authenticity", "Diversity", "Innovation", "Customer Satisfaction"],
  offerings: [
    {
      title: "Cosmetics & Makeup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjW43hSishm90y8cVEIbbwztwhFCt-FQLyfA&s",
      description: "Explore a wide range of lipsticks, foundations, eyeshadows, and more.",
    },
    {
      title: "Skincare & Wellness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5YfuXrbLawz0gR97Tw_BFseEAVXcTwxc-g&s",
      description: "From serums to moisturizers, shop for the best skincare essentials.",
    },
    {
      title: "Haircare & Styling",
      image: "https://t4.ftcdn.net/jpg/08/23/67/11/360_F_823671188_pdWe8aBrLPHBqKbDGxBBiQjD7odlv26d.jpg",
      description: "Shampoos, conditioners, and styling tools for all hair types.",
    },
  ],
});
</script>

<style scoped>
/* General Styles */
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 370px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjIcQ8oIvyri7GiFCHrSLp_iAJ6NFBbEDn4ISWmoCus1KJqQqp8eBAvwjKGmHRvuyAs4&usqp=CAU") 
  no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(78, 12, 62, 0.5);
  backdrop-filter: blur(3px);
}

.hero-text {
  color: #fff1f8;
  font-size: 40px;
  font-weight: bold;
  position: relative;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.3);
}

/* Content */
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.tagline {
  text-align: center;
  font-size: 22px;
  color: #ff4081;
  font-style: italic;
  font-weight: bold;
}

.description {
  text-align: center;
  font-size: 16px;
  color: #444;
  margin-top: 10px;
}

/* Offerings Section */
.section-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin: 40px 0;
}

.offerings {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.offer-card {
  width: 320px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.offer-card:hover {
  transform: scale(1.05);
}

.offer-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.offer-content {
  padding: 15px;
}

.offer-title {
  font-size: 18px;
  color: #ff4081;
  font-weight: bold;
}

.offer-description {
  font-size: 14px;
  color: #666;
}

/* Info Boxes */
.info-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

.info-box {
  width: 30%;
  background: linear-gradient(135deg, #ff4081, #c2185b);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 7px 12px rgba(88, 81, 81, 0.15);
  color: white;
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;
}

.info-box:hover {
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.25);
}

.info-box h3 {
  font-size: 22px;
  margin-bottom: 10px;
}

.info-box p,
.info-box ul {
  font-size: 14px;
}

.info-box ul {
  list-style-type: none;
  padding: 0;
}

/* Responsive Design */
@media (max-width: 900px) {
  .info-boxes {
    flex-direction: column;
    align-items: center;
  }

  .info-box {
    width: 80%;
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .hero-text {
    font-size: 32px;
  }

  .offer-card {
    width: 100%;
  }
}
</style>
