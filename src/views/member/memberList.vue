<script>
export default {
  name: 'MemberList',
  data: function () {
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        endPage: 0,
        nextBlock: 0,
        page: 0,
        totalSize: 0,
        prevBlock: 0,
        startIndex: 0,
        startPage: 0,
        totalBlockCnt: 0,
        totalListCnt: 0,
        totalPageCnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      keyword: this.$route.query.keyword,
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let startPage = this.paging.startPage;
        let endPage = this.paging.endPage;
        for (let i = startPage; i <= endPage; i++) pageNumber.push(i);
        return pageNumber;
      }
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList: function () {
      this.requestBody = { // 데이터 전송
        keyword: this.keyword,
        page: this.page,
        size: this.size
      }
      // this.axios.get("/member/list").then(response => {
      //   this.memberList = response.data.res
      // }).catch(error => {
      //   console.log(error)
      // })
      this.axios.get(this.$serverUrl + "/member/list2", {
        params: this.requestBody,
        headers: {}
      }).then(response => {
        if (response.data.resultCode === "OK") {
          console.log(response.data.data);
          console.log(response.data.pagination);
          this.memberList = response.data.data
          this.paging = response.data.pagination
          this.no = this.paging.totalListCnt - ((this.paging.page - 1) * this.paging.totalSize)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
        this.getList()
      }
    },
    fnWrite: function () {
      this.$router.push({
        path: './write'
      })
    },
    fnView: function (idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    }
  }
}
</script>

<template>
  <div class="v-list">
    <div class="v-common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>
    </div>
    <table class="w3-table-all" style="width: 100%">
      <thead>
      <tr>
        <th width="10%">ID</th>
        <th width="30%">회원명</th>
        <th width="30%">소속부서</th>
        <th width="30%">전화번호</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, memberSeq) in memberList" :key="memberSeq">
        <td>{{ row.memberId }}</td>
        <td><a v-on:click="fnView(`${row.memberSeq}`)">{{ row.name }}</a></td>
        <td>{{ row.teamId }}</td>
        <td>{{ row.mobile }}</td>
      </tr>
      </tbody>
    </table>
    <br>
    <div v-if="paging.totalListCnt > 0" style="width:auto;">
      <span class="pg">
      <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-bar-item w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.page > paging.startPage" @click="fnPage(`${paging.page-1}`)"
         class="prev w3-button w3-bar-item w3-border">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-bar-item w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-bar-item w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.totalPageCnt > paging.page"
         @click="fnPage(`${paging.page+1}`)" class="next w3-button w3-bar-item w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(`${paging.totalPageCnt}`)" class="last w3-button w3-bar-item w3-border">&gt;&gt;</a>
      </span>
    </div>
  </div>
</template>

