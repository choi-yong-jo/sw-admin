<script>
export default {
  name: 'MemberDetail',
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      member_id: '',
      member_nm: '',
      team_nm: '',
      mobile: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      this.axios.get(this.$serverUrl + '/member/detail/' + this.idx, {
        params: this.requestBody
      }).then((response) => {
        this.member_id = response.data.res[0].memberId
        this.member_nm = response.data.res[0].name
        this.team_nm = response.data.res[0].teamNm
        this.mobile = response.data.res[0].mobile
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.id
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnUpdate() {
      this.$router.push({
        path: './write',
        query: this.requestBody
      })
    },
    fnDelete() {
      if (!confirm("삭제하시겠습니까?")) return

      this.axios.delete(this.$serverUrl + '/member/' + this.idx, {})
          .then(() => {
            alert('삭제되었습니다.')
            this.fnList();
          }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<template>
  <div class="v-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
    <div class="v-contents">
      <h3>{{ member_id }}</h3>
      <div>
        <strong class="w3-large">{{ member_nm }}</strong>
        <br>
        <span>{{ mobile }}</span>
        <br>
        <span>{{ team_nm }}</span>
      </div>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<style scoped>

</style>