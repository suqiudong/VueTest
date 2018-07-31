<template>
  <div class="box">
    <h1><span>123</span>789</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  h1 {
    font-size: 18px;
    color: #ccc;
    span {
      font-size: 14px;
      color: #f60;
    }
  }
}
</style>
