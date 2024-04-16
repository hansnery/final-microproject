<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price.toFixed(2) }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
