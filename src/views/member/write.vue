<template>
  <div class="board-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
    <div class="board-contents">
      <input type="hidden" v-model="idx">
      <input type="text" v-model="member_id" class="w3-input w3-border" placeholder="회원ID를 입력해주세요.">
      <input type="text" v-model="member_nm" class="w3-input w3-border" placeholder="회원명을 입력해주세요.">
      <input type="text" v-model="mobile" class="w3-input w3-border" placeholder="전화번호를 입력해주세요.">
      <select v-model="teamId">
        <option value="1">develop</option>
        <option value="2">operate</option>
      </select>
    </div>
    <div class="board-contents">
      <textarea id="" cols="30" rows="10" v-model="contents" class="w3-input w3-border" style="resize: none;">
      </textarea>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberWrite',
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      member_id: '',
      member_nm: '',
      team_nm: '',
      team_id: '',
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
        this.mobile = response.data.res[0].mobile
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.idx
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView(idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnSave() {
      let apiUrl = this.$serverUrl + '/member'
      this.form = {
        "memberId": this.member_id,
        "teamId": this.team_id,
        "name": this.member_nm,
        "password": this.password,
        "email": this.email,
        "mobile": this.mobile
      }

      if (this.idx === undefined) {
        //INSERT
        this.axios.post(apiUrl, this.form)
            .then((res) => {
              alert('글이 저장되었습니다.')
              this.fnView(res.data.idx)
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      } else {
        //UPDATE
        this.axios.patch(apiUrl + '/' + this.idx, this.form)
            .then((res) => {
              alert('글이 저장되었습니다.')
              this.fnView(res.data.idx)
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    }
  }
}
</script>
<style scoped>

</style>