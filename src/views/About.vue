<template>
  <div class="about">
    <h1>{{ connectData }}</h1>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: [],
  data() {
    return {
      connectData: "",
    };
  },
  methods: {
    get() {
      this.axios.get("/member/list").then((response) => {
        if (response.data.resultCode == 'SUCCESS') {
          this.connectData = response.data.res;
        }
      });
    },
  },
  mounted() {
    this.get();
  },
};
</script>