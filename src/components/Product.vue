<template>
  <div class="product">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <!-- Button to add product to cart -->
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Define props passed from parent component
const props = defineProps({
  product: Object,
});

// Define emits for custom events
const emit = defineEmits(["add-to-cart"]);

// Method to emit add-to-cart event
const addToCart = () => {
  emit("add-to-cart", props.product);
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.product-image {
  width: 200px; /* Set a fixed width */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 10px;
}
</style>
