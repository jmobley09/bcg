<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap align-center>
      <v-flex class="flex-container">
        <div v-bind:class="[activeClass]">
          <h1>Online</h1>
          <v-icon size="100" dark>desktop_mac</v-icon>
          <h3>
            click below to schedule online
          </h3>
          <br>
          <v-btn color="orange darken-1" dark large bottom @click="$router.push({ name: 'schedule' })">Continue</v-btn>
        </div>
        <div v-bind:class="[activeClass]">
          <h1>Phone</h1>
           <v-icon size="100" dark>call</v-icon>
          <h3>
            click below to schedule on the Phone
          </h3>
          <br>
          <v-btn color="orange darken-1" dark large bottom >(602) 493-6626 </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
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
}
.item {
  background-color: orange;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  margin: 1%;
  flex-grow: 1;
}
</style>
