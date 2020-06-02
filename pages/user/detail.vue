<template>
  <div>vue-detail
    detialid: {{$route.query.id}}
  </div>
</template>

<script>
export default {
  // 组件进入内钩子  
  beforeRouteEnter (to,from, next) {
    console.log('22222')
    next();
  },
  // 组件内离开钩子
  beforeRouteLeave(to,from, next) {
    console.log('离开')
    next();
  }
}
</script>
<style scoped>
</style>