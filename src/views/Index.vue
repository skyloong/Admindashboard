<template>
  <v-app id="inspire">
    <Navigation></Navigation>
    <HeaderBar></HeaderBar>
    <v-main>
      <HeaderTab class="shadow"></HeaderTab>
      <v-row>
        <v-col cols="12">
          <v-container fluid>
            <router-view />
          </v-container>
        </v-col>
      </v-row>
    </v-main>
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
<style scoped>
.main {
  background-color: rgb(240, 242, 245);
}
</style>
