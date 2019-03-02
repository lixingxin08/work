<template>
    <div class="news_box"  v-infinite-scroll="loadMore"
               infinite-scroll-disabled="loading"
                infinite-scroll-distance="5">
        <div id="news">
            <div>
          <div class="news_list" v-for="(item,index) in news_list">
             <div class="news_l">
                <img v-lazy="newsimgs" alt="">
            </div>
            <div class="news_r">
                 <div class="news_r_t">
                    <router-link :to="{name:'newsdetail',params:{id:page_id}}">
                        <span class="black">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</span>
                    </router-link>
                </div>
                <div class="news_r_b">
                    <!-- <span>{{item[index].created_time|formatDate}}分钟前</span> -->
                    <span>相关媒体</span>
                </div>
            </div>
          </div>
          
        </div>
       </div> 
    </div>
</template>
<script>
import dateFormat from '../../js/Date.js';
import newsimg from '../../img/xingkong.png';
  export default {
       data(){
           return {
                 news_list:["0"],
                 loading:false,
                 news_id:0,
                 time_id:1539587938253,
                 page_id:11,
                 newsimgs:newsimg,
           } 
       },
       methods:{
           getNewsData(){               
               this.$http.get(this.$api.getFlash)           
               .then(rsp=>{console.log(rsp)
            //    this.$set(this.news_list,0,rsp.data.data.news_list);
            //        console.log(this.news_list[0])        
               })
           },
           loadMore() {         
            //   this.loading = true;
            //   setTimeout(() => {
            //   let last = this. news_list[this. news_list.length - 1];
            //   for (let i = 1; i <= 20; i++) {
            //  this. news_list.push(last)
            //     }
            //  console.log(this.news_list);   
            //  this.loading = false;
            //   }, 1500);
             }  ,
       },
     filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "mm");
         }
     }, 
        created(){
            this.getNewsData()
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
  background-color: #edeef3;
  font-size: 0.26rem;
}
.news_box{
    width: 100%;
    height: 14rem;
    overflow: auto;
}
.news_list{
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
image[lazy=loading] {
     width: 3.12rem;
    height: 1.5rem;
  margin: auto;
}
.news_r_b{
    width: 3rem;
    font-size: 0.24rem;
    color: #c3c3c3;
  display: flex;
  justify-content: space-between;
}
</style>


