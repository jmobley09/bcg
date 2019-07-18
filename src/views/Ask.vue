<template>
  <v-content>
      <terms></terms>
      <askForm></askForm>
  </v-content>
</template>

<script>
import terms from "@/components/termsModal";
import askForm from "@/components/askForm";

export default {
  name: "ask",
  components: {
    terms,
    askForm
  }
};
</script>

<style scoped>

</style>
