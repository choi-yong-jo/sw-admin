<script>
export default {
  name: 'BoardDetail',
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      title: '',
      memberId: '',
      boardType: '',
      contents: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      this.requestBody = { // 데이터 전송
        keyword: this.keyword,
        page: this.page,
        size: this.size
      }

      this.axios.get(this.$serverUrl + "/board/detail/" + this.idx, {
        params: this.requestBody
      }).then((response) => {
        console.log(response.data);
        this.title = response.data.title
        this.memberId = response.data.memberId
        this.boardType = response.data.boardType
        this.contents = response.data.contents
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

      this.axios.delete(this.$serverUrl + '/board/' + this.idx, {})
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
    <div class="v-contents">
      <h3>{{ title }}</h3>
      <div>
        <strong class="w3-large">{{ memberId }}</strong>
        <br>
        <span>{{ boardType }}</span>
      </div>
    </div>
    <div class="v-contents">
      <textarea id="" cols="30" rows="10" v-model="contents" class="w3-input w3-border" style="resize: none;" disabled>
        contents
      </textarea>
    </div>
    <div class="v-common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<style scoped>

</style>