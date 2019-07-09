<template>
  <v-content>
    <div>
      <div class="title">
        <h1>Ask Dr.Lamm</h1>
      </div>
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

.title {
  position: absolute;
  text-align: center;
  background-color: blue;
  z-index: -1;
  width: 200%;
  height: 200%;
}

</style>
