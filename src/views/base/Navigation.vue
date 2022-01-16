<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="true"
    :mini-variant="miniVariant"
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-list-group
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.path"
            link
            exact
            @click="changeNav(child.text)"
          >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text"
          :to="item.path"
          link
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: true, //控制移动设备时菜单的显示
      items: [
        { icon: "mdi-contacts", text: "Contacts", path: "/" },
        {
          icon: "mdi-history",
          text: "Frequently contacted",
          path: "/closetab",
        },
        { icon: "mdi-content-copy", text: "Duplicates", path: "/home" },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Labels",
          model: true,
          children: [
            { icon: "mdi-plus", text: "Create label", path: "/about" },
          ],
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "More",
          model: false,
          children: [
            { text: "Import", path: "/c" },
            { text: "Export", path: "/d" },
            { text: "Print", path: "/e" },
            { text: "Undo changes", path: "/f" },
            { text: "Other contacts", path: "/g" },
          ],
        },
        { icon: "mdi-cog", text: "Settings", path: "/k" },
        { icon: "mdi-message", text: "Send feedback", path: "/m" },
        { icon: "mdi-help-circle", text: "Help", path: "/n" },
        { icon: "mdi-cellphone-link", text: "App downloads", path: "/o" },
        { icon: "mdi-keyboard", text: "Go to the old version", path: "/p" },
      ],
    };
  },
  computed: {
    miniVariant: function () {
      return this.$store.getters.miniVariant;
    },
  },
};
</script>
