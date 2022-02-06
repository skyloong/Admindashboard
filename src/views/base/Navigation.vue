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
          :key="item.id"
          :prepend-icon="item.icon"
          append-icon=""
          :group="item.path"
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
            v-for="child in item.children"
            :key="child.id"
            :to="child.path"
            link
            exact
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
          :key="item.id"
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
import { getNavs } from '@/api/system/menu'

export default {
  name: "Navigation",
  data() {
    return {
      drawer: true, //控制移动设备时菜单的显示
      items: [],
    };
  },
  beforeCreate: function () {
      getNavs().then(response => {
          this.items = response.data
      })
      .catch(error => {

      })
  },
  computed: {
    miniVariant: function () {
      return this.$store.getters.miniVariant
    },
  },
};
</script>
