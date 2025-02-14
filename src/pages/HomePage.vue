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

    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = ref([
  'https://images-static.nykaa.com/uploads/a63e79b0-c79a-4a83-a324-30ade1202bd7.jpg?tr=cm-pad_resize,w-600',
  'https://images-static.nykaa.com/uploads/922faeea-fa45-4e14-97eb-e300f9e5c4a2.jpg',
  'https://www.shopickr.com/wp-content/uploads/2015/06/nykaa-makeup-sale-9-10-2015-offers.jpg',
  'https://www.analyticssteps.com/backend/media/thumbnail/6743613/7557273_1606234814_nyka.jpg',
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
  height: 90vh;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(12, 36, 116, 0.3);
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
  box-shadow: 10px 10px 10px 10px blue;
}

</style>
  