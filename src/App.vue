<script setup lang="ts">
import { ref } from "vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
import CartItem from "./components/CartItem.vue";

const products = [
  // Existing products
  {
    name: "Classic Cheeseburger",
    description:
      "A juicy beef patty topped with melted cheese, lettuce, tomato, onions, pickles, and special sauce.",
    price: 8.99,
  },
  {
    name: "Bacon Deluxe Burger",
    description:
      "Our classic cheeseburger topped with crispy bacon strips for extra flavor.",
    price: 10.99,
  },
  {
    name: "Veggie Burger",
    description:
      "A delicious plant-based patty served with lettuce, tomato, onions, pickles, and vegan mayo.",
    price: 9.99,
  },
  {
    name: "Double BBQ Burger",
    description:
      "Two beef patties smothered in BBQ sauce, topped with cheddar cheese, crispy onions, and lettuce.",
    price: 12.99,
  },
  // New milkshake products
  {
    name: "Chocolate Milkshake",
    description:
      "A creamy chocolate milkshake topped with whipped cream and chocolate syrup.",
    price: 5.99,
  },
  {
    name: "Strawberry Milkshake",
    description:
      "A refreshing strawberry milkshake made with fresh strawberries and topped with whipped cream.",
    price: 6.49,
  },
];

const cartItems = ref([]);

const addToCart = (item) => {
  cartItems.value.push(item);
};

const removeFromCart = (item) => {
  cartItems.value = cartItems.value.filter((i) => i !== item);
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <!-- Logo -->
    <a href="#" onclick="return false;" target="_blank">
      <img
        src="./assets/images/burger.png"
        class="logo"
        alt="Best Burger logo"
      />
    </a>

    <!-- Title -->
    <h1 class="title">Best Burger</h1>

    <!-- Grid layout for products -->
    <div class="product-grid">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>

    <Cart :cartItems="cartItems" @remove-from-cart="removeFromCart" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* Navbar */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;
}
.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.navbar ul li {
  display: inline;
  margin-right: 20px;
}
.navbar ul li a {
  color: #fff;
  text-decoration: none;
}

/* Title */
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
}
</style>
