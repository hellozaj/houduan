<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 70%;
    margin-left: 300px;
    align-items: center;">
      <el-table-column
        prop="uid"
        label="用户编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="uname"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="rolers"
        label="角色"
        width="180">
        <template slot-scope="scope">
          <div>
            <ul>
             <li v-for="item in scope.row.rolers"><!--{{ item.rolername }}&nbsp;&nbsp;<i class="el-icon-edit"></i>-->
               {{ item.rolername }}&nbsp;&nbsp;<i class="el-icon-edit"></i>
              </li>
            </ul>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="permission"
        label="权限"
        width="180">
        <template slot-scope="scope">
          <div>
            <ul>
              <li v-for="item in scope.row.permission">
                <div v-if="item.pname!=''">{{ item.pname }}&nbsp;&nbsp;<i class="el-icon-delete"></i>&nbsp;&nbsp;<i class="el-icon-circle-plus-outline"></i></div>
              </li>
            </ul>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="200"
        align="center">
        <template slot-scope="scope" align="center">
          <el-button @click="del(scope.row)" size="small"><i class="el-icon-delete"></i></el-button>
          <el-button @click="edit(scope.row)" size="small"><i class="el-icon-edit"></i></el-button>
          <el-button @click="add(scope.row)" size="small"><i class="el-icon-plus"></i></el-button>
        </template>

      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        checked: true,
        tableData: [{

          uid: 1,
          uname: '赵丽颖',
          phone: '11111111111',
          permission: [{pname: '修改'}],
          rolers: [{rolername: '管理员'}]
        }, {
          uname: '2016-05-04',
          phone: '王小虎',
          permission: '上海市普陀区金沙江路 1517 弄'
        }, {
          uname: '2016-05-01',
          phone: '王小虎',
          permission: '上海市普陀区金沙江路 1519 弄'
        }, {
          uname: '2016-05-03',
          phone: '王小虎',
          permission: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      // edit: function (sco) {
      //   //alert(sco);
      //   this.$router.push("/update/" + sco.uid)
      // },
      // add: function (sco) {
      //   //alert(sco);
      //   this.$router.push("/insert")
      // },
      findsp:function () {
        axios.post("http://localhost:8083/permi/allpersion").then(res => {
        /*  alert(res.data);*/
          this.tableData = res.data;
        })
      },
      // del: function (sco) {
      //   alert(sco.uid)
      //   axios.post("http://localhost:8083/userdelete", {uid: sco.uid}).then(res => {
      //     if (res.data == ("success")) {
      //       this.findsp()
      //     } else {
      //       alert("删除失败")
      //     }
      //   })
      // },

      },
    mounted() {
      this.findsp()
    },

  }
</script>
