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
                   新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
               </div>
               <div class="flash_substance">
                   内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
               </div>
           </div>
           <div class="flash_footer">
               <div class="flash_f_l">
                   <div class="flash_f_l_up">
                          <span class="el-icon-caret-top"></span>
                   赞同
                   </div>
                   <div class="flash_f_l_down">
                       <span class="el-icon-caret-bottom"></span>
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
    export default {
        data(){
            return {
                flash_list:["1","1","1","1","1"],
                flash_content_list:["1","1"]
            }
        }
    }
</script>
<style scoped>
#flash{
    width: 90%;
    margin: auto;
    height: 100%;
    padding: 0.2rem;
    border: 0.2rem solid #edeef3;
}
.flash_list{
    display: flex;
    height: 7.4rem;
    flex-direction: column;
    text-align: left;
   border-bottom: 0.4rem solid#edeef3;
}
.flash_head{
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
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
    top: 0.15rem;
    left: -0.2rem;
}
.flash_substance{
    height: 0.96rem;
    color: #c3c3c3;
    overflow: auto;
}
.flash_footer{
    display: flex;
    padding-left: 0.2rem;
    justify-content: space-between;
}
.flash_f_l{
    width: 2rem;
    height: 0.4rem; 
    background-color:#fed4d4;
    color: #e03434;
    text-align: center;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.flash_f_l_down{
    border-left: 0.4rem solid white;
}
.flash_f_r{
    width: 3rem;
    height: 0.3rem;
    line-height: 0.3rem;
    display: flex;
    justify-content: space-between;
}
.flash_f_r img{
  width: 0.3rem;
  height: 0.3rem;
}
</style>

