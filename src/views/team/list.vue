<script>
export default {
  name: 'teamList',
  data: function () {
    return {
      teamList: []
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    getList: function () {
      // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
      this.axios.get("/api/team/list").then(response => {
        console.log('### response: ' + JSON.stringify(response))
        this.teamList = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>