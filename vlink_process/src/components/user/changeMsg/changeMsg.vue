<template>
    <div>
     <my-header></my-header>
     <div class="change_msg">
     <div class="change_img change_dis">
         <img src="../../../img/my_img.png" alt="">
         <span>修改头像</span>
     </div>
     <div class="change_name change_dis">
         <div class="margin_r">昵称</div>
        <div>昵称昵称</div>
     </div>
     <div class="change_jianjie change_dis">
         <div class="margin_r">个人简介</div>
         <div>昵称昵称</div>
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
 }
</script>
<style scoped>
.change_msg{
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 0.24rem;
}
.change_img{
height: 0.66rem;
line-height: 0.66rem;
font-size: 0.24rem;
color: #c3c3c3;
}
.change_dis{
    display: flex;
    justify-content: flex-start;
    padding: 0.3rem;
   border-bottom: 1px solid #c3c3c3;
}
.margin_r{
    width: 1.2rem;
    font-size: 0.24rem;
    margin-right: 0.3rem;
}
.change_img img{
width: 0.7rem;
height: 0.7rem;
 margin-right: 0.8rem;
}
</style>

