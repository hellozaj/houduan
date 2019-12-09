<template>

  <div id="app" backg>
    <!--导航条-->
    <div style="font-size:30px;font-family: 微软雅黑;font-weight: bolder; ">兼职后台管理平台</div><br>
<!--    <div style="font-size:14px;font-family: 微软雅黑;font-weight: bold;color: red ">后台管理系统</div>-->
    <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户管理</template>
        <el-menu-item index="2-2"><a @click="normal">查找普通用户</a></el-menu-item>
        <el-menu-item index="2-3"><a @click="fabu">审核信息</a></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">兼职管理</template>
        <el-menu-item index="3-1"><a @click="jz1">查看兼职</a></el-menu-item>
        <el-menu-item index="3-2"><a @click="jz2">一级分类管理</a></el-menu-item>
        <el-menu-item id="aq" index="3-3"><a @click="jz3">二级分类管理</a></el-menu-item>
        <!--<el-menu-item index="3-4"><a @click="jz4">已完成</a></el-menu-item>-->
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">押金管理</template>
        <el-menu-item index="4-1"><a @click="yj1">查看押金</a></el-menu-item>
        <el-menu-item index="4-2"><a @click="yj2">账户管理</a></el-menu-item>
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">权限管理</template>
        <el-menu-item index="5-1"><a @click="qx1">用户权限</a></el-menu-item>
        <!--<el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>-->
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank"></a></el-menu-item>
    </el-menu>
    <br>


    <router-view></router-view>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //表格数据
        tableData: [],
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          indexMethod(index) {
            return index;
          }
        }
      }
    },
    methods:{
      normal:function () {
        this.$router.push("/main/normal")
      },
      fabu:function () {
        this.$router.push("/main/fabu")
      },
      jz1:function () {
        this.$router.push("/main/jz1")
      },
      jz2:function () {
        this.$router.push("/main/jz2")
      },
      jz3:function () {
        this.$router.push("/main/jz3")
      },
      jz4:function () {
        this.$router.push("/main/jz4")
      },
      yj1:function () {
        this.$router.push("/main/yj1")
      },
      yj2:function () {
        this.$router.push("/main/yj2")
      },
      qx1:function () {
        this.$router.push("/main/qx1")
      }
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: -10px;
  }
  .el-menu {
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
    height: 88px;
  }
  #aq{
    margin-top: -2px;
  }
  .el-menu--horizontal>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
    margin-top: 16px;
  }
  .el-menu-item, .el-submenu__title {
     height: 56px;
     line-height: 56px;
     position: relative;
     -webkit-box-sizing: border-box;
     white-space: nowrap;
     list-style: none;
     margin-top: 16px;
   }
</style>
