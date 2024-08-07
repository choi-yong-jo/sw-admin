<script>
export default {
  name: 'MemberWrite',
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      member_id: '',
      member_nm: '',
      teamList: {},
      team_id: 'develop',
      mobile: '',
      email: '',
      password: '',
    }
  },
  mounted() {
    this.fnGetView()
    this.fnSelectTeam()
  },
  methods: {
    fnGetView() {
      this.axios.get(this.$serverUrl + '/member/detail/' + this.idx, {
        params: this.requestBody
      }).then((response) => {
        console.log(response.data.res[0].teamId)
        this.member_id = response.data.res[0].memberId
        this.member_nm = response.data.res[0].name.trim()
        this.team_id = response.data.res[0].teamId.trim()
        this.mobile = response.data.res[0].mobile.trim()
        this.email = response.data.res[0].email.trim()
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnSelectTeam() {
      this.axios.get("/team/list").then(response => {
        this.teamList = response.data.res
      }).catch(error => {
        console.log(error)
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
            .then((response) => {
              alert('글이 저장되었습니다.')
              this.fnView(response.data.res.memberSeq)
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

<template>
  <div class="v-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
    <div class="v-contents">
      <input type="hidden" v-model="idx">
      <input type="text" v-model="member_id" class="w3-input w3-border" placeholder="회원ID를 입력해주세요.">
      <input type="text" v-model="member_nm" class="w3-input w3-border" placeholder="회원명을 입력해주세요.">
      <input type="text" v-model="mobile" class="w3-input w3-border" placeholder="전화번호를 입력해주세요.">
      <input type="text" v-model="email" class="w3-input w3-border" placeholder="이메일을 입력해주세요.">
      <input type="text" v-model="password" class="w3-input w3-border" placeholder="비밀번호를 입력해주세요.">
      <select v-model="team_id">
        <option v-for="(row, teamSeq) in teamList" :key="teamSeq" :value="row.teamId">{{ row.teamNm }}</option>
      </select>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<style scoped>

</style>