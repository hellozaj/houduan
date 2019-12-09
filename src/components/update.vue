<template>
  <div id="app">
    <input type="hidden" name="uid"></input>
    <el-form ref="user" :model="user" label-width="80px" >



      <el-form-item label="phone:" >
        <el-input  name="phone" v-model="user.phone" ></el-input>
      </el-form-item>
      <el-form-item label="pass:" >
        <el-input  name="pass" v-model="user.pass" ></el-input>
      </el-form-item>
      <el-form-item label="photo:" >
        <el-input  name="photo" v-model="user.photo" ></el-input>
      </el-form-item>

      <el-form-item label="uname:">
        <el-input  name="uname" v-model="user.uname"></el-input>
      </el-form-item>
      <el-form-item label="sex:" >
        <el-radio-group v-model="user.sex">
          <el-radio name="sex" :label="1">男</el-radio>
          <el-radio name="sex" :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="city:">
        <el-input  name="city" v-model="user.city" ></el-input>
      </el-form-item>
      <el-form-item label="birt:" >
        <el-date-picker  name="birth" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model="user.birth"></el-date-picker>
      </el-form-item>
      <el-form-item label="educatestu:">
        <el-input  name="educatestu" v-model="user.educatestu" ></el-input>
      </el-form-item>

      <el-form-item label="weixin:">
        <el-input  name="weixin" v-model="user.weixin"></el-input>
      </el-form-item>


      <el-form-item label="worstatus:">
        <el-input name="worstatus" v-model="user.worstatus"></el-input>
      </el-form-item>
      <el-form-item label="money:">
        <el-input name="money" v-model="user.money"></el-input>
      </el-form-item>

      <el-form-item label="score:">
        <el-input name="score" v-model="user.score"></el-input>
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
    data() {
      return {
        user: {}
      }
    },

    methods: {
      onSubmit: function () {
        axios.post("http://localhost:8083/uupdate2", this.user).then(res => {
          if (res.data != null) {
            this.$router.push("/main/normal")
          }
        })
      }
    },

    mounted() {
      var uid = this.$route.params.id;
      alert(uid);
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
