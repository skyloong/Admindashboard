<template>
  <v-row>
    <v-col cols="12" sm="10" md="8" class="pb-0">
      <v-chip
        v-for="(item, index) in tabList"
        :key="item.name"
        class="ma-1"
        small
        :close="item.isClose"
        label
        :color="item.active ? 'cyan' : ''"
        :text-color="item.active ? 'white' : '#757575'"
        :outlined="!item.active"
        :ripple="false"
        @click:close="closeTab(index)"
        @click="changeTab(index)"
        :to="item.to"
      >
        <v-icon x-small left v-show="item.active && item.isClose">
          mdi-checkbox-blank-circle
        </v-icon>
        {{ item.text }}
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeaderTab",
  data() {
    return {
      tabList: [
        {
          name: "Index",
          text: "首页",
          active: true,
          isShow: true,
          isClose: false,
          to: { name: "Index" },
        },
      ],
      currentTab: 0,
    };
  },
  watch: {
    $route: "changeNav",
  },
  beforeMount() {
      if (this.$route.name !== 'Index') {
          this.changeNav();
      }
  },
  methods: {
    changeTab: function (index) {
      this.tabList[this.currentTab].active = false;
      this.tabList[index].active = true;
      this.currentTab = index;
    },
    closeTab: function (index) {
      this.tabList.splice(index, 1);
      let activing = this.tabList.findIndex((item) => item.active === true);
      if (index > 0 && activing === -1) {
        this.tabList[index - 1].active = true;
        this.currentTab = index - 1;
        this.$router.push({ name: this.tabList[index - 1].name });
      } else {
        this.currentTab =
          this.currentTab > index ? this.currentTab - 1 : this.currentTab;
      }
    },
    changeNav() {
      let currentTab = this.tabList.findIndex(
        (item) => item.name === this.$route.name
      );
      if (currentTab < 0) {
        this.tabList.push({
          name: this.$route.name,
          text: this.$route.meta.title,
          active: true,
          isShow: true,
          isClose: true,
          to: { name: this.$route.name },
        });
        currentTab = this.tabList.length - 1;
      }

      this.tabList[this.currentTab].active = false;
      this.tabList[currentTab].active = true;
      this.currentTab = currentTab;
    },
  },
};
</script>