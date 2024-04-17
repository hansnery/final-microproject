<script setup lang="ts">
// Import necessary functions from Vue
import { ref } from "vue";
// Import components
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";
// Import CartItem component
import CartItem from "../components/CartItem.vue";

// Define array of products with their details
const products = [
  // Existing products with images
  {
    name: "Classic Cheeseburger",
    description:
      "A juicy beef patty topped with melted cheese, lettuce, tomato, onions, pickles, and special sauce.",
    price: 8.99,
    image: "./src/assets/images/classic_cheeseburger.jpg",
  },
  {
    name: "Bacon Deluxe Burger",
    description:
      "Our classic cheeseburger topped with crispy bacon strips for extra flavor.",
    price: 10.99,
    image: "./src/assets/images/bacon_deluxe_burger.jpg",
  },
  {
    name: "Veggie Burger",
    description:
      "A delicious plant-based patty served with lettuce, tomato, onions, pickles, and vegan mayo.",
    price: 9.99,
    image: "./src/assets/images/veggie_burger.png",
  },
  {
    name: "Double BBQ Burger",
    description:
      "Two beef patties smothered in BBQ sauce, topped with cheddar cheese, crispy onions, and lettuce.",
    price: 12.99,
    image: "./src/assets/images/double_bbq_burger.png",
  },
  // New milkshake products with images
  {
    name: "Chocolate Milkshake",
    description:
      "A creamy chocolate milkshake topped with whipped cream and chocolate syrup.",
    price: 5.99,
    image: "./src/assets/images/chocolate_milkshake.png",
  },
  {
    name: "Strawberry Milkshake",
    description:
      "A refreshing strawberry milkshake made with fresh strawberries and topped with whipped cream.",
    price: 6.49,
    image: "./src/assets/images/strawberry_milkshake.png",
  },
];

// Create a reactive reference for the cart items
const cartItems = ref([]);

// Method to add item to the cart
const addToCart = (item) => {
  cartItems.value.push(item);
};

// Method to remove item from the cart
const removeFromCart = (item) => {
  cartItems.value = cartItems.value.filter((i) => i !== item);
};
</script>

<template>
    <!-- Logo -->
    <a href="#" onclick="return false;" target="_blank">
      <img
        src="../assets/images/burger.png"
        class="logo"
        alt="Best Burger logo"
      />
    </a>

    <!-- Title -->
    <h1 class="title">Best Burger</h1>

    <!-- Grid layout for products -->
    <div class="product-grid">
      <!-- Loop through products and render Product component for each -->
      <Product
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>

    <!-- Render Cart component with cart items and remove-from-cart event handler -->
    <Cart :cartItems="cartItems" @remove-from-cart="removeFromCart" />
</template>

<style scoped>
/* Scoped styles for logo */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
/* Hover effect for logo */
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
/* Hover effect for logo in Vue components */
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* Styling for product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* Title styles */
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
}
</style>
