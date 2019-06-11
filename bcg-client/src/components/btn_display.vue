<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap align-center>
      <v-flex class="container">
        <div class="mainbtn btn-box1">
          <h1>Schedule</h1>
          <h3>
            click below to schedule an appointment
          </h3>
          <br>
          <v-btn color="orange darken-1" dark large bottom>Schedule</v-btn>
        </div>
        <div class="mainbtn btn-box2">
          <h1>New Patient Forms</h1>
          <h3>
            Fill out the new patient forms
          </h3>
          <br>
          <v-btn color="orange darken-1" dark large bottom>Continue</v-btn>
        </div>
        <div class="mainbtn btn-box3">
          <h1>Ask Dr. Lamm</h1>
          <h3>
            Have a question? ask dr.lamm!
          </h3>
          <br>
          <v-btn color="orange darken-1" dark large bottom>Ask</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "btn_display",
  data() {
    return {};
  }
};
</script>

<style scoped>
.mainbtn {
  position: relative;
  float: left;
  margin-bottom: 4%;
  padding-left: 10%;
  padding-right: 9.5%;
}
.btn-box1 {
  background-color: #e5a329;
  text-align: center;
}
.btn-box2 {
  background-color: #ffac11;
  text-align: center;
}
.btn-box3 {
  background-color: #ffa600;
  text-align: center;
}
.container {
  margin-left: 1%;
}
</style>
