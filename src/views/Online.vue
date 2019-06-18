<template>
  <div class="about">
    <h1>This is the page for online form submission</h1>
    <scheduleForm></scheduleForm>
  </div>
</template>

<script>
import scheduleForm from "@/components/scheduleForm";
export default {
  name: "online",
  components: {
      scheduleForm
  }
};
</script>
