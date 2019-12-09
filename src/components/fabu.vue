<template>
  <div>
    <div style="font-size: 30px">用户报名信息审核</div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="uid"
        label="序号"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="130"
        align="center">
      </el-table-column>
      <el-table-column
        prop="pass"
        label="密码"
        width="130"
        align="center">
      </el-table-column>
      <el-table-column
        prop="uname"
        label="昵称"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100"
        align="center">
      </el-table-column>

      <el-table-column
        prop="educatestu"
        label="教育状态"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop="score"
        label="信誉积分"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="待审核"
        width="200"
        align="center">
        <template slot-scope="scope" align="center">
          <el-button @click="del(scope.row)"  size="small"><i class="el-icon-circle-check"></i></el-button>
          <el-button @click="edit(scope.row)"  size="small"><i class="el-icon-edit"></i></el-button>
          <el-button @click="add(scope.row)"  size="small"><i class="el-icon-circle-close"></i></el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="this.params.page"
      :page-size="this.params.size"
      v-on:current-change="changePage">
    </el-pagination>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    methods: {
      changePage: function (page) {
        this.params.page = page;
        this.findsp();
      },
      edit: function (sco) {
        //alert(sco);
        this.$router.push("/update/" + sco.uid)
      },
      add: function (sco) {
        //alert(sco);
        this.$router.push("/insert")
      },
      findsp: function () {
        var _this = this;
        axios.post("http://localhost:8083/findsp/" + this.params.size + "/" + this.params.page).then(function (res) {
          _this.tableData = res.data.list;
          _this.total = res.data.total
        });
        axios.post("http://localhost:8083/findsp/" + this.params.size + "/" + this.params.page).then(function (res) {
          _this.tableData = res.data.list;
          _this.total = res.data.total
        })
      },
      // userinsert:function () {
      //   this.$router.push("/insert")
      // },
      del:function (sco) {
      /*  alert(sco.uid)*/
        axios.post("http://localhost:8083/userdelete",{uid:sco.uid}).then(res=>{
          if(res.data==("success")){
            this.findsp()
          }else{
            alert("删除失败")
          }
        })
      }
    },

    data() {
      return {

        tableData:[],
        params: {
          size: 3,
          page: 1
        },
        total: 50
      }
    },
    mounted(){
      this.findsp()
    }
  }
</script>

