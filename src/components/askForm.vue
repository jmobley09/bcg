<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <template>
          <v-card flat>
            <v-snackbar v-model="snackbar" absolute top right color="success">
              <span>Submission successful!</span>
              <v-icon dark>check_circle</v-icon>
            </v-snackbar>
            <v-snackbar v-model="bad_snackbar" absolute top right color="warning">
              <span>Submission error!</span>
              <v-icon dark>check_circle</v-icon>
            </v-snackbar>
            <v-form ref="form" @submit.prevent="submit">
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
                      v-model="form.question"
                      :rules="rules.question"
                      color="blue darken-2"
                      required
                    >
                      <template v-slot:label>
                        <div>Question</div>
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
                <v-btn flat @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="!formIsValid" flat color="primary" type="submit">Submit</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
</template>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    const defaultForm = Object.freeze({
      name: "",
      email: "",
      question: "",
      area: "",
      age: ""
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [val => val < 10 || `I don't believe you!`],
        options: [val => (val || "").length > 0 || "This field is required"],
        name: [val => (val || "").length > 0 || "This field is required"],
        question: [val => (val || "").length > 0 || "This field is required"],
        email: [
          val => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(val) || "Invalid e-mail.";
          }
        ]
      },
      options: ["General", "Procedures", "Scheduling", "Referals", "Other"],
      snackbar: false,
      bad_snackbar: false,
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return this.form.name && this.form.email && this.form.question;
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.submission();
    },
    async submission() {
      let submission = await axios
        .post(" http://127.0.0.1:8000/askapi/", this.form)
        .catch(response => {
          let object = Object.values(response);
          console.log(object);

          if (object[2].status == 400) {
            this.bad_snackbar = true;
            console.log("bad request");
          }
        });
      this.formMessage(submission);
      return submission;
    },
    formMessage(submission) {
      if (submission.status == 201) {
        this.resetForm();
        this.snackbar = true;
      } else {
        this.snackbar = true;
        console.log(submission.status);
      }
    }
  }
};
</script>
<style scoped>
.formLine {
  max-width: 70%;
  margin-left: 5%;
}
.v-content__wrap {
  background-color: orange;
}
</style>