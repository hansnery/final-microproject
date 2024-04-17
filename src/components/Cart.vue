<template>
  <!-- Cart component -->
  <div class="cart">
    <!-- Title -->
    <h2>Shopping Cart</h2>
    <!-- List of cart items -->
    <ul>
      <!-- Loop through cart items -->
      <li v-for="(item, index) in cartItems" :key="index">
        <!-- Render CartItem component for each item -->
        <cart-item :item="item" @remove-from-cart="removeFromCart"></cart-item>
      </li>
    </ul>
    <!-- Display total price -->
    <p>Total Price: ${{ totalPrice }}</p>

    <router-link :to="{name: 'Checkout', params: { item: cartItems }}">Checkout</router-link>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  // Props received from parent component
  props: ["cartItems"],
  // Register CartItem component
  components: {
    CartItem,
  },
  // Computed property to calculate total price
  computed: {
    totalPrice() {
      // Reduce method to sum up prices of all items in the cart and format to two decimal places
      return this.cartItems
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    },
  },
  // Methods to handle actions in the cart
  methods: {
    // Method to remove item from cart
    removeFromCart(item) {
      // Emit custom event to notify parent component about removal of item
      this.$emit("remove-from-cart", item);
    },
  },
};
</script>

<style scoped>
/* Scoped styles for cart component */
.cart {
  border: 1px solid #ccc;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

/* Style for total price paragraph */
p {
  /* Remove trailing zeros and decimal point for better visual appearance */
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "tnum";
}
</style>
