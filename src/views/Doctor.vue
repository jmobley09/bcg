<template>
  <div class="container">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">About Dr. Lamm</h2>
              <br>
              <div class="text">{{ card_text }}</div>
              <br>
              <div class="text">{{ card_text2 }}</div>
              <br>
              <div class="text">{{ card_text3 }}</div>
              <br>
              <div class="text">{{ card_text4 }}</div>
              <br>
              <br>
              <h3 class="headline mb-0">Articles</h3>
              <br>
              <div>{{ footer }}</div>
            </div>
          </v-card-title>

          <v-card-actions class="flex">
            <v-btn flat dark color="#DAA520">Bladder Cancer</v-btn>
            <v-btn flat dark color="#DAA520">Prostate Cancer</v-btn>
            <v-btn flat dark color="#DAA520">Kindey Cancer</v-btn>
            <v-btn flat dark color="#DAA520">Testis Cancer</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "drlamm",
  data() {
    return {
      card_text:
      `During his urology residency he developed an animal model for bladder cancer and found that Bacillus Calmette Guerin (the TB vaccine, BCG) inhibited tumor growth. After residency he and his family moved to San Antonio where Don began his academic career
      as Assistant Professor of Surgery at the University of Texas Health Sciences Center. During his 9 years in Texas he rose in rank to Professor and Acting Chairman of the Division of Urology. His VA and NIH research resulted in clinical studies that led to
      the FDA approval of BCG for bladder cancer.`,
      card_text2:
      ` Subsequent work by Dr. Lamm, then Chairman of the Department of Urology at West Virginia University, demonstrated that BCG immunotherapy is superior to Adriamycin and Mitomycin C chemotherapy for superficial bladder cancer, significantly reducing the
      risk of bladder cancer progression to muscle invasion and metastasis. Dr. Lamm's work is in part responsible for bladder cancer being one of only 5 cancers in the United States that has seen a reduced mortality despite an increased incidence. This
      reduction in mortality coincides with a reduction in the number of patients who lose their bladder as a result of radical cystoprostatectomy for muscle invasive or aggressive superficial disease.`,
      card_text3:
      ` Three years ago Don was recruited to the Mayo Clinic, Scottsdale as Vice Chair for Research in the Department of Urology. Having practiced and taught general urology for 3 decades, he has now decided to limit his practice exclusively to his primary
      interest, urologic oncology. New to private practice, he greatly appreciates the good advice, help and welcome he has received from the private community. He is excited about the potential of expanding research in the private sector and hopes to establish
      a cooperative research consortium in Arizona to advance the care of patients with genitourinary cancers.`,
      card_text4:
      `Dr. Lamm has authored over 270 peer-reviewed medical and scientific articles, and in addition to new treatments of bladder cancer he has developed new approaches to the treatment of renal and prostate cancer as well. His primary interest, however,
      continues to be BCG therapy of bladder cancer.`,
      footer:
      `Dr. Lamm has authored over 270 peer-reviewed medical and scientific articles and has more than 30 years of experience in the treatment of:`
      };
  }
};
</script>

<style scoped>
  .headline {
    text-align: center;
    text-decoration: underline;
  }
  .container {
    background-color: antiquewhite;
    max-width: 100%;
  }
  .text {
    text-indent: 2%;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
