import { createApp } from "vue";
import App from "./App.vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
import "./style.css";
import App from "./App.vue";

// Create the Vue application
createApp(App).mount("#app");

// Register the components globally
App.component("Product", Product);
App.component("Cart", Cart);
