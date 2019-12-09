<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id2"
        label="对应一级编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name2"
        label="工作类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="company2"
        label="公司"
        width="180">
      </el-table-column>
      <el-table-column
        prop="district2"
        label="地区"
        width="180">
      </el-table-column>
      <el-table-column
        prop="salary2"
        label="工资"
        width="180">
      </el-table-column>
      <el-table-column
        prop="paystyle2"
        label="支付方式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="lable2"
        label="备注"
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
        axios.get("http://localhost:8083/findtwoji/"+this.params.size+"/"+this.params.page).then(function (res) {

          _this.tableData=  res.data.list;
          _this.total=res.data.total
        })
      },
      //修改
      updateone:function (scop) {

        this.$router.push("/twoxiugai/"+scop.id)
      },
      //删除
      delone:function (scop) {
        axios.post("http://localhost:8083/twodelbyid/",{"id":scop.id}).then(res=> {
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
        this.$router.push("/twoadd")
      }

    },
    mounted(){
      this.findAll()
    }

  }



</script>

<style scoped>

</style>
