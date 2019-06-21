<template>
  <div id="app">
    <MHead></MHead>
    <MNav></MNav>
    <router-view></router-view>

  </div>
</template>
<script>
import MHead from 'components/m-head'
import MNav from  'components/m-nav'

export default {
  components:{
    MHead,MNav
  }
}
</script>
<style lang="less" scope>
@import '~style/index.less';
#app{
  background: @bg-color-black;
  position: fixed;
  top:0;
  bottom: 0;
}

</style>
