<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
body {
  background-color: rgb(35, 20, 104);
  height: 100vh;
}
</style>