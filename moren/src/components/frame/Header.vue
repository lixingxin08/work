<template>
    <div>
        <header>
            <div class="logo">
                <div class="logo1">
                    <img src="../../img/logo2.png" alt="">
                </div>
                <div class="logo2">
                    <img src="../../img/logo.png" alt="">
                </div>
            </div>
            <div class="gba"><span>GBA</span></div>
            <div class="login" v-model="loginend">
                <router-link :to="{name:'login'}" v-if="loginend"><span class="white">登录</span></router-link>
                <router-link :to="{name:'usermsg'}" v-else><span class="white">
                    <img src="../../img/touxiang.png" alt="" class="touxiang">
                </span></router-link>                
            </div>
        </header>
    </div>
</template>
<script scoped>
   export default {
      data(){
          return {
              loginend:false,
          }
      },
       methods:{

       }
   }
</script>
<style>
.white{
    color: white;
}
header{
    display: flex;
    justify-content: space-between;
    height: 0.7rem;
    background: #1b1b29;
    
    line-height: 0.7rem;
    color: white;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
}
.touxiang{
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.1rem;
}
.gba{
    margin-right: 0.4rem;
}
.logo{
   height: 0.4rem;
     margin-top: 0.1rem;

  display: flex;
  justify-content: start;
}
.logo1{
  margin-right: 0.2rem;
}
.logo2 img{
 width: 0.8rem;
 height: 0.4rem;
}
.logo1 img{
     width: 0.4rem;
     height: 0.4rem;
}
.login{
}
</style>

