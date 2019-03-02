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
                      <span>积分 : {{integraldetail}}</span>                    
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
                   <span>( 已签到{{register}}天 )</span>
               </div>
               <div :class="{'isclick':isclicks[0],'beforeclick':!isclicks[0]}" class="qiandao_btn" @click="signed()">
                   签到
               </div>
           </div>
           <div class="qiandao_foot">
               <div class="qiandao_foot_day" >
                   <ul v-for="(item,index) in yellow" :class="{'graycolor':true}">
                       <li :class="item?'':'yellowcolor'">{{daylist[index]}}</li>
                       <li class="day_list_img"><img :src="msg_img_src[index]" alt=""></li>
                       <li :class="item?'':'yellowcolor'">+10</li>
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
                      <li>完成{{voteds[0]}}/3 <span>最多得6积分</span></li>
                  </ul>
               </div>
              <router-link :to="{name:'Home'}">
               <div class="task_list_r" :class="{'isclick':isclicks[1],'beforeclick':!isclicks[1]}">
                   投票
               </div>                  
              </router-link>
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
                      <li>完成{{voteds[2]}}/3 <span>最多得6积分</span></li>
                  </ul>
               </div>
           <router-link :to="{name:'flash'}">
               <div class="task_list_r" :class="{'isclick':isclicks[2],'beforeclick':!isclicks[2]}">
                  点赞
               </div>               
           </router-link>
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
                      <li>完成{{voteds[2]}}/3 <span>最多得6积分</span></li>
                  </ul>
               </div>
            <router-link :to="{name:'flash'}">
               <div class="task_list_r" :class="{'isclick':isclicks[3],'beforeclick':!isclicks[3]}">
                   分享
               </div>                
            </router-link>
           </div>                      
       </div>
    </div>  
    </div>
</template>
<script>
  import myHeader from '../../frame/MyHeader.vue';
  import img_src from '../../../img/day.png';
  import img_src2 from '../../../img/day2.png';
  export default {
         components:{
            myHeader,
        }, 
        data(){
           return{
                toupiao:["1","1","1"],
                register:200,
                yellow:[false,false,false,false,true,true,true],
                daylist:["第一天","第二天","奖励","第四天","奖励","第六天","奖励"],
                msg_img_src:[img_src,img_src,img_src,img_src,img_src2,img_src2,img_src2],
                integraldetail:0,
                isclicks:[false,false,false,false],
                voteds:[0,0,0],   //投票，赞成 分享情况
           }
        },
        methods:{

            //获取用户积分
            getuserjifen(){
                this.$http.get(this.$api.getPiontsList+1).then(
                    rsp=>{console.log(rsp)},
                    this.integraldetail=parseInt(this.$api.integral)
                );
            this.$http.get(this.$api.getPionts).then(rsp=>{
                console.log(rsp);        
            });
            //积分任务情况
             this.voteds=this.$api.voted;
             if(this.voteds[0]>=3){this.voteds[0]=3;this.isclicks[1]=true};
             if(this.voteds[1]>=3){this.voteds[1]=3;this.isclicks[2]=true};
             if(this.voteds[2]>=3){this.voteds[2]=3;this.isclicks[3]=true};
             this.integraldetail+=3*this.voteds[0]+3*this.voteds[1]+6*this.voteds[2];
            },
            //点击签到
            signed(){
               if(this.isclicks[0]==false){ this.integraldetail=this.integraldetail+10;this.$api.integral=+this.$api.integral+10;}
                this.isclicks[0]=true;
            },
        },
        created() {
            this.getuserjifen()
        },        
  }
</script>
<style scoped>
.white{
    color: white;
}
.isclick{
    background-color: #fff;
    color: #c5c5c5;
    border: 1px solid #c5c5c5;
}
.beforeclick{
    background-color: #e03434;
    color: white;
    border: 1px solid #e03434;   
}
#my_msg{
    font-size: 0.24rem;
    background: #edeef3;
}
.my_msg{
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
    border-radius: 0.05rem;
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
.my_jifen{
    color: #e03434;
    font-size: 0.2rem;
}
.my_jifen img{
    height: 0.25rem;
}
.qiandao{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding:0 0.3rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
}
.qiandao_head{
    height: 0.84rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c3c3c3;
  line-height: 0.84rem;
   align-items: center;
}
.qiandao_head_l span{
    margin-left: 0.2rem;
    color: #c3c3c3;
    font-size: 0.24rem;
}
.qiandao_btn{
    width: 1.02rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.22rem;
    margin-top: 0.11rem;
    border-radius: 0.05rem;
}
.qiandao_foot{
    height: 1.6rem;
}
.qiandao_foot_day{
    display: flex;
    height: 1.6rem;
    justify-content: space-around;
}
.qiandao_foot_day ul{
    height: 1.4rem;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    padding: 0.1rem 0;
}
.award{
    width: 0.8rem;
    height: 0.4rem;
    border-radius: 0.05rem;
    background-color: #c5c5c5;
    color: white;
}
.awarded{
    background-color: #ff9932;
}
.yellowcolor{
     color: #ff9932;
}
.graycolor{
    color: #c3c3c3;
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
   line-height: 0.5rem;
   border-radius: 0.05rem;
}
.task{
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
    width: 1.02rem;
    height: 0.42rem;
    text-align: center;
    line-height: 0.42rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 0.05rem;
    font-size: 0.22rem;
}
</style>

