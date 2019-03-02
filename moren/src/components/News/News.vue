<template>
    <div>
        <div id="news">
          <div class="news_list" v-for="item in news_list">
             <div class="news_l">
                <img src="../../img/xingkong.png" alt="">
            </div>
            <div class="news_r">
                 <div class="news_r_t">
                    <router-link :to="{name:'newsdetail'}">
                        <span class="black">新闻标题 新闻标题 新闻标题 新闻标题 新闻标题 新闻标题</span>
                    </router-link>
                </div>
                <div class="news_r_b">
                    <span>25分钟前</span>
                    <span>相关媒体</span>
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
                 news_list:["1","1","1","1"]
           }
       }
    }
</script>
<style scoped>
.black{
    color: black;
}
#news {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 0.2rem;
  background-color: #c3c3c3;
}
.news_list{
    width: 100%;
    height: 2rem;
    display: flex;
    padding-left: 0.26rem;
    align-items: center;
    border-bottom: 1px solid #c3c3c3;
    background-color: white;
}
.news_r{
    padding-right: 0.46rem;
}
.news_r_t{
    text-align: left;
    height: 1.16rem;
}
.news_l{
  width: 3.12rem;
  height: 1.5rem;
  margin-right: 0.26rem;
}
.news_l img{
      width: 3.12rem;
    height: 1.5rem;
}
.news_r_b{
    width: 3rem;
    font-size: 12px;
    color: #c3c3c3;
  display: flex;
  justify-content: space-between;
}
</style>


