<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="orange lighten-1" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content @click="router.push(item.destination)">{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="orange" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <!-- Home Button -->
      <v-btn flat class="hidden-sm-and-down singlenav" @click="$router.push('/')">Home</v-btn>
      <!-- About Dropdown -->
      <v-menu :close-on-content-click="true" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn flat color="white" dark v-on="on">About</v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'drlamm' })">Doctor Lamm</v-btn>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'staff' })">Staff</v-btn>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'clinical' })">Clinical Trials</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
      <!-- Procedures Dropdown -->
      <v-menu :close-on-content-click="true" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn flat color="white" dark v-on="on">Procedures</v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'biopsy' })">Biopsy</v-btn>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'cystectomy' })">Cystectomy</v-btn>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'turbt' })">TURBT</v-btn>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn flat @click="$router.push({ name: 'turp' })">TURP</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
      <!-- Physcians Button -->
      <v-btn flat class="hidden-sm-and-down singlenav" @click="$router.push('/')">Physcians</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn color="orange lighten-1" class="hidden-sm-and-down">Schedule</v-btn>
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
      items: [
        { title: "Home" },
        { title: "About" },
        { title: "Physcians" },
        { title: "Procedures" },
        { title: "Schedule" }
      ]
    };
  }
};
</script>

<style scoped></style>
