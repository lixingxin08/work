<template>
  <div id="app">
   <div class="appheader">
      <app-header></app-header>
   </div>
    <div class="appnav">
      <app-nav></app-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import appHeader from './components/frame/Header.vue';
import appNav from './components/frame/Nav.vue';
export default {
  name: 'App',
  components:{
     appHeader,
     appNav
  },
     methods:{
       obtailUrl(){
           let Urlstr=[];
           let detailUrl=[];
           let gba=document.querySelector('.gba');
           let appheader=document.querySelector('.appheader')
           let appnav=document.querySelector('.appnav')         
           let thatUrl=this.$route.path ;  

                          /**路由判断消除头部**/
              if(thatUrl=="/home"){
                   appheader.style.display="block";
                    appnav.style.display="block"
              }
               else if(thatUrl=="/project"){
                   appheader.style.display="block";
                    appnav.style.display="block"                                    
               } 
               else if(thatUrl=="/news"){
                     appheader.style.display="block";
                    appnav.style.display="block"                                 
               }
               else if(thatUrl=="/flash"){
                   appheader.style.display="block";
                    appnav.style.display="block"                                 
               }                               
              else{  
                 appheader.style.display="none";
                  appnav.style.display="none"   
              }
              /** 快讯路由判断**/
               if(thatUrl=="/usermsg"){
                 
              }else{             
              }                   
       },
   },
 watch:{
  '$route':'obtailUrl'
 },
 mounted() {
    this.obtailUrl()
 },
}
</script>
  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
