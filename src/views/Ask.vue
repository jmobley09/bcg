<template>
  <v-content>
    <div>
        <h1>Ask Dr.Lamm page</h1>
        <terms></terms>
        <askForm></askForm>
    </div>
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
