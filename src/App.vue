

<template>
  <SideBar/>
  <Header/>
  <main id="main">
    <RouterView/>
  </main>
  <CartBtnLoader/>
  <Footer/>
</template>
<script setup>

import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
import CartBtnLoader from './components/CartBtnLoader.vue';
import Footer from './components/Footer.vue';

</script>

<style scoped>

</style>
