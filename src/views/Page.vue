<script>
export default {
  name: 'MemberList',
  data: function () {
    return {
      memberList: []
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    getList: function () {
      // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
      this.axios.get(this.$serverUrl + "/api/member/list").then(response => {
        console.log('### response: ' + JSON.stringify(response))
        this.memberList = response.data.res
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getList();
  },
}
</script>

<template>
  <div class="about">
    <h1>{{ memberList }}</h1>
  </div>
</template>