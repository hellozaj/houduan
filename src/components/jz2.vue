<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id1"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name1"
        label="类型"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-delete"  @click="delone(scope.row)" size="small" ></el-button>
          <el-button type="primary" icon="el-icon-edit" @click="updateone(scope.row)"  size="small"></el-button>
          <el-button type="primary" icon="el-icon-check" @click="addone(scope.row)"  size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :current-page="this.params.page" :page-size="this.params.size" v-on:current-change="changePage">
    </el-pagination>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    name: "normal",
    data(){
      return{
        msg:'查看兼职',
        tableData: [],
        params:{
          size:5,
          page:1
        },
        total:100
      }
    },
    methods:{
      //跳转页面
      changePage:function (page) {
        this.params.page=page;
        this.findAll();
      },
      //查询全部
      findAll:function () {
        var  _this = this;
        axios.get("http://localhost:8083/findyiji/"+this.params.size+"/"+this.params.page).then(function (res) {

          _this.tableData=  res.data.list;
          _this.total=res.data.total
        })
      },
      //修改
      updateone:function (scop) {

        this.$router.push("/updateone/"+scop.jid)
      },
      //删除
      delone:function (scop) {
        axios.post("http://localhost:8083/delbyid/",{"jid":scop.jid}).then(res=> {
          alert(res)
          if (res.data==("okokokok")){
            this.findAll()
          }else {
            this.$router.push("/unauth")
          }
        })

      },
      //新增
      addone:function () {
        this.$router.push("/addone")
      }

    },
    mounted(){
      this.findAll()
    }

  }



</script>

<style scoped>

</style>
