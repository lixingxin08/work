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
            <div :class="{'gba':selectGba,'gbaclick':!selectGba}" v-show="showGba" @click="selectGbas()">
                <span v-for="(item,index) in gameRoad" class="saicheng" @click="Gbamsg(index)">{{item}}<span class="xiangxiawhite"></span></span>
            </div>
            <div class="login" v-model="loginend[0]">
                  <router-link :to="{name:'usermsg'}"  v-if="loginend[0]"><span class="white">
                    <img src="../../img/touxiang.png" alt="" class="touxiang">
                </span></router-link> 
                <router-link :to="{name:'login'}" v-else><span class="white">登录</span></router-link>
               
            </div>
        </header>
    </div>
</template>
<script scoped>
import bus from '../../js/bus.js'
   export default {
      data(){
          return {
              loginend:[],
              showGba:false,
              selectGba:true,
              gameRoad:[],
          }
      },
       methods:{
            showGbas(){  
                  this.$set(this.loginend,0,this.$api.isLogin[0]);
             console.log(this.loginend);               
                if(this.$route.path=='/home'){
                    this.showGba=true
                }else{
                    this.showGba=false
                }
            },
            selectGbas(){
                       this.selectGba=!this.selectGba                    
            },
            Gbamsg(index){
                         this.$set(this.gameRoad,0,this.gameRoad[index]);                    
            }
       },
      created(){
          this.showGbas()
          this.gameRoad=this.$api.gameRoad;
      
      },
      watch:{
          $route:'showGbas'
      }
   }
</script>
<style>
.white{
    color: white;
}
.xiangxiawhite{
    width: 0.1rem;
    height: 0.22rem;
    display: inline-block;
    position: relative;
    background: url("../../img/xiangzuo.png") no-repeat;
    background-size: 0.1rem 0.22rem;
    margin-left: 0.1rem;
    transform: rotate(270deg)
}
header{
    width: 100%;
    height: 0.7rem;
    background: #1b1b29;   
    line-height: 0.7rem;
    color: white;
    position: relative;
}
.touxiang{
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.1rem;
}
.gba{
   width: 1rem;
    height: 0.7rem;
   position: absolute;
   left: 50%;
   font-size: 0.24rem;
   transform: translateX(-50%);
   background: #1b1b29;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   overflow: hidden;   
}
.saicheng{
    display: block;
    width: 100%;
    height: 0.7rem;
    z-index: 2;
    background: #1b1b29;
    color: white;
    border-bottom: 1px solid #000407;
}
.gbaclick{
       width:1rem;
    height: 2.8rem;
   position: absolute;
   left: 50%;
   font-size: 0.24rem;
   transform: translateX(-50%);
   background: #1b1b29;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   overflow: hidden;
   z-index: 6;
}
select{
                border: none;          
                outline: none;         
                width: 100%;
                height: 0.7rem;
                line-height: 0.7rem;          
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                  background: #1b1b29; 
                  color: white;
            }
.logo{
    position: absolute;
    width: 1.3rem;
    height: 0.7rem;
     left: 0.24rem;
    display: flex;
    justify-content: start;
    align-items: center;
}
.logo1{
    width: 0.4rem;
    height: 0.37rem;
    margin-right: 0.17rem;
}
.logo1 img{
        width: 0.4rem;
        height: 0.37rem;
}
.logo2{
    width: 0.8rem;
      height: 0.23rem;
}
.logo2 img{
 width: 0.8rem;
 height: 0.23rem;
}
.login{
    position: absolute;
    right: 0.2rem;
    top: 50%;
    font-size: 0.24rem;
    transform: translateY(-50%);
}
</style>

