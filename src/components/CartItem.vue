<template>
  <!-- CartItem component -->
  <div class="cart-item">
    <!-- Display item name and price -->
    <p>{{ item.name }} - ${{ item.price }}</p>
    <!-- Button to remove item from cart -->
    <button @click="removeFromCart">Remove</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Define props received from parent component
const props = defineProps({
  item: Object,
});

// Define emits for custom events
const emits = defineEmits(["remove-from-cart"]);

// Method to emit remove-from-cart event
const removeFromCart = () => {
  // Emit custom event to notify parent component about removal of item
  emits("remove-from-cart", props.item);
};
</script>

<style scoped>
/* Scoped styles for cart-item component */
.cart-item {
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  color:black;
}
/* Style for remove button */
button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 3px 6px;
  cursor: pointer;
}
</style>
