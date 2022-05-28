<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-sub-menu
          :index="menu.index"
          v-for="(menu, idx) in menuItems"
          :key="idx"
        >
          <template #title>
            <el-icon><component :is="menu.icon" /></el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <el-menu-item
            :index="child.index"
            v-for="(child, idx) in menu.children"
            :key="idx"
            >{{ child.title }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { Location, Setting } from "@element-plus/icons-vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    Location,
    Setting,
  },
  props: {
    isCollapse: {
      type: Object,
    },
  },

  setup() {
    const state = reactive({
      menuItems: [
        {
          title: "코로나 현황",
          index: "1",
          icon: "Location",
          children: [
            {
              title: "국가별 현황",
              index: "1-1",
              component: "item one",
            },
            {
              title: "국내 현황",
              index: "1-2",
              component: "item one",
            },
          ],
        },
        {
          title: "Navigator Two",
          index: "2",
          icon: "Setting",
          children: [
            {
              title: "item one",
              index: "2-1",
              component: "item one",
            },
            {
              title: "item two",
              index: "2-2",
              component: "item one",
            },
          ],
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
