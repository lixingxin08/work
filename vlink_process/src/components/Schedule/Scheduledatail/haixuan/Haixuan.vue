<template>
    <div>
       <div class="haixuan_content">
         <div id="haixuan" >
            <div class="haixuans" :class="haixuan_bgc[0]?'haixuan_bgc':'mousehover'" @click="haixuan_click(0)">全球海选</div>
            <div class="haixuans" :class="haixuan_bgc[1]?'haixuan_bgc':'mousehover'" @click="haixuan_click(1)">国家冠军赛</div>
            <div class="haixuans" :class="haixuan_bgc[2]?'haixuan_bgc':'mousehover'" @click="haixuan_click(2)">世界冠军赛</div>
        </div>          
       </div>

        <div class="haixuan_list">
            <!--海选内容头部-->
            <div class="list" :class="getpaiming.listheight?'list_height':'list'" v-for="(items,indexs) in projectlist">
                  <div class="list_top">
                    <div class="list_t_l">
                 
                    <img src="../../../../img/guoqi.png" alt="">&nbsp
                     
                    <span>中国/上海</span>&nbsp
                 
                    <span>2018/09/10-2018-12-3</span>
                    <div class="toupiao">
                     <img src="../../../../img/toupiao.png" alt="">&nbsp
                     <span>投票</span>
              
                    </div>
                   </div>
                  </div>
                  <div class="list_center">
                      <div class="list_c_l">
                          <div class="list_c_l_img">
                          </div>
                      </div>
                      <div class="list_c_r">
                          <div v-for="item in name" class="list_c_r_name">
                              {{item}}:机构名称
                          </div>
                      </div>
                  </div>
                  <div class="list_c_b">
                      <div class="list_c_b_huo">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                      </div>
                      <div class="list_c_b_p">
                          此节点共50个项目，123456票
                      </div>
                      <div class="list_c_b_paiming" v-on:click.stop="getpaimings(indexs)">
                          查看排名
                         <img src="../../../../img/xia.png" alt="">                            
                      </div>
                  </div>
                    
               <!--项目列表-->
               
        <div  class="project_name"  v-show="projectlist[indexs]">
            <div class="project_name_list" v-for="(item,index) in projectnamelist">
                <div class="project_name_list_l">
                    <img src="../../../../img/projectnameimg.png" alt="">
                </div>
                <div class="project_name_lis_c">
                    <div class="project_name_lis_c_top">
                        <span>项目名称1</span>
                        <span>123456票</span>
                    </div>
                   <div class="project_name_lis_c_b">
                       <span>线上分数 : 30</span>
                       <span>评委评分 : 50</span>
                       <span>总分 : 暂无</span>
                    </div>                    
                </div>
                <div class="project_name_lis_r"  v-on:click.stop="toupiao(index,indexs)" :class="toupiaostyle[index]?'project_name_lis_r_at':''">
                    {{toupiaomsg[index]}}
                </div>
            </div>
        </div>                     
       </div>   
        </div>
    </div>
</template>
<script>
  export default {
        methods:{
             toupiao(index,indexs){ 
              if(this.toupiaomsg[index]=="投票"){this.$api.voted[0]++}                                                     
            this.$set(this.toupiaomsg,index,"已投") ; 
             this.$set(this.toupiaostyle,index,true) ;
             
             console.log(this.$api.voted);                                         
             },
             getpaimings(indexs){                 
                this.getpaiming.show=this.getpaiming.show?false:true;
                 this.getpaiming.listheight= !this.getpaiming.listheight;         
                      this.projectlist[indexs]=!this.projectlist[indexs] ;                                                                             
             },
             haixuan_click(index){
                 this.haixuan_bgc[0]=false
                 this.haixuan_bgc[1]=false
                 this.haixuan_bgc[2]=false
                 this.$set(this.haixuan_bgc,index,true)                                            
             },
             //获取赛程
             getData(){             
              this.$http.post(this.$api.getGameRoad).then(rsp=>{});
              //获取赛事 赛程名字 ;赛程类型，1-全球海选，2-国家冠军赛，3世界冠军赛 ;页号 ;页码
              this.$http.post(this.$api.getGame,{process_name:"123",event_type:1,page_no:1,page_size:1}).then(rsp=>{});
              let ssss=document.cookie
              console.log(ssss);         
             }
        },

       data(){
           return {
               haixuan_bgc:[true,false,false],
               projectnamelist:["1","1","1"],
                     name:["主办方","协办方","冠名方","投资机构","评委"],
                     toupiaomsg:["投票","投票","投票"],
                     toupiaoed:"投票",
                     projectlist:[true,false],
                     nowIndex:0,
                     toupiaostyle:[false,false,false,false],
                     getpaiming:{
                         listheight:false,
                         show:false,
                     }, 
                     getsaicheng:''                   
           }
       },
       created(){
         this.getData();
         console.log(this.$api.isLogin);
         
       },
    }
