<template>
  <div>
    <headerComponent></headerComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from "./components/header";
export default {
  name: "App",
  components: {
    headerComponent
  }
};
</script>

<style>
</style>
