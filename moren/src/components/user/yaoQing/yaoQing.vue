<template>
    <div>
     <my-header></my-header>
     <div class="yaofans">
       <div class="zuanjifen">
           <div class="henggang"></div>
           <div class="henggang"></div>
           <div class="henggang"></div>
           <div class="henggang"></div>
       </div>
       <div class="evey_yao"></div>
    </div> 
       <div class="invite_content">
       <div class="invite_inp">
           <input type="text" placeholder="请输入邀请码">
           <div class="jiguobtn">激活</div>
       </div>
       <div class="my_invite">
           分享我的邀请码[1LD6Z9]
       </div>
       <div class="my_invite_b">
           好友填入邀请码视为邀请成功
       </div>
       <div class="invite_link">
           <ul v-for="item in way">
               <router-link :to="{name:'invitemsg'}">
               <li class="invite_link_img"><img :src="item.imgurl" alt=""></li>
                 </router-link>
               <router-link :to="{name:'invitemsg'}">
                <li class="black">{{item.name}}</li>   
               </router-link>
           </ul>
       </div>
       <div class="success_invite">
           累计成功邀请20位好友，共获取300积分
       </div>
       <div class="invite_list">
           <ul class="invite_list_h">
               <li>邀请好友</li>
               <li>二级邀请</li>
               <li>获取奖励</li>
           </ul>
       </div>
      </div>   
    </div>
</template>
<script>
  import myHeader from '../../frame/MyHeader.vue'; 
  import img1 from '../../../img/invite1.png' ;
   import img2 from '../../../img/invite2.png' ;
    import img3 from '../../../img/invite3.png' ;
     import img4 from '../../../img/invite4.png' ;
      import img5 from '../../../img/invite5.png' ;
  export default {
      components:{
          myHeader,
      },
      data(){
          return{                  
                   ivt_num:["1","2","3","4","5",],
              way:["微信好友","朋友圈","QQ好友","QQ空间","更多",],
              way:[
                  {name:"微信好友", imgurl:img1},
                   {name:"朋友圈",imgurl:img2},
                    {name:"QQ好友",imgurl:img3},
                     {name:"QQ空间",imgurl:img4},
                      {name:"更多",imgurl:img5},
              ]
          }
      }
  }
</script>
<style scoped>
.yaofans{
    width: 100%;
    height: 2.4rem;
   background: url("../../../img/yaohaoyou.png") 100% 100% no-repeat;
   background-size: 100% 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; 
}
.zuanjifen{
    width: 3.32rem;
    height: 0.36rem;
    background: url("../../../img/zuanjifen.png") no-repeat;
    background-size: 100% 100%;
    z-index: 2;
    margin-bottom: 0.6rem;
    margin-top: 0.86rem;
    position: relative;
}
.black{color: black}
.henggang{
   width: 0.24rem;
   height: 0.24rem;
   border-left: 0.02rem solid #fff;
   border-top: 0.02rem solid #fff;
   position: absolute;
   z-index: 1;
}
.henggang:nth-child(1){
    top:-0.4rem;
    left: -0.4rem;
}
.henggang:nth-child(2){
      transform: rotate(90deg);
    top:-0.4rem;
    right: -0.4rem;
}
.henggang:nth-child(3){
     transform: rotate(270deg);
    bottom:-0.4rem;
    left:-0.4rem;
}
.henggang:nth-child(4){
    transform: rotate(180deg);
    bottom:-0.4rem;
    right: -0.4rem;
}


.evey_yao{
    width: 5.52rem;
    height: 0.18rem;
    background: url("../../../img/meiciyao.png") no-repeat;
    background-size: 100% 100%;
    z-index: 2;   
}
.invite_content{
    
    width: 90%;
    margin: auto;
   display: flex;
   text-align: center;
   flex-direction: column;
   margin-top: 0.4rem;
   margin-bottom: 0.4rem;
}
.invite_inp{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.invite_inp input{
    width: 5rem;
    height: 0.6rem;
    border: none;
    padding-left: 0.4rem;
    border: 1px solid #c3c3c3;
}
.jiguobtn{
    width: 1rem;
    height: 0.58rem;
    color: #fff;
    padding-top: 0.07rem;
    background-color: #e03434;
}
.my_invite{
    margin-top: 0.4rem;
}
.my_invite_b{
    font-size: 0.24rem;
    color: #c3c3c3;
}
.invite_link{
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
}
.invite_link_img{
    width: 0.8rem;
    height: 0.8rem;
    margin-bottom: 0.2rem;
}
.invite_link_img img{
    width: 0.8rem;
    height: 0.8rem;
}
.success_invite{
    height: 0.6rem;
    margin-top: 0.4rem;
    line-height: 0.6rem;
    width: 100%; 
    border-top: 1px solid #c3c3c3; 
     border-bottom: 1px solid #c3c3c3;  
}
.invite_list_h{
    display: flex;
    justify-content: space-around;
     height: 0.6rem;
     line-height: 0.6rem;
    width: 100%; 
    border-bottom: 1px solid #c3c3c3; 
}
</style>

