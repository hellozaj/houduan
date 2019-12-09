<template>
  <div>

    <el-form ref="form" :model="Job1" label-width="80px">
      <el-form-item label="工作内容">
        <el-input name="jname" v-model="Job1.jname"></el-input>
      </el-form-item>
      <el-form-item label="公司">
        <el-input name="jcompany" v-model="Job1.jcompany"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-input name="district" v-model="Job1.district"></el-input>
      </el-form-item>
      <el-form-item label="工资">
        <el-input name="salary" v-model="Job1.salary"></el-input>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-input name="paystyle" v-model="Job1.paystyle"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input name="lable" v-model="Job1.lable"></el-input>
      </el-form-item>

      <el-form-item label="操作">
        <el-button type="primary" @click="onSubmit">立即新增</el-button>
        <el-button>取消</el-button>
      </el-form-item>




    </el-form>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "",
    data(){
      return{
        Job1:{}
      }
    },
    methods:{
      onSubmit:function () {
        axios.post("http://localhost:8083/add",this.Job1).then(res=>{
          if (res.data!=null){
            this.$router.push("/main/jz1")
          }
        })
      }
    }

  }
</script>

<style scoped>

</style>
