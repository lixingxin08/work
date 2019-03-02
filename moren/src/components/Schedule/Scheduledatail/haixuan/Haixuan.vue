<template>
    <div>
        <div id="haixuan">
            <div class="haixuan_l mousehover">全球海选</div>
            <div class="haixuan_c mousehover">国家冠军赛</div>
            <div class="haixuan_r mousehover">世界冠军赛</div>
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
               
        <div  class="project_name" v-show="projectlist[indexs]">
            <div class="project_name_list" v-for="(item,index) in projectnamelist">
                <div class="project_name_list_l">
                    <img src="../../../../img/projectnameimg.png" alt="">
                </div>
                <div class="project_name_lis_c">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div class="project_name_lis_r" ref="sss" v-on:click.stop="toupiao(index,indexs)" :class="toupiaostyle[index]?'project_name_lis_r_at':''">
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
              
                 if(this.projectlist[indexs]==true){                                          
            this.$set(this.toupiaomsg,index,"已投") ; 
             this.$set(this.toupiaostyle,index,true) 
                 }   else{
                 }                                 
             },
             getpaimings(indexs){                 
                this.getpaiming.show=this.getpaiming.show?false:true;
                 this.getpaiming.listheight= !this.getpaiming.listheight;         
                      this.projectlist[indexs]=!this.projectlist[indexs] ;
                      this.$http.get(this.$api.goodsList).then(rsp=>{
                          console.log(rsp);                     
                      })                                                                                
             },
        },
       data(){
           return {
               projectnamelist:["1","1","1","1","1"],
                     name:["主办方","协办方","冠名方","投资机构","评委"],
                     toupiaomsg:["投票","投票","投票","投票"],
                     toupiaoed:"投票",
                     projectlist:[false,false],
                     nowIndex:0,
                     toupiaostyle:[false,false,false,false],
                     getpaiming:{
                         listheight:false,
                         show:false,
                     },                    
           }
       },
      created() {  
      },
    }
</script>
<style scoped>
#haixuan {
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  border: 1px solid #fe0000;
  margin-top: 0.18rem;
  margin-bottom: 0.18rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  font-size: 0.28rem;
  line-height: 0.6rem;
}
.mousehover {
  width: 33.33%;
  color: #fe0000;
}
.mousehover:hover {
  background-color: #fe0000;
  color: white;
}
.haixuan_list {
width: 90%;
margin: 0 auto;
  background-color: #c3c3c3;
  height: 8.64rem;
  padding: 0.2rem;
}
.list {

  background-color:white;
  padding: 5px;
   margin-bottom: 0.2rem;
}
.list_height{
    margin-bottom: 0.2rem;
    background-color:white;
  padding: 5px;
}
.list_top {
    width: 100%;
   height: 0.8rem;
  line-height: 0.8rem;
  background-color: white;
   position: relative;  
}
.list_t_l{
  text-align: center;
  display: flex;
  align-items: center;
}

.list_t_l img {
  width: 0.4rem;
  height: 0.24rem;
}
.toupiao {
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: absolute;
  right: 5px;
}
.toupiao img{
    width: 0.22rem;
    height: 0.22rem;
}
.list_center{
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: flex-start;
}
.list_c_l_img{
    width: 1.4rem;
    height: 1.4rem;
    background: url("../../../../img/xingkong.png") 100% 100% no-repeat;
}
.list_c_r{
    display: flex;
    width: 100%;
    height: 1.4rem;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.list_c_r_name{
    width: 50%;
}
.list_c_b{
    height: 0.5rem;
    display: flex;
    justify-content: flex-start;
    position: relative;
}
.list_c_b_huo{
    width: 1.4rem;
    height: 0.28em;
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
   font-size: 14px;
   position: absolute;
   right: 5px;
   top: -0.05rem;
   display: flex;
   align-items: center;
}
.list_c_b_paiming img{
    width: 0.24rem;
    height: 0.24rem;
}
/**项目列表**/
.project_name{
    width: 100%;
    height: 3.07rem;
    overflow: scroll;
}
.project_name_list{
    display: flex;
    width: 100%;
   height: 1.02rem;
    justify-content: flex-start;
    background-color: white;
      position: relative;
      align-items: center;
     border-top: 1px solid #c3c3c3;
}
.project_name_list_l{
    margin-left: 0.1rem;
}
.project_name_lis_c ul{
    display: flex;
    justify-content: flex-start;
    width:4rem ;
    flex-wrap: wrap;
    padding-left: 0.4rem;
}
.project_name_lis_c ul li{
   width: 2rem;
       text-align: left;
}
.project_name_lis_r{
    width: 0.8rem;
    height: 0.4rem;
    position: absolute;
    right: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    color: #fe0000;
   border: 1px solid #fe0000;   
}
.project_name_lis_r_at{
    color: #c3c3c3;
    border: 1px solid #c3c3c3;
}
</style>


