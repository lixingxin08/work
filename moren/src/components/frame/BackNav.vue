<template>
    <div>
          <div class="backnav_header">
                <a href="javascript:history.back()">   <span class="el-icon-arrow-left white"></span>
                </a>
               <div class="center">
                  {{title}}
               </div>
          </div>  
    </div>
</template>
<script>
    export default {
       data(){
           return {
               title:'项目详情1'
           }
       }
    }
</script>
<style scoped>
.white{
    color: white;
}
.backnav_header{
    width: 100%;
    height: 0.7rem;
    background: #282828;
    text-align: left;
    padding-left: 0.2rem;
    line-height: 0.7rem;
    position: relative;
}
.center{
   position: absolute;
   left: 50%;
   top: 0;
   color: white;
   transform: translateX(-50%)
}
</style>

