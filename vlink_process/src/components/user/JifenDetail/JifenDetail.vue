<template>
    <div>
       <my-header></my-header>
      <div id="jifendetail">
          <div class="jifen_head">
             <span>我的积分</span>
             <span>123456<img src="../../../img/day.png" alt=""></span>             
          </div>
          <div class="jifen_list jifen_head">
              <div class="jiangli">
                   <span>投票奖励</span>
                   <span>2010-9-30</span>
              </div>
              <span>123456<img src="../../../img/day.png" alt=""></span>
          </div>
          <div class="jifen_list jifen_head" v-for="item in jifenlist">
              <div class="jiangli">
                   <span>投票奖励</span>
                   <span>{{item.time}}</span>
              </div>
              <span>{{item.jifennumb}}<img src="../../../img/day.png" alt=""></span>
          </div>          
      </div>
    </div>
</template>
<script>
      import myHeader from '../../frame/MyHeader.vue';
     export default {
         components:{
            myHeader,
        },
     data(){
         return{
             jifenlist:[
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},               
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
                 {time:"2012-8-12",jifennumb:"123"},
             ]
         }
     } ,      
     }
</script>
<style scoped>
#jifendetail{
    font-size: 0.24rem;
}
.jifen_head{
   width: 100%;
   height: 0.8rem;
   line-height: 0.8rem;
   display: flex;
   justify-content: space-between;
   padding-left:0.2rem ;
   border-bottom: 1px solid #c3c3c3;
}
.jifen_head img{
    width: 0.24rem;
    height: 0.24rem;
     margin-left: 0.2rem;
}

.jifen_head span:nth-child(2){
    height: 1rem;
    margin-right: 0.6rem;
   display: flex;
   align-items: center;
   color: #c3c3c3
}
.jifen_head>span:nth-child(2){
    color: #ff9932
}
.jifen_list{
    padding-bottom: 0.2rem;
}
.jiangli{
    display: flex;
    flex-direction: column;
    text-align: left;
}
</style>

