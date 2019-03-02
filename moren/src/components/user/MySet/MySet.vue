<template>
    <div>
       <my-header></my-header>
        <div id="myset">
         <router-link :to="{name:'callus'}">
          <div class="callme">
             <span>联系我们</span>
             <img src="../../../img/xiangyou.png" alt="">
         </div>            
         </router-link>
          <div class="callme">
             <span>切换语言</span>
             <img src="../../../img/xiangyou.png" alt="">
         </div>
         <div class="callme quitlogin" v-on:click="dropoutshow()">
             <span>退出登录</span>
             <img src="../../../img/xiangyou.png" alt="">
         </div>                 
        </div>
        <div class="dropout">
            <div class="dropout_msg">
                <span>确定要退出账号？</span>
                <span>退出账号后，将无法投票、评论获得积分</span>
                <div class="dropout_s">
                    <span>确定</span>
                    <span v-on:click="dropouthidden()">取消</span>
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
            dropoutshow(){
                let dropout=document.querySelector('.dropout');
                let dropout_msg=document.querySelector('dropout_msg');
                   console.log(dropout);
                dropout.style.display="block";
                 dropout_msg.style.display="block";
              
                 
            },
            dropouthidden(){
                let dropout=document.querySelector('.dropout');
                let dropout_msg=document.querySelector('dropout_msg');
                    console.log(dropout);
                dropout.style.display="none";
                 dropout_msg.style.display="none";
            },            
        },
        mounted() {
        }, 
     }
</script>
<style scoped>
#myset{
    height: 26rem;
    background-color: #edeef3;
}
.callme{
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-between;
   align-items: center;
    padding-left:0.2rem ;
    padding-right: 0.2rem;
    background-color: #fff;
    border-bottom: 1px solid #e4ecff;
    color: black;
}
.callme img{
    width: 0.1rem;
    height: 0.2rem;
}
.quitlogin{
    margin-top: 0.2rem;
}
.dropout{
    position:absolute;left:0px;top:0px;
    background:rgba(0, 0, 0, 0.4);
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height:100%;
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    display:none; 
    z-Index:999;
}
.dropout_msg{
    position:absolute;
    width:5.5rem;
    height:2.8rem;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:#fff;
    display:none;
    cursor:pointer;
    z-Index:9999; 
    border-radius: 10px;  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0.4rem;
}
.dropout_s span:active{
  color: #ff9932;
}
.dropout_msg>span:nth-child(1){
    font-size: 0.3rem;
}
.dropout_msg>span:nth-child(2){
    font-size: 0.24rem;
}
.dropout_s{
    width: 100%;
    height: 0.9rem;
    display: flex;
    border-top: 1px solid #ff9932;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
}
.dropout_s span{
    width: 50%;
    height: 0.9rem;
    line-height: 0.9rem;
}
.dropout_s span:nth-child(1){
  border-right: 1px solid #ff9932;
}
</style>

