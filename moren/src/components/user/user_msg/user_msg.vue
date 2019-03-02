<template>
    <div>
    <div id="my_msg">
       <my-header></my-header>
       <!--我的信息-->
       <div class="my_msg">
           <div class="my_msg_l">
               <img src="../../../img/my_img.png" alt="">
           </div>
           <div class="my_msg_r">
               <div>
                   昵称 昵称 昵称
               </div>
               <div class="my_msg_r_b">
                   <div class="my_money">
                      <img src="../../../img/moneyleft.png" alt=""> 
                      <img src="../../../img/qianbao.png" alt="">                       
                   </div>
                   <router-link :to="{name:'jifendetail'}">
                   <div class="my_jifen my_money">
                      <img src="../../../img/jifenleft.png" alt=""> 
                      <img src="../../../img/jifen.png" alt="">                     
                    </div>                        
                   </router-link>
               </div>
           </div>
       </div>
       <!--签到-->
       <div class="qiandao">
           <div class="qiandao_head">
               <div class="qiandao_head_l">
                   每日签到
                   <span>已签到{{register}}天</span>
               </div>
               <div class="qiandao_btn">
                   签到
               </div>
           </div>
           <div class="qiandao_foot">
               <div class="qiandao_foot_day">
                   <ul v-for="item in daylist">
                       <li>第一天</li>
                       <li class="day_list_img"><img src="../../../img/day.png" alt=""></li>
                       <li>11</li>
                   </ul>
               </div>
           </div>
       </div>
       <!--邀请图片-->
       <div class="my_yaoqing">
         <div class="my_yaoqing_msg">
          <div class="yaoqing_msg">
             <p>好友邀请他人时</p>
             <p>你可获得额外金币</p>
         </div>
         <div class="yaoqing_go">
            <router-link :to="{name:'yaoqing'}"><span class="white"> GO</span></router-link>
         </div>            
         </div>
       </div>
       <!--每日任务-->
       <div class="task">
           <div class="task_head">
               每日任务
           </div>
           <div class="task_list">
               <div class="task_list_img">
                      <img src="../../../img/renwu1.png" alt="">       
               </div>
               <div class="task_list_c">
                  <ul>
                      <li> 投票  <span>+2</span></li>
                      <li>赛事投票奖励</li>
                      <li>完成1/3 <span>最多得6积分</span></li>
                  </ul>
               </div>
               <div class="task_list_r">
                   投票
               </div>
           </div>
           <!--任务2-->
           <div class="task_list">
               <div class="task_list_img">
                      <img src="../../../img/renwu2.png" alt="">       
               </div>
               <div class="task_list_c">
                  <ul>
                      <li> 点赞  <span>+3</span></li>
                      <li>赛事投票奖励</li>
                      <li>完成1/3 <span>最多得6积分</span></li>
                  </ul>
               </div>
               <div class="task_list_r">
                   投票
               </div>
           </div>
           <!--任务3-->
           <div class="task_list">
               <div class="task_list_img">
                      <img src="../../../img/renwu3.png" alt="">       
               </div>
               <div class="task_list_c">
                  <ul>
                      <li> 分享  <span>+10</span></li>
                      <li>赛事投票奖励</li>
                      <li>完成1/3 <span>最多得6积分</span></li>
                  </ul>
               </div>
               <div class="task_list_r">
                   投票
               </div>
           </div>                      
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
        methods:{
        },
        data(){
           return{
                daylist:["1","1","1","1","1","1","1"],
                toupiao:["1","1","1"],
                register:200,
           }
        }
  }
</script>
<style scoped>
.white{
    color: white;
}
.my_msg{
    width: 100%;
    height: 1.1rem;
    background-color: white;
    padding:0.3rem ;
   display: flex;
   justify-content: flex-start;
   border-bottom: 0.2rem solid #edeef3;
}
.my_msg_l{
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.7rem;
}
.my_msg_l img{
    width: 0.7rem;
    height: 0.7rem;
}
.my_msg_r{
text-align: left;

}
.my_msg_r_b{
    width: 5.2rem;
    height: 0.4rem;
    line-height: 0.4rem;
    display: flex;
    justify-content: space-between;
color: #de3333;
}
.my_money{
    width: 2.4rem;
    height: 0.4rem;
    border: 1px solid #df3232;
    display: flex;
    line-height: 0.4rem;
    align-items: center;
    justify-content: flex-start;
}
.my_money img:nth-child(1){
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
.my_money img:nth-child(2){
    width: 2rem;
    height: 0.2rem;
}
.qiandao{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0.3rem;
    height: 2.2rem;
    border-bottom: 0.2rem solid #edeef3;
}
.qiandao_head{
    width: 100%;
    height: 0.84rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c3c3c3;
  line-height: 0.84rem;
}
.qiandao_head_l span{
    margin-left: 0.2rem;
    color: #c3c3c3;
}
.qiandao_btn{
    width: 1.2rem;
    height: 0.6rem;
    color: white;
    line-height: 0.6rem;
    background-color: #e03434;
}
.qiandao_foot_day{
    width: 100%;
    height: 1.6em;
    display: flex;
    justify-content: space-around;
    color: #ff9932;
}
.day_list_img img{
    width: 0.26rem;
    height: 0.32rem;
}
.my_yaoqing{
    width: 100%;
    height: 2rem;
    background: url("../../../img/yaoqing.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    border-bottom: 0.2rem solid #edeef3;
}
.my_yaoqing_msg{
    position: absolute;
    top: 0.3rem;
    right: 0.94rem;
    color: white;
    z-index: 2;
    text-align: left;

}
.yaoqing_go{
   width: 1rem;
   height: 0.5rem;
   border: 1px solid #fdffff;
   text-align: center;
}
.task{
    width: 100%;
    height: 5.54rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
    text-align: left;
}
.task_head{
    width: 100%;
    height: 0.62rem;
    line-height: 0.31rem;
   border-bottom: 1px solid #edeef3;
}
.task_list{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #edeef3;
    position: relative;
}
.task_list_img{
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.3rem;
}
.task_list_img img{
    width: 0.7rem;
    height: 0.7rem;
}
.task_list_c{
    font-size: 0.24rem
}
.task_list_r{
    width: 1.2rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    background-color:#e03434 ;
}
</style>

