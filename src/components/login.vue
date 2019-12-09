<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="100px" class="login-page" >
      <h1 style="font-weight: bold">兼职后台登录</h1>
      <br/><br/>
      <el-form-item label="用  户:" prop="username">
        <el-input v-model="user.phone" placeholder="请输入用户名">
          <el-button slot="prepend" icon="el-icon-user"></el-button>
        </el-input>
      </el-form-item>
      <br/><br/>
      <el-form-item label="密 码:">
        <el-input v-model="user.pass" type="password" placeholder="请输入密码">
          <el-button slot="prepend" icon="el-icon-key"></el-button>
        </el-input>
      </el-form-item><br/><br/>
      <el-button type="primary" icon="el-icon-user-solid" @click="login">登 录</el-button>
    </el-form>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    data() {
      return {
        //backgroundImage:"url("+require+("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575809606250&di=f55d5aecf8d89e9aba7e33b42fd72392&imgtype=0&src=http%3A%2F%2Fimg.51ztzj.com%2Fupload%2Fimage%2F20130417%2F201304172007_670x419.jpg"+")",
        user:{},
      };
    },
    methods: {
      login() {
        // 数据校验
        axios.post("http://localhost:8083/log/"+this.user.phone+"/"+this.user.pass).then(res=>{
          if(res.data==1){
            this.$router.push("/main")
          }else{
            alert("用户名或密码错误，请重新输入")
          }
        })

        /*this.$refs.form.validate(valid => {
          if (valid) {
            console.log('验证成功')
          }
        });*/
      }
    }
  };
</script>
<style scoped>
  .container {
    margin-top: 200px;
    width: 100%;
    height: 600px;
  /*  border: 1px solid red;*/
  }
  .login-page {
    border-radius: 5px;
    margin: auto;
    width: 600px;
    height: 90%;
    padding: 35px 55px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   /* border: 1px solid red;*/
  }

</style>
<style>
  .el-input-group>.el-input__inner {
    height: 90px;
    vertical-align: middle;
    display: table-cell;
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
    margin-top: 30px;
  }
</style>
