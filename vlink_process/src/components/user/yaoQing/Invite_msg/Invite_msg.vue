<template>
    <div>
        <div id="invite_msg">
            <div class="invite_head">
               <div class="computer"></div>
               <div class="huodongzuanshu">
                   <div class="henggang"></div>
                   <div class="henggang"></div>
                   <div class="henggang"></div>
                   <div class="henggang"></div>
               </div>
            </div>
            <div class="invite_content">
                 <div class="invite_c_h">
                     <div class="invite_c_h_list">
                         <div></div>
                         <div>邀请有奖</div>
                         <div></div>
                     </div>
                    </div>
                     <div class="songjifen">
                         邀请好友，送积分
                     </div>
                     <div class="saomiao">
                         好友填入邀请码视为邀请成功
                     </div>
                     <div class="erweima"></div>
                     <div class="invite_myma">
                          <span></span>
                         <span>我的邀请码</span>
                         <span></span>
                     </div>
                     <div class="invite_numb">
                         1LD6Z9
                     </div>
 
            </div>
        </div>
    </div>
</template>
<style scoped>
#invite_msg{
    background-color: #e4ecff;
    padding-bottom: 0.42rem;
}
.invite_head{
    width: 100%;
    height: 4.06rem;
    background: url("../../../../img/invitemsgimg.png");
    background-size: 100% 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
}
.computer{
    width: 0.7rem;
    height: 0.6rem;
    background: url("../../../../img/computer.png");
    background-size: 100% 100%;
    margin-top: 0.65rem;
}
.huodongzuanshu{
    width: 2.86rem;
    height: 0.38rem;
    margin-top: 1.24rem;
    background: url("../../../../img/huodongzuanshu.png");
    background-size: 100% 100%;
    position: relative;
}
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
.invite_content{
    width: 90%;
    height:7.73rem ;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 0.38rem;
    padding-top: 1.32rem;
    position: relative;
    background-color: #fff;
}
.invite_c_h{
    width: 100%;
    height: 0.81rem;
    background: url("../../../../img/invitejuxing.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    color: white;
}
.invite_c_h_list{
    width: 2.48rem;
    height: 0.81rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.invite_c_h_list>div:nth-child(2n+1){
    width: 0.2rem;
    height: 0.24rem;
    background: url("../../../../img/lingxing.png") no-repeat;
    background-size: 100%;
}
.songjifen{
    font-size: 0.4rem;
    color: #f7a01d;
    margin-top: 0.5rem;
}
.saomiao{
    font-size: 0.24rem;
    color: #c5c5c5;
    margin-top: 0.38rem;
}
.erweima{
    width:2.05rem ;
    height: 2.05rem;
    background: url("../../../../img/erweima.png");
    background-size: 100%;
    margin: 0 auto;
    margin-top: 0.54rem;   
}
.invite_myma{
    width: 80%;
    margin: 0 auto;
    margin-top: 0.93rem;
   color: #6696ff;
   display: flex;
   justify-content: space-around;
   font-size: 0.28rem;
}
.invite_myma span:nth-child(2n+1){
    width: 1.42rem;
    height: 0.28rem;
    background: url("../../../../img/hengxian2.png") no-repeat;
    background-position-y: 0.2rem;
}
.invite_numb{
    color: #6696ff;
    font-size: 0.42rem;
    margin-top: 0.53rem;
}
</style>

