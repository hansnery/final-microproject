<template>
  <div class="cart-item">
    <p>{{ item.name }} - ${{ item.price }}</p>
    <button @click="removeFromCart">Remove</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  item: Object,
});

const emits = defineEmits(["remove-from-cart"]);

const removeFromCart = () => {
  emits("remove-from-cart", props.item);
};
</script>

<style scoped>
.cart-item {
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
}
button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 3px 6px;
  cursor: pointer;
}
</style>
