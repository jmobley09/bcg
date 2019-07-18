<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Terms of Use</v-card-title
        >

        <v-card-text>
          By submitting my question to Ask Dr. Lamm service offered by BCG
          Oncology, P.C., I agree to abide by the terms and conditions posted on
          www.bcgoncology.com, including particularly the terms and conditions
          described below.
          <br />
          <br />I acknowledge and agree:
          <br />
          <br />1. I understand that questions submitted to Ask Dr. Lamm are
          selected for general interest and will be published on the web site.
          Questions may not be answered.
          <br />
          <br />2. Answers to questions published in the Ask Dr. Lamm column are
          not intended to replace a full medical evaluation of a face-to-face
          visit with Dr. Lamm or other physician.
          <br />
          <br />3. I provide consent that the information I submit to Ask Dr.
          Lamm is the property of Ask Dr. Lamm and may be rewritten, reproduced,
          transmitted or shared in any format, in perpetuity.
          <br />
          <br />4. I understand and BCG Oncology, P.C. acknowledges that
          personal information about me will NOT be published or shared in any
          way, or to any third parties without my explicit consent.
          <br />
          <br />5. Ask the Doctor is an email application. BCG Oncology will
          protect my medical privacy. I release BCG Oncology, PC and its
          representatives from any harm or liability and understand the risks of
          sharing information via email.
          <br />
          <br />6. Dr. Lamm encourages you to share any information obtained
          with your physician. Dr. Lamm is not liable for any consequences that
          may result from a patient choosing to withhold information from his or
          her regular physician.
          <br />
          <br />7. The absence of a physical exam may affect Dr. Lamm's ability
          to diagnose your condition. By using Ask the Doctor, you acknowledge
          and agree to assume the risk of this limitation. You further
          understand that no warranty or guarantee has been made to you
          concerning any particular result or cure of your condition.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "terms",
  data() {
    return {
      dialog: true
    };
  }
};
</script>
