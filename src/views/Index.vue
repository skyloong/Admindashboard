<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <Navigation></Navigation>
      <HeaderBar></HeaderBar>
      <v-main>
        <HeaderTab></HeaderTab>
        <v-container style="background-color: rgb(240, 242, 245);" class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script>
export default {
  name: "Index",
  components: {
    HeaderBar: () => import("@/views/base/HeaderBar.vue"),
    Navigation: () => import("@/views/base/Navigation.vue"),
    HeaderTab: () => import("@/views/base/HeaderTab.vue"),
  },
};
</script>