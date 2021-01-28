<template>
  <div>
    <ul>
      <li
        class="tv-item"
        v-for="tv in tvList"
        :key="tv.id"
        @click="getDetail(tv.id)"
      >
        <div class="img-box">
          <img :src="'https://images.weserv.nl/?url=' + tv.cover.url" alt="" />
        </div>
        <div class="content">
          <h3>{{ tv.title }}</h3>
          <p>{{ tv.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tv",
  data() {
    return {
      tvList: [],
      start: 0,
      isFinish: true,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.lazyLoad();
  },
  methods: {
    getData() {
      if (this.isFinish) {
        this.isFinish = false;
        this.axios
          .get(
            "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items",
            {
              params: {
                start: this.start,
                count: 10,
              },
            }
          )
          .then((res) => {
            this.tvList = [
              ...this.tvList,
              ...res.data.subject_collection_items,
            ];
            this.isFinish = true;
          });
      }
    },
    lazyLoad() {
      let htmlDom = document.documentElement;
      let fullH = 0;
      let deviceH = htmlDom.clientHeight;
      console.log(deviceH);
      let scrollT = 0;
      window.onscroll = () => {
        fullH = htmlDom.offsetHeight;
        scrollT = htmlDom.scrollTop;
        if (fullH == deviceH + scrollT) {
          if (this.start < 40) {
            this.start += 10;
            this.getData();
          }
        }
      };
    },

    getDetail(id) {
      this.$router.push("/tvDetail/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tv-item {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px dashed #ccc;
  .img-box {
    flex: 3;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex: 5;
    padding: 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-weight: bold;
    }
  }
}
</style>