<template>
  <v-content>
    <div>
     <carousel></carousel>
    </div>
    <br>
    <div>
      <btn_display></btn_display>
    </div>
  </v-content>
</template>

<script>
import carousel from "@/components/carousel";
import btn_display from "@/components/btn_display";

export default {
  name: "Home",
  components: {
    carousel,
    btn_display
  }
};
</script>

<style scoped>

</style>
