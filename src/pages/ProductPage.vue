<template>
  <div class="product-list">
    <div class="product" v-for="(product, index) in products" :key="index">
      <div class="image-container">
        <img :src="product.image" :alt="product.name" class="product-image" />
      </div>
      <div class="product-info">
       <h2>{{ product.name }}</h2> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      // Sample product data
      products: [
        {
          name: "Nykaa Matte Lipstick",
          image: "https://images-static.nykaa.com/media/catalog/product/0/d/0dc21ecNYKAC00000079-az_6.jpg?tr=w-500",
        },
        {
          name: "Nykaa Matte Nailpaint",
          image: "https://i.pinimg.com/736x/22/30/70/223070edf077158b0f87191eb838602b.jpg",
        },
        {
          name: "Nykaa Eyeshadow Palette",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZw8vSMddav8G_avMCSMHyrgZhTCQL1hsDw&s",
        },
        {
          name: "Nykaa Fit Me Foundation",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8-dQEWec8tDNpjJf_QIXXECzPtZLzvRU9w&s", 
        },
        {
          name: "Nyakaa 24/7 Kajal",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9KiP_UjIkmL9N05Q8M5v5yd-sZvhLmymKQ&s", 
        },
        {
          name: "Nykaa Makeup Kit",
          image: "https://images-static.nykaa.com/media/catalog/product/6/e/6e94760IBAHA00000090_2.jpg?tr=w-500", 
        },
        {
          name: "Cetaphil Skin Cleanser",
          image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue323/Himalayan-HempOI.jpg",
        },
        {
          name: "Nykaa Lip Linear",
          image: "https://adn-static1.nykaa.com/media/wysiwyg/8904245709105_topbanner.jpg?tr=w-400,pr-true",
        },
        {
          name: "Nykaa Anti-Hairfall Shampoo",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0Wzu1TY1K0eUhWOnk0rGSJL0CgM6MABlpg&s",
        },
        {
          name: "Nykaa Contour Brush",
          image: "https://m.media-amazon.com/images/I/717GzR2ODrL.jpg",
        },
        {
          name: "Nykaa Face Wash",
          image: "https://m.media-amazon.com/images/I/811yBylnuoL.jpg",
        },
        {
          name: "Nykaa Primer",
          image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/2024/10/YUG-Banner.jpg",
        },
        {
          name: "MAC Velvet Teddy Lipstick",
          image: "https://indiatechdesk.com/wp-content/uploads/2020/11/nykaa-2.jpg",
        },
        {
          name: "Nykaa Hydro Boost Moisturizer",
          image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue275/FACE-OILS-101_OI.jpg",
        },
        {
          name: "Nykaa Absolute Compact Powder",
          image: "https://m.media-amazon.com/images/I/31Xl8IobZsL.jpg",
        },
        {
          name: "L'Oréal Paris Kajal Eyeliner",
          image: "https://images-static.nykaa.com/media/catalog/product/2/a/2a24ca28904245700850_rev1.jpg",
        },
        {
          name: "Nyakaa Matte Nailpaint",
          image: "https://images-static.nykaa.com/media/catalog/product/b/4/b4ede038904245706968_8.jpg?tr=w-500",
        },
        {
          name: "Nykaa Makeup Kit",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_luov0kCeBCUwsKfeln3cUu-q4OK6kkUo8Q&s",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
  box-shadow: 5px 5px 5px 0px rgb(99, 99, 99);
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


</style>

