<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <Navigation></Navigation>
      <HeaderBar></HeaderBar>
      <v-main>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    HeaderBar: () => import("@/components/base/HeaderBar.vue"),
    Navigation: () => import("@/components/base/Navigation.vue"),
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
