<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        <cart-item :item="item" @remove-from-cart="removeFromCart"></cart-item>
      </li>
    </ul>
    <p>Total Price: ${{ totalPrice }}</p>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  props: ["cartItems"],
  components: {
    CartItem,
  },
  computed: {
    totalPrice() {
      return this.cartItems
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    },
  },
  methods: {
    removeFromCart(item) {
      this.$emit("remove-from-cart", item);
    },
  },
};
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
p {
  /* Remove trailing zeros and decimal point */
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "tnum";
}
</style>
