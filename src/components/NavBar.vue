<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="#4287f5"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content @click="router.push(item.destination)">{{
              item.title
            }}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="extend">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title @click="$router.push('/')">
        <img class="logo" src="@/assets/bcglogo.jpg" alt="logo">
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <!-- Home Button -->
      <v-btn
        flat
        class="hidden-sm-and-down singlenav links"
        @click="$router.push('/')"
        >Home</v-btn
      >
      <!-- About Dropdown -->
      <v-menu :close-on-content-click="true" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn class="hidden-sm-and-down links" flat dark v-on="on">About</v-btn>
          <v-icon>arrow_drop_down</v-icon>
        </template>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'drlamm' })"
                  >Doctor Lamm</v-btn
                >
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'staff' })"
                  >Staff</v-btn
                >
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'clinical' })"
                  >Clinical Trials</v-btn
                >
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
      <!-- Procedures Dropdown -->
      <v-menu :close-on-content-click="true" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn class="hidden-sm-and-down links" flat dark v-on="on">Procedures</v-btn>
          <v-icon>arrow_drop_down</v-icon>
        </template>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'biopsy' })"
                  >Biopsy</v-btn
                >
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'cystectomy' })"
                  >Cystectomy</v-btn
                >
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'turbt' })"
                  >TURBT</v-btn
                >
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn class="hidden-sm-and-down sub-link" flat @click="$router.push({ name: 'turp' })">TURP</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
      <!-- Physcians Button -->
      <v-btn
        flat
        class="hidden-sm-and-down singlenav links"
        @click="$router.push('/physicians')"
        >Physicians</v-btn
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <!-- schedule Button -->
      <v-btn color="#003B5C" dark class="hidden-sm-and-down"
      @click="$router.push({ name: 'schedule' })"
        >Schedule</v-btn
      >
    <v-spacer></v-spacer>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home" },
        { title: "About" },
        { title: "physicians" },
        { title: "Procedures" },
        { title: "Schedule" }
      ]
    };
  }
};
</script>

<style scoped>
  .extend {
    padding-top: 3%;
    padding-bottom: 2%;
  }
  .links {
    font-weight: bold;
    color: #003B5C;
    font-size: 110%;
    padding-left: 2%;
  }
  .logo {
    width:100%; 
    height: auto;
  }
  .sub-link {
    color: #003B5C;
  }
</style>
