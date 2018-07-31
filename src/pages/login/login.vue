<template>
  <div class="box">
    <div class="header">

    </div>
    <div class="top clear" v-bind:style="{ 'background-image': 'url(' + data.img + ')'}">
      <div class="login">
        <h1>欢迎登录</h1>
        <el-input placeholder="请输入用户名" v-model="username"></el-input>
        <el-input style="margin-top:20px" placeholder="请输入密码" v-model="password"></el-input>
        <h2>
          <el-button type="primary" @click="loginBtn">登录</el-button>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import login from "../../components/common/data/login/login.js";
export default {
  data() {
    return {
      data: {},
      password: '',
      username: ''
    };
  },
  methods: {
    loginBtn(){
      if(this.username == ''){
        console.log(123);
      }
    }
  },
  mounted() {
    console.log(login);
    this.data = login;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .header{
    background: #ccc;
    height: 80px;
  }
  .top {
    width: 100%;
    height: 50%;
    background-size: 100% 100%;
    background-position: center top;
    margin: 0 auto;
    position: relative;
    .login{
      h1{
        font-size: 16px;
        color: #333;
        text-align: center;
        margin-bottom: 15px;
      }
      h2{
        text-align: center;
        margin-top: 15%;
        button{
          margin: 0 auto;
          width: 100%;
        }
      }
      padding: 30px 15px;
      background: #fff;
      width: 350px;
      position: absolute;
      right: 7%;
      bottom: 5%;
    }
  }
}
</style>