</script>
<style scoped>
.haixuan_content{
    height: 0.6rem;
    background-color: #fff;
    text-align: center;
    padding: 0.18rem 0.3rem;   
}
#haixuan {
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  border: 1px solid #fe0000;
  font-size: 0.28rem;
  line-height: 0.6rem;
}
.haixuans{
 width: 33.33%;
}
.mousehover{
  color: #e03434;
}
.haixuan_bgc{
    color: white;
    background-color: #fe0000;
}
.haixuan_list {
  background-color:#edeef3;
  padding: 0.2rem;
  padding-bottom: 1.5rem;
}
.list {
 margin: 0 auto; 
  background-color:white;
   margin-bottom: 0.2rem;
}
.list_height{
    margin-bottom: 0.2rem;
    background-color:white;
}
.list_top {
   height: 0.7rem;
  line-height: 0.7rem;
  background-color: white;
   position: relative; 
   font-size: 0.2rem;
   padding: 0 0.2rem;
}
.list_t_l{
  text-align: center;
  display: flex;
  align-items: flex-end; 
}

.list_t_l img {
  width: 0.4rem;
  height: 0.24rem;
  margin-bottom: 0.23rem;
}
.toupiao {
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: absolute;
  right: 0.2rem;
}
.toupiao img{
    width: 0.28rem;
    height: 0.28rem;
    margin-right: 0.05rem;
    margin-top: 0.17rem;
}
.list_center{   
    height: 1.6rem;
    display: flex;
    justify-content: flex-start;
    padding: 0 0.2rem;
}
.list_c_l_img{
    width: 1.4rem;
    height: 1.4rem;
    background: url("../../../../img/xingkong.png") no-repeat;
    background-size: 100% 100%;
}
.list_c_r{
    display: flex;
    width: 100%;
    height: 1.4rem;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.list_c_r_name{
    width: 40%;
    height: 0.42rem;
    padding-left: 0.22rem;
    text-align: left;
    overflow: hidden;
    font-size: 0.24rem;
}
.list_c_b{
    height: 0.5rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: flex-start;
    position: relative;
}
.list_c_b_huo{
    width: 1.4rem;
    height: 0.28em;
   margin-top: 0.06rem;
}
.list_c_b_huo ul li{
    width: 0.28rem;
    height: 0.28rem;
    background: url("../../../../img/huo.png");
    background-size: 0.28rem 0.28rem;
    float: left;
}
.list_c_b_p{
    font-size: 0.24rem;
    color: #ccc;
    margin-left: 0.4rem;
}
.list_c_b_paiming{
   color: #fe0000;
   font-size: 0.24rem;
   position: absolute;
   right: 0.2rem;
   top: -0.05rem;
   display: flex;
   align-items: center;
}
.list_c_b_paiming img{
    width: 0.20rem;
    height: 0.12rem;
    margin-left: 0.1rem;
}
/**项目列表**/
.project_name{
    width: 100%;
    height: 3.3rem;
}
.project_name_list{
    display: flex;
    width: 100%;
    height: 1.1rem;
    justify-content: flex-start;
    background-color: white;
    position: relative;
      align-items: center;
     border-top: 1px solid #c3c3c3;
}
.project_name_list_l{
    margin-left: 0.1rem;
    font-size: 0.2rem;
}
.project_name_lis_c{
  display: flex;
  flex-direction: column;
  font-size: 0.2rem;
  margin-left: 0.22rem;
}
.project_name_lis_c_top{
    display: flex;
    justify-content: left;
    align-items: center;
}
.project_name_lis_c_top span:nth-child(1){
    font-size: 0.26rem;
    margin-right: 0.2rem;
}
.project_name_lis_c_top span:nth-child(2){
    font-size: 0.2rem;
    color: #c5c5c5;
}
.project_name_lis_c_b{
    font-size: 0.16rem;
    display: flex;
    justify-content: flex-start;
}
.project_name_lis_c_b span{
    text-align: left;
    padding-right: 0.26rem;
}
.project_name_lis_r{
    width: 0.8rem;
    height: 0.4rem;
    line-height: 0.4rem;
    position: absolute;
    right: 0.16rem;
    top: 50%;
    transform: translateY(-50%);
    color: #fe0000;
   border: 1px solid #fe0000; 
   font-size: 0.24rem;  
}
.project_name_lis_r_at{
    color: #c3c3c3;
    border: 1px solid #c3c3c3;
}
</style>


