<template>
  <footer :style="{ backgroundColor: curMenu.bgColor }">
    <div v-for="menu in menuList" :key="menu.path" @click="switchMenu(menu)">
      <router-link :to="menu.path">{{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  data() {
    return {
      menuList: [
        { path: "/", name: "剧集", bgColor: "rgb(34, 52, 218)" },
        { path: "/music", name: "音乐", bgColor: "rgb(32, 42, 133)" },
        { path: "/book", name: "书籍", bgColor: "rgb(62, 72, 161" },
        { path: "/talk", name: "聊天", bgColor: "rgb(62, 72, 161)" },
      ],
    };
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    switchMenu(menu) {
      this.setCurMenu(menu);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: rgb(34, 52, 218);
  span {
    position: absolute;
    left: 0;
  }
}
</style>