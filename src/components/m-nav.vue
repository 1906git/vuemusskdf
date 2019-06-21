<template>
  <ul class='m-nav'>
      <router-link active-class='sel' tag='li' to='/recommend'>
        <span>推荐</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/singer'>
       <span>歌手</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/rank'>
        <span>排行</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/search'>
        <span>搜索</span>
      </router-link>      
  </ul>
</template>
<script>
export default {
}
</script>
<style lang="less" scope>
@import '~style/index.less';
.m-nav{
  display: flex;
  background: @bg-color-black;
  justify-content: space-around;
  .w(375);
  li{
    // .h(44);
    height: 44px;
    .l_h(44);
    color:@font-color-whiteO;
    .f_s(14);
     span{
       padding-bottom:3px; 
       border-bottom: 2px solid @bg-color-black;
     }
  }
  .sel{
    color: @font-color-yellow;
    span{
      border-bottom: 2px solid @font-color-yellow;
    }
  }
}
</style>
