<template>
  <!-- Product component -->
  <div class="product">
    <!-- Product image -->
    <img :src="product.image" :alt="product.name" class="product-image" />
    <!-- Product name -->
    <h3>{{ product.name }}</h3>
    <!-- Product description -->
    <p>{{ product.description }}</p>
    <!-- Product price -->
    <p>Price: ${{ product.price }}</p>
    <!-- Button to add product to cart -->
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
// Importing necessary functions from Vue
import { defineProps, defineEmits } from "vue";

// Define props passed from parent component
const props = defineProps({
  product: Object, // Accepts an object as a prop
});

// Define emits for custom events
const emit = defineEmits(["add-to-cart"]);

// Method to emit add-to-cart event
const addToCart = () => {
  emit("add-to-cart", props.product); // Emitting 'add-to-cart' event with the product as payload
};
</script>

<style scoped>
/* Styling for the product component */
.product {
  border: 1px solid #ccc; /* Border around the product */
  padding: 10px; /* Padding inside the product */
  text-align: center; /* Center-align the content */  
  color: black;
}

/* Styling for the product image */
.product-image {
  width: 200px; /* Set a fixed width for the image */
  height: auto; /* Maintain aspect ratio for the image */
  margin-bottom: 10px; /* Add margin at the bottom of the image */
}
</style>
