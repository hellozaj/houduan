<template>
  <div id="app">
    <div><h2>用户押金修改</h2></div>
    <input type="hidden" name="uid"></input>
    <el-form ref="user" :model="user" label-width="80px" >

      <el-form-item label="手机号:" >
        <el-input  name="phone" v-model="user.phone" ></el-input>
      </el-form-item>

      <el-form-item label="昵称:">
        <el-input  name="uname" v-model="user.uname"></el-input>
      </el-form-item>


      <el-form-item label="押金余额:">
        <el-input  name="money" v-model="user.city" ></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "yj1update",
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
      methods: {
        onSubmit: function () {
          axios.post("http://localhost:8083/uupdate2", this.user).then(res => {
            if (res.data != null) {
              this.$router.push("/main/yj1")
            }
          })
        }
      },

      mounted() {
        var uid = this.$route.params.id;
        axios.post("http://localhost:8083/userfindOne?uid=" +uid).then(res => {
          //alert(res.data);
          console.log(res.data);
          this.user = res.data;
        })
      }
    }
</script>
<style>


  .el-form-item {
    margin-bottom: 22px;
    margin-left: 500px;
  }


  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    width: 300px;
  }
  .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

  }
</style>
