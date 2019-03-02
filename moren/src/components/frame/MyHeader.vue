<template>
    <div>
          <div class="my_header">
                <a href="javascript:history.back()">   <span class="el-icon-arrow-left white"></span>
                </a>
               <div class="my_center" v-bind="change()">
                   {{title}}
               </div>
               <div class="my_head_r" v-if="set_hidden">
                   <div class="xiugai">
                    <router-link :to="{name:'changemsg'}">
                         <img src="../../img/xiugai.png" alt="">
                    </router-link>
                   </div>
                   <div class="shezhi">
                     <router-link :to="{name:'myset'}">
                         <img src="../../img/shezhi.png" alt=""> 
                    </router-link> 
                   </div>
               </div>
               <div class="change_set" v-if="changeset">保存</div>
          </div>  
    </div>
</template>
<script>
    export default {
     methods:{
         change(){             
             if(this.$route.path=="/usermsg"){ 
                 this.title="我的";
                 this.set_hidden=true;
             }
             else if(this.$route.path=="/usermsg/yaoqing"){
               this.title="邀请好友加入vlink";           
             }
             else if(this.$route.path=="/login"){
               this.title="登录";           
             }             
             else if(this.$route.path=="/usermsg/changemsg"){
                 this.title="编辑资料";
                 this.changeset=true;
             }
            else if(this.$route.path=="/usermsg/myset"){
                 this.title="设置";
             }
            else if(this.$route.path=="/usermsg/jifendetail"){
                 this.title="积分详情";
             } else if(this.$route.path=="/login/selectzone") {
                 this.title="选择国家/地区"
             }           
         },
   
     },
     data(){
         return{
             title:'我的',
             set_hidden:false,
             changeset:false
         }
     },
     created() {
         this.change()
     },
    }
</script>
<style scoped>
.white{
    color: white;
}
.my_header{
    width: 100%;
    height: 0.7rem;
    background: #282828;
    padding-left: 0.2rem;
    line-height: 0.7rem;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.my_center{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
   color: white;
}
.my_head_r{
    width: 1.4rem;
    height: 0.7rem;
    display: flex;
    justify-content: flex-start;
   padding-top: 0.2rem;
}
.xiugai{
    margin-right: 0.3rem;
}
.my_head_r img{
  width: 0.26rem;
  height: 0.26rem;
}
.change_set{
    color: #ff9932;
    margin-right: 0.4rem;
}
</style>

