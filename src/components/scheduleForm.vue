<template>
  <v-layout class="main">
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-toolbar flat color="#003b5c" dark>
          <v-toolbar-title>Schedule Appointment</v-toolbar-title>
        </v-toolbar>
        <template>
          <v-card flat>
            <v-snackbar v-model="snackbar" absolute top right color="success">
              <span>Submission successful!</span>
              <v-icon dark>check_circle</v-icon>
            </v-snackbar>
            <v-form ref="form" v-model="valid" @submit.prevent="submit">
              <v-container grid-list-xl fluid>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.name"
                      :rules="rules.name"
                      color="blue darken-2"
                      label="Name"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.email"
                      :rules="rules.email"
                      color="blue darken-2"
                      label="Email"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea
                      v-model="form.bio"
                      :rules="rules.bio"
                      color="blue darken-2"
                      required
                    >
                      <template v-slot:label>
                        <div>Reason For Visit</div>
                      </template>
                    </v-textarea>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      v-model="form.area"
                      :items="options"
                      :rules="rules.options"
                      color="blue darken-2"
                      label="Area of Concern"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-slider
                      class="text"
                      v-model="form.age"
                      :rules="rules.age"
                      color="blue darken-2"
                      label="Age"
                      hint="Be honest"
                      min="1"
                      max="100"
                      thumb-label
                    ></v-slider>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-actions>
                <v-btn @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="#b87333" @click="submit"
                  >Submit</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  name: "scheduleForm",
  data() {
    const defaultForm = Object.freeze({
      name: "",
      email: "",
      bio: "",
      area: "",
      age: null,
    });
    return {
      valid: true,
      form: Object.assign({}, defaultForm),
      rules: {
        age: [val => val > 0 || "This field is required"],
        options: [val => (val || "").length > 0 || "This field is required"],
        name: [val => (val || "").length > 0 || "This field is required"],
        bio: [val => (val || "").length > 0 || "This field is required"],
        email: [
          val => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(val) || "Invalid e-mail.";
          }
        ]
      },
      options: [
        "General",
        "Procedures",
        "Annual Check-in",
        "Referals",
        "Other"
      ],
      snackbar: false,
      defaultForm
    };
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    validate () {
        this.$refs.form.validate()
      },
    submit() {
        this.validate();
        if (this.valid) {
          this.snackbar = true;
          axios.post("/ask", {
            data: this.form
          });
          this.resetForm();
        }
      }
  }
};
</script>
<style scoped>
.main {
  margin-top: 10%;
}
.form-title {
  text-align: center;
}
.formLine {
  max-width: 70%;
  margin-left: 5%;
}
.v-text-field,
.text {
  font-weight: bold;
}
</style>
