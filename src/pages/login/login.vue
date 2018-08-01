<template>
  <div class="box" @mousemove="cursor"  :style="{background:data.mainBackground}">
    <div class="contain">
      <div class="left">
        <h1><img src="../../assets/logo.png" alt=""></h1>
        <div class="left_input">
          <p>
            <i><img src="../../assets/icon_login_user_nol.png" alt="" v-show="usernameIconShow"></i>
            <i><img src="../../assets/icon_login_user_sel.png" alt="" v-show="!usernameIconShow"></i>
            <input type="text" class="username" v-model="username" v-on:focus="usernameFocus" v-on:blur="usernameBlur" :placeholder="data.usernamePlaceholder">
          </p>
          <p style="margin-bottom:20px">
            <i><img src="../../assets/icon_login_password_nol.png" alt="" v-show="passwordIconShow"></i>
            <i><img src="../../assets/icon_login_password_sel.png" alt="" v-show="!passwordIconShow"></i>
            <input type="password" class="password" v-model="password" v-on:focus="passwordFocus" v-on:blur="passwordBlur"  :placeholder="data.passwordPlaceholder">
          </p>
          <p style="margin-bottom:28px;font-size:14px;color:#4786FF"><span style="cursor:pointer;">忘记密码？</span></p>
          <p>
            <el-button type="primary" class="login" @click="loginBtn">登录</el-button>
          </p>
        </div>
      </div>
      <div class="right">
        <img src="../../assets/pic_login.png" alt="">
      </div>
    </div>
    <div class="background1">
      <img src="../../assets/background_login_left1.png" alt="">
    </div>
    <div class="background2">
      <img src="../../assets/background_login_left2.png" alt="">
    </div>
    <div class="background3">
      <img src="../../assets/background_login_right1.png" alt="">
    </div>
    <div class="background4">
      <img src="../../assets/background_login_right2.png" alt="">
    </div>
  </div>
</template>

<script>
import login from "../../components/common/data/login/login.js";
export default {
  data() {
    return {
      data: {},
      password: "",
      username: "",
      usernameIconShow: true, //获取焦点小图标的切换
      passwordIconShow: true, //密码框获取焦点小图标的切换
    };
  },
  methods: {
    // 用户名输入框获取焦点
    usernameFocus() {
      this.usernameIconShow = !this.usernameIconShow;
    },

    // 用户名输入框失去焦点
    usernameBlur() {
      this.usernameIconShow = !this.usernameIconShow;
    },

    // 密码输入框获取焦点
    passwordFocus() {
      this.passwordIconShow = !this.passwordIconShow;
    },

    // 密码输入框失去焦点
    passwordBlur() {
      this.passwordIconShow = !this.passwordIconShow;
    },

    // 登录按钮
    loginBtn() {
      if (this.username == "") {
        alert("请输入用户名");
      } else if (this.password == "") {
        alert("请输入密码");
      } else {
        var requestData = {};
      }
    },

    cursor(e) {
      // console.log(e.offsetX)
    }
  },
  mounted() {
    this.data = login;
    console.log(this.data)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding-top: 13%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-origin: center;
  -webkit-perspective: 500;
  .contain {
    width: 70%;
    height: 65%;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 3px;
    max-width: 900px;
    max-height: 500px;
    z-index: 10;
    position: relative;
    .left {
      width: 45%;
      height: 100%;
      float: left;
      h1 {
        margin-top: 5%;
        padding-left: 10%;
        img {
          width: 76px;
          height: 74px;
        }
      }
      .left_input {
        padding-left: 10%;
        margin-top: 10%;
        p {
          margin-bottom: 28px;
          position: relative;
          .username {
            width: 80%;
            height: 54px;
            border: 1px solid #eeeff1;
            padding-left: 20%;
            outline: none;
            border-radius: 4px;
          }
          .username:focus {
            border: 1px solid #4786ff;
          }
          .password {
            width: 80%;
            height: 54px;
            padding-left: 20%;
            outline: none;
            border: 1px solid #eeeff1;
            border-radius: 4px;
          }
          .password:focus {
            border: 1px solid #4786ff;
          }
          i {
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translate(0, -50%);
          }
        }

        .login {
          width: 80%;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 5px;
        }
      }
    }
    .right {
      width: 55%;
      height: 100%;
      float: left;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all 1s;
      }
      img:hover {
        transform: scale(1.05);
      }
    }
  }
  .background1 {
    width: 25%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    img {
    }
  }
  .background2 {
    width: 35%;
    height: 80%;
    position: absolute;
    left: 0;
    bottom: 0;
    img {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .background3 {
    width: 25%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 0;
    img {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .background4 {
    width: 35%;
    height: 80%;
    position: absolute;
    right: 0;
    top: 0;
    img {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
