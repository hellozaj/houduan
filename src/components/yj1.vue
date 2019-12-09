<template>
  <div id="app">
    <div style="font-size: 50px">{{msg}}</div>
    <el-table
      :data="tableData"
      border
      style="width: 60%"
      align="center">
      <el-table-column

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
        prop="uname"
        label="昵称"
        width="100"
        align="center">
      </el-table-column>

      <el-table-column
        prop="money"
        label="押金余额"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column

        label="操作"
        width="200"
        align="center">
        <template slot-scope="scope" align="center">
          <el-button @click="del(scope.row)" size="small"><i class="el-icon-delete"></i></el-button>
          <el-button @click="edit(scope.row)" size="small"><i class="el-icon-edit"></i></el-button>

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
    name: "normal",
    data() {
      return {tableData:[],
        params: {
          size: 3,
          page: 1
        },
        total: 50
      }
    },
    mounted(){
      this.findsp()
    },
    methods: {
      changePage: function (page) {
        this.params.page = page;
        this.findsp();
      },
      edit: function (sco) {
        //alert(sco);
        this.$router.push("/yj1update/" + sco.uid)
      },

      findsp: function () {
        var _this = this;
        axios.post("http://localhost:8083/findsp/" + this.params.size + "/" + this.params.page).then(function (res) {
          _this.tableData = res.data.list;
          _this.total = res.data.total
        })
      },

      del:function (sco) {
        alert(sco.uid)
        axios.post("http://localhost:8083/userdelete",{uid:sco.uid}).then(res=>{
          if(res.data==("success")){
            this.findsp()
          }else{
            alert("删除失败")
          }
        })
      }
    }
  }
</script>
<style>
  .el-table--fit {
    border-right: 0;
    border-bottom: 0;
    margin-left: 273px;
  }
</style>

