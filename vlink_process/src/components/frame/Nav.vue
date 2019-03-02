<template>
    <div>
        <div id="nav">
            <div class="white" :class="{'bgc':saicheng}">
                <router-link :to="{ name: 'Home' }"><span class="whilt">赛程</span></router-link>
            </div>
            <div class="nav_project" :class="{'bgc':xiangmu}">
                <router-link :to="{ name: 'project'}"><span class="whilt">项目</span></router-link>
            </div>
            <div class="nav_project" :class="{'bgc':xinwen}" >
                <router-link :to="{ name: 'news'}"><span class="whilt">新闻</span></router-link>
            </div>
           <div class="nav_project" :class="{'bgc':kuaixun}">
                <router-link :to="{ name: 'flash' }"><span class="whilt">快讯</span></router-link>
            </div>
        </div>
    </div>
</template>
<script>


export default {
     data(){
         return{
             saicheng:true,
             xiangmu:false,
             xinwen:false,
             kuaixun:false
         }
     },
   methods:{
            changeNav(){
                if(this.$route.path=="/home"){
                       this.saicheng=true;                     
                   }else{
                       this.saicheng=false
                   };
                    if(this.$route.path=="/project"){
                       this.xiangmu=true;
                       
                   }else{
                       this.xiangmu=false
                   };
                     if(this.$route.path=="/news"){
                       this.xinwen=true
                   }else{
                       this.xinwen=false
                   }
                      if(this.$route.path=="/flash"){
                       this.kuaixun=true
                   }else{
                       this.kuaixun=false
                   }                   
     },
   },

mounted(){
    this.changeNav()
},
watch:{
    $route:'changeNav'
}
}
</script>
<style scoped>

#nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 0.8rem;
    font-size: 0.32rem;
    background-color: #282828;
    color: white;
    line-height: 0.8rem;
}
.bgc{
    background-color: #e03434;
}
#nav div{
    width: 25%;
}

.whilt{
    color: #ffffff;
}

</style>

