<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap align-center>
      <v-flex class="flex-container">
        <div v-bind:class="[activeClass]">
          <h1>Schedule</h1>
          <v-icon size="100" color="#003B5C">date_range</v-icon>
          <h3>
            click below to schedule an appointment
          </h3>
          <br>
          <v-btn color="#b87333" dark large bottom @click="$router.push({ name: 'schedule' })">Schedule</v-btn>
        </div>
        <div v-bind:class="[activeClass]">
          <h1>New Patient Forms</h1>
           <v-icon size="100" color="#003B5C">assignment</v-icon>
          <h3>
            Fill out the new patient forms
          </h3>
          <br>
          <v-btn color="#b87333" dark large bottom @click="$router.push({ name: 'forms' })">Continue</v-btn>
        </div>
        <div v-bind:class="[activeClass]">
          <h1>Ask Dr. Lamm</h1>
           <v-icon size="100" color="#003B5C">feedback</v-icon>
          <h3>
            Have a question? ask dr.lamm!
          </h3>
          <br>
          <v-btn color="#b87333" dark large bottom @click="$router.push({ name: 'ask' })">Ask</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "btn_display",
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
  color: #003B5C;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  padding-bottom: 2%;
  margin: 1%;
  flex-grow: 1;
}
</style>
