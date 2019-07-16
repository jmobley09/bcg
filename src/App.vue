<template>
  <v-app>
    <NavBar></NavBar>
    <v-divider></v-divider>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <bottom></bottom>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import bottom from "@/components/bottom";

export default {
  name: "App",
  components: {
    NavBar,
    bottom
  }
};
</script>

<style>

</style>
