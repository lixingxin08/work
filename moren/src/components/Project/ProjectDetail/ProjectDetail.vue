<template>
  <div>
    <div id="projectdetail">
          <div class="projectdetail_header">
                <a href="javascript:history.back()">   <span class="el-icon-arrow-left white"></span>
                </a>
               <span class="center">
                   项目详情
               </span>
          </div>   
           <div class="projectdetail_user">
              <div class="projectdetail_user_img">
                  <img src="../../../img/userimg.png" alt="">                
              </div>
              <div class="projectdetail_msg">
                  <div class="projectdetail_username">
                      项目名称
                  </div>
                  <div class="projectdetail_take">
                     简介简介
                  </div>
              </div>
              <div class="projectdetail_user_r">
                  查看白皮书
              </div>
          </div> 
          <div class="projectdetail_tabs">
             <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="介绍" name="first">介绍</el-tab-pane>
                <el-tab-pane label="新闻" name="second">新闻</el-tab-pane>
                <el-tab-pane label="投资" name="third">投资</el-tab-pane>
                <el-tab-pane label="评测" name="fourth">评测</el-tab-pane>
                <el-tab-pane label="参赛" name="five">参赛</el-tab-pane>
              </el-tabs>
          </div>
    </div>
   </div>   
</template>
<script>
      export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab);
        
      }
    }
  };
</script>
<style scoped>
.white{
    color: white;
}
.projectdetail_header{
    width: 100%;
    height: 0.7rem;
    background: #282828;
    text-align: left;
    padding-left: 0.2rem;
    line-height: 0.7rem;
}
.center{
   position: absolute;
   left: 50%;
   color: white;
   transform: translateX(-50%)
}
.projectdetail_user {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  position: relative;
}
.projectdetail_user_img img {
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.projectdetail_take{
    color: #626262;
}
.projectdetail_user_msg {
  text-align: left;
  margin-left: 0.2rem;
}
.projectdetail_user_r{
  width: 2rem;
  height: 0.4rem;
  border: 1px solid #fe0000;
  position: absolute;
  line-height: 0.4rem;
  right: 0.2rem;
  top: 0.48rem;
  font-size: 0.36rem;
  color: #fe0000;
}
.projectdetail_tabs{
    padding-left: 0.2rem;
    height: 7rem;
    border-bottom: 1px solid black;
    text-align: left;
}

</style>
<style>
.el-tabs__item:hover{
    color: #fe0000
}
.el-tabs__item.is-active{
    color: #fe0000
}
.el-tabs__active-bar{
    background-color: #fe0000;
}
</style>


