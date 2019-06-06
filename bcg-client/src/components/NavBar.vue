<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="orange lighten-1"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="orange" dark extended>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
      <v-btn flat class="hidden-sm-and-down">About</v-btn>
      <v-btn flat class="hidden-sm-and-down">Physcians</v-btn>
      <v-btn flat class="hidden-sm-and-down">Procedures</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn color="orange lighten-1" class="hidden-sm-and-down">JOIN</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      appTitle: "BCG Oncology",
      drawer: false,
      items: [{ title: "Home" }, { title: "About" }, { title: "Physcians" }, { title: "Procedures" }, { title: "Schedule" }]
    };
  }
};
</script>

<style scoped></style>
