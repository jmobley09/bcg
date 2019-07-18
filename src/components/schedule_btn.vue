<template>
  <v-layout row wrap align-center>
    <v-flex class="flex-container">
      <div v-bind:class="[activeClass]">
        <h1>Online</h1>
        <v-icon size="100" dark>desktop_mac</v-icon>
        <h3>click below to schedule online</h3>
        <br />
        <v-btn
          color="#b87333"
          dark
          large
          bottom
          @click="$router.push({ name: 'online' })"
          >Continue</v-btn
        >
      </div>
      <div v-bind:class="[activeClass]">
        <h1>Phone</h1>
        <v-icon size="100" dark>call</v-icon>
        <h3>call now to schedule on the Phone</h3>
        <br />
        <v-btn color="#b87333" dark large bottom>(602) 493-6626</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "schedule_btn",
  data() {
    return {
      activeClass: "item"
    };
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  align-items: stretch;
  align-content: stretch;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 5%;
}
.item {
  background-color: #003b5c;
  color: white;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 5%;
  margin: 1%;
  flex-grow: 1;
}
</style>
