<template>
  <v-footer
    height="auto"
    class="main"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>BCG Oncology</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: 'bottom',
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })
  }
</script>

<style scoped>
.main {
  background: rgb(191,191,191);
  background: linear-gradient(0deg, rgba(191,191,191,0.9500175070028011) 0%, rgba(0,59,92,1) 91%);
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>
