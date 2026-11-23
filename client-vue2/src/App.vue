<template>
  <div>
    <h1>Heelo World</h1>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  // 详细写法
  /* const options = {
    data: function () {
      return { msg: '你好！' }
    }
  }
  export default options */

  // 简洁写法
  export default {
    data() {
      return {
        msg: "Hello, Vue!"
      }
    }
  }
</script>