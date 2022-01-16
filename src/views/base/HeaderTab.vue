<template>
  <v-row>
    <v-col cols="12" sm="10" md="8">
      <close-tab></close-tab>
    </v-col>
  </v-row>
</template>

<script>
import CloseTab from "@/components/nav/CloseTab.vue";
export default {
  name: "HeaderTab",
  components: {
    CloseTab,
  },
  data() {
    return {};
  },
};
</script>