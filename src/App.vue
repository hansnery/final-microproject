<template>
  <!-- Main container for the app -->
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#">Menu</a></li>
        <li><router-link to="/About">About Us</router-link></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <RouterView></RouterView>
  </div>
</template>

<style>
/* Navbar styles */
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
</style>