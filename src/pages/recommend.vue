<template>
  <div class='recommend'> 
      <div class='content'>
        <MBanner :list='banners'></MBanner>
        <p>这里是推荐</p>
         <ul class='hotlist'>
           <li v-for='(item,index) in hot'
               :key='index'
           >
             <div class='imgdiv'>
                <img v-lazy="item.imgurl" alt="">
             </div>    
             <div class='descdiv'>
                <span class='first'>{{item.creator.name}}</span>
                <span >{{item.dissname}}</span>
             </div>
             
           </li>
         </ul>
      </div>
  </div>
</template>
<script>
import BS from 'better-scroll'
import MBanner from 'components/m-banner'
import { setTimeout } from 'timers';

export default {
  data(){
    return{
      banners:[],
      hot:[]
    }
  },
  components:{
    MBanner
  },
  methods:{
    initBannerData(){
     this.$axios.get('/dev/fcj/recommend/banner')
     .then((res)=>{
        let list=res.data.slider.map((item)=>{
          return item.picUrl
        })
        this.banners=list
     })
    },
    initHotData(){
      this.$axios.get('/dev/fcj/recommend/hot/')
      .then((res)=>{
        console.log(res)
        this.hot=res.data.list
      })
    }
  },
  mounted(){
    new BS('.recommend')
    this.initBannerData()
    this.initHotData()

  }
}
</script>
<style lang="less" scope>
@import '../common/style/index.less';
.recommend{
   position: fixed;
   .top(88);
   bottom: 0px;
   overflow: hidden;
   .content{
     p{
       .w(375);
       .h(65);
       .f_s(14);
       .l_h(65);
       text-align: center;
       color:@font-color-yellow;
     }
     .hotlist{
       li{
         .f_s(14);

         .padding(0,20,20,20);
         display: flex;
         .imgdiv{
           .padding(0,20,0,0);
           img{
              .w(60);
              .h(60);
            }
         }
         .descdiv{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            color:@font-color-whiteO3;
            .first{
              color:@font-color-white;
            }
         }
       
     }
   }
  }
}
// .recommend::-webkit-scrollbar{
//      display: none;
//    }
</style>
