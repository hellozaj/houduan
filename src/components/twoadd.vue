<template>
  <div>
    <input type="hidden" name="id" v-model="Catalog2.id">
    <el-form ref="form" :model="Catalog2" label-width="80px">
      <el-form-item label="对应一级编号">
        <el-input name="id2" v-model="Catalog2.id2"></el-input>
      </el-form-item>
      <el-form-item label="工作内容">
        <el-input name="name2" v-model="Catalog2.name2"></el-input>
      </el-form-item>
      <el-form-item label="公司">
        <el-input name="company2" v-model="Catalog2.company2"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-input name="district2" v-model="Catalog2.district2"></el-input>
      </el-form-item>
      <el-form-item label="工资">
        <el-input name="salary2" v-model="Catalog2.salary2"></el-input>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-input name="paystyle2" v-model="Catalog2.paystyle2"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input name="lable2" v-model="Catalog2.lable2"></el-input>
      </el-form-item>

      <el-form-item label="操作">
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
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
        Catalog2:{}
      }
    },
    methods:{
      onSubmit:function () {
        axios.post("http://localhost:8083/addOrupdate",this.Catalog2).then(res=>{
          if (res.data!=null){
            this.$router.push("/main/jz3")
          }
        })
      }
    }

  }
</script>
<style scoped>

</style>
