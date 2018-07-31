<template>
  <div class="header">
    <h1>123</h1>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import login from '../../components/common/data/login/login.js';
export default {
  data() {
    return {
    }
  },
  mounted(){
    console.log(login);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1{
    color: #ccc;
    font-size: 12px;
  }
</style>
