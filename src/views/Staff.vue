<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 class="main">
      <v-card class="space">
        <v-toolbar color="#b87333" dark>
          <v-toolbar-title class="text-xs-center">Meet Our Staff</v-toolbar-title>
        </v-toolbar>

        <v-list three-line>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            avatar
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-avatar :size="100">
                    <img :src="item.avatar" />
                  </v-avatar>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="indent">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "staff",
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 1",
          items: [{ title: "List Item" }]
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 2",
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 3",
          items: [{ title: "List Item" }]
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 4",
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
         {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 5",
          items: [{ title: "List Item" }]
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 6",
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 7",
          items: [{ title: "List Item" }]
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Employee 8",
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
      ]
    };
  }
};
</script>
<style scoped>
.space {
  margin-top: 13%;
}
.indent {
  text-indent: 5%;
}
</style>
