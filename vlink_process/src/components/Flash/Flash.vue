<template>
    <div>
       <div id="flash">
          <div class="flash_list" v-for="item in flash_list">
           <div class="flash_head">
             <div class="flash_head_content">
               <span>今天</span>
                <span>9月20日</span>
                <span>星期四</span>                
             </div>
           </div>
            <div class="flash_list_contents" v-for="item in flash_content_list">
           <div class="flash_content">
           
               <div class="clock">11:30
                       <div class="yuandian"></div>
               </div>
               <div class="flash_title">
                   新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题 新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
               </div>
               <div class="flash_substance">
                   内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
               </div>
           </div>
           <div class="flash_footer">
               <div class="flash_f_l">
                   <div class="flash_f_l_up">
                   赞同<span>02</span>
                   </div>
                   <div class="flash_f_l_down">
                   </div>
               </div>
               <div class="flash_f_r">
                  <div>
                   <img src="../../img/pinglun.png" alt="">
                   <span>20</span>                     
                  </div>
                  <div>
                   <img src="../../img/fenxiang.png" alt="">
                   <span>分享有奖</span>                   
                  </div>
               </div>
            </div>                 
            </div> 
           </div>
       </div>
    </div>
</template>
<script>
import dateFormat from '../../js/Date.js';
    export default {
        data(){
            return {
                flash_list:["1","1","1","1","1"],
                flash_content_list:["1","1"]
            }
        },
        methods:{
            getFlashData(){
                this.$http.get(this.$api.getFlash).then(rsp=>console.log(rsp))
            },
        },
        created(){
            this.getFlashData()
        },
     filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "mm");
         }
     },         
    }
</script>
<style scoped>
#flash{
    width: 100%;
    margin: auto;
    height: 100%;
    font-size: 0.26rem;
    display: flex;
    flex-direction: column;
    background-color: #edeef3;
   padding-top: 0.2rem;

}
.flash_list{
    display: flex;
    width: 90%;
    height: 7.9rem;
    padding: 0.2rem;
    margin: 0 auto;
    flex-direction: column;
    text-align: left;
     margin-bottom: 0.2rem;
     background-color: #fff;
}
.flash_head{
    width: 100%;
    border-bottom: 1px solid #edeef3;
}
.flash_head_content{
    width: 4rem;
    height: 0.7rem;
    line-height: 0.7rem;
    display: flex;
    justify-content: space-between;
}
.flash_content{
   padding-left: 0.2rem;
   display: flex;
   flex-direction: column;
   height: 2.8rem;
   position: relative;
   margin-top: 0.32rem;
}
.clock{
    position: relative;
}
.yuandian{
    width: 0.16rem;
    height: 0.16rem;
    background-color:#e03434;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -0.2rem;
}
.flash_title{
    font-size: 0.24rem;
    height: 0.96rem;
    overflow: hidden;
}
.flash_substance{
    height: 1.2rem;
    font-size: 0.24rem;
    color: #c3c3c3;
    overflow: auto;
}
.flash_footer{
    display: flex;
    padding-left: 0.2rem;
    justify-content: space-between;
    align-items: center;
}
.flash_f_l{
    width: 1.96rem;
    height: 0.42rem;
    line-height: 0.42rem; 
    overflow: initial;

    color: #e03434;
    display: flex;
    justify-content: start;
    font-size: 0.2rem;

}
.flash_f_l_up{
    width: 1.44rem;
    height: 0.42rem;
    line-height: 0.43rem;
    background: url(../../img/zantongshang.png) no-repeat;
    background-size: 0.12rem 0.1rem;
    background-position: 0.15rem center;
    padding-left: 0.4rem;
    background-color:#fed4d4;
    border-radius: 0.08rem;  
}
.flash_f_l_down{
    width: 0.39rem;
    height: 0.42rem;
    background: url(../../img/zantongxia.png) no-repeat;
    background-size: 0.12rem 0.1rem; 
    margin-left: 0.16rem;
    background-color:#fed4d4;
    background-position: center center;
    border-radius: 0.08rem;    
}
.flash_f_r{
    width: 3rem;
    height: 0.3rem;
    line-height: 0.3rem;
    display: flex;
    justify-content: space-between;
}
.flash_f_r img{
  width: 0.25rem;
  height: 0.25rem;
}
</style>

