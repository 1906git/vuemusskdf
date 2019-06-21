<template>
  <div class='singer'>
      <ul>
        <li v-for ='(v,k,i) in names' 
            :key='i'
        >
          <span>{{k}}</span>
          <ol>
            <li v-for='(item,index) in v'>
              {{item}}
            </li>

          </ol>
        </li>      
      </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      names: { 'A':['A1','A2','A3'],
                'B':['B1','B2','B3'],
                'C':['C1','C2','C3']
              }
    }
  },
  methods:{
    initSingerData(){
      this.$axios.get('/dev/fcj/singer/list')
      .then((res)=>{
        console.log(res)
      })
    }

  },
 mounted() {
    this.initSingerData()
 },
}
</script>
<style lang="less" scope>
@import '../common/style/index.less';
</style>
