<template>
  <div>
    <v-chip
      v-for="(item, index) in tabList"
      :key="item.name"
      class="ma-1"
      small
      :close="item.isClose"
      label
      filter
      filter-icon="mdi-checkbox-blank-circle"
      :color="item.active ? 'cyan' : ''"
      :text-color="item.active ? 'white' : '#757575'"
      :input-value="item.active && item.isClose"
      :outlined="!item.active"
      v-show="item.isShow"
      @click:close="item.isShow = false"
      @click="changeTab(index)"
      :to="item.to"
    >
      {{ item.text }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "CloseTab",
  data() {
    return {
      currentTab: 0,
      tabList: [
        {
          name: "Index",
          text: "首页",
          active: true,
          isShow: true,
          isClose: false,
          to: { name: "Index" },
        },
        {
          name: "About",
          text: "第二页",
          active: false,
          isShow: true,
          isClose: true,
          to: { name: "About" },
        },
      ],
    };
  },
  methods: {
    changeTab: function (index) {
      this.tabList[this.currentTab].active = false;
      this.tabList[index].active = true;
      this.currentTab = index;
    },
  },
};
</script>
