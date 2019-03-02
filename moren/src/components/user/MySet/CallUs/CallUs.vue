<template>
    <div>
    <my-header></my-header>
   <div class="w">
    <div class="callus">
        <div class="hezuo">
            <span>商务合作</span>
            <img src="../../../../img/hezuoyou.png" alt="">
        </div>
        <div class="us_msg">
            <span>手机:135677890987</span>
            <span>邮箱:135677890987@163.com</span>
            <span>微信:vlink官方</span>
        </div>
         </div> 
        <div class="baoming">
             <div class="baoming_xm">项目报名</div>
             <div class="baoming_link"><a href="#">www.vlink.com(请用PC打开)</a></div>
        </div>
     
   </div>
    </div>
</template>
<script>
  import myHeader from '../../../frame/MyHeader.vue';
     export default {
         components:{
            myHeader,
        }, 
     }
</script>
<style scoped>
.w{
    height: 26rem;
    background-color: #edeef3;
}
.callus{
    width: 100%;
     background-color: #fff;
     padding-left: 0.2rem;
     padding-right: 0.2rem;
}
.hezuo{
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-between;
   align-items: center;
    padding-right: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid #e4ecff;
    color: black;
}
.hezuo span{
    font-size: 0.3rem;
}
.hezuo img{
    width: 0.1rem;
    height: 0.2rem;
}
.us_msg{
    height: 1.8rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
}
.baoming{
    height: 0.8rem;
    height: 1.7rem;
    background-color: #fff;
    margin-top: 0.2rem;
    padding-left: 0.2rem;
}
.baoming_xm{ 
    width: 100%;
    
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    border-bottom: 1px solid #edeef3;
        text-align: left;
}
.baoming_link{
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.24rem;
    text-align: left;

}
</style>

