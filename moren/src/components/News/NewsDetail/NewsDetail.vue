<template>
    <div>
        <div id="newsdetail">
          <div class="newsdetail_header">
           <router-link :to="{name:'news'}">
                <span class="el-icon-arrow-left white"></span>
           </router-link>
              <div class="fenxiang white">
                  分享有奖
                  <img src="../../../img/fenxiangbai.png" alt="">
              </div>
          </div>
           <div class="newsdetail_content">
          <div class="newsdetail_title">
             新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
          </div>
          <div class="newsdetail_user">
              <div class="newsdetail_user_img">
                  <img src="../../../img/userimg.png" alt="">                
              </div>
              <div class="newsdetail_user_msg">
                  <div class="newsdetail_username">
                      昵称
                  </div>
                  <div class="newsdetail_time">
                      20分钟前
                  </div>
              </div>
          </div>
          <div class="newsdetail_msg">
              新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容 新闻内容新闻内容
          </div>              
           </div>
                          <div class="newsdetail_footer">
                   <div class="newsdetail_footer_l">
                          <span class="el-icon-caret-top"></span>
                   赞同
                   </div>
                   <div class="newsdetail_footer_r">
                       <span class="el-icon-caret-bottom"></span>
                   </div></div>
        </div>
    </div>
</template>
<style scoped>
.white {
  color: white;
}
.newsdetail_header {
  width: 100%;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0.3rem;
  background-color: black;
  color: white;
  align-items: center;
}
.fenxiang {
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
}
.fenxiang img {
  width: 0.35rem;
  height: 0.35rem;
  margin-left: 0.2rem;
}
.newsdetail_content {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.newsdetail_title {
  height: 0.68rem;
  text-align: left;
  margin-top: 0.34rem;
  margin-bottom: 0.34rem;
  font-style: normal;
}
.newsdetail_user {
  display: flex;
  justify-content: flex-start;
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
}
.newsdetail_user_img img {
  width: 0.9rem;
  height: 0.9rem;
}
.newsdetail_user_msg {
  text-align: left;
  margin-left: 0.2rem;
}
.newsdetail_msg {
  margin-top: 0.28rem;
  margin-bottom: 0.28rem;
  color: #909090;
  text-align: left;
  overflow: auto;
}
.newsdetail_footer {
  width: 2rem;
  height: 0.4rem;
  background-color: #fed4d4;
  color: #e03434;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 0.4rem;
}
.newsdetail_footer_r {
  border-left: 0.4rem solid white;
}
</style>

