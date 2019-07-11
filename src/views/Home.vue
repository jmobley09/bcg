<template>
  <v-content>
    <div class="fill">
      <img src="@/assets/depositphotos.jpg"/>
    </div>
    <div>
      <btn_display></btn_display>
    </div>
  </v-content>
</template>

<script>
import btn_display from "@/components/btn_display";

export default {
  name: "Home",
  components: {
    btn_display
  }
};
</script>

<style scoped>
.fill {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.fill img {
    flex-shrink: 0;
    flex-grow: 1;
    min-width: 30%;
    min-height: 50%
}
</style>
