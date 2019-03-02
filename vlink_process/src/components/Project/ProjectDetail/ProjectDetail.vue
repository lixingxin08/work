<template>
  <div>
    <div id="projectdetail">
          <div class="projectdetail_header">
                <a href="javascript:history.back()">   <span class="xiangzuo white"></span>
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

          <div class="projectdetailc_content">
           <!-- 介绍-->
           <div class="pj_content">
           <div class="present">
               <div class="present_head">
                   <img src="../../../img/jiesao.png" alt="">
                   <span>介绍</span>
               </div>
               <div class="present_content">
                   present_contentpresent_contentpresent_contentpresent_contentpresent_contentpresent_contentpresent_contentpresent_content
               </div>
               <div class="present_msg">
                   <img src="../../../img/userimg.png" alt="">
                   <span>姓名</span>
                   <span>职务</span>
               </div>
               <div class="present_text">
                   个人介绍个人介绍个水水水水个人介绍个人介绍个水水水水个人介绍个人介绍个水水水水个人介绍个人介绍个水水水水个人介绍个人介绍个水水水水
               </div>
            </div>
            </div> 
            <!--投资-->
              <div class="pj_content">
                 <div class="present">
                   <div class="present_head">
                   <img src="../../../img/touzi.png" alt="">
                   <span>投资</span>
               </div>   
                </div> 
                <div class="touzi_msg">
                    <div>当前融资情况</div>
                    <div class="touzi_money">B轮 <span>总融资金额 : XXXX万人民币</span></div>
                </div>
                 <div class="touzi_jigou">
                    <div>当前融资情况</div>
                    <div class="touzi_money">天使轮 : 机构A</div>
                    <div class="touzi_money">天使轮 : 机构A</div>
                </div>
                <div class="touzi_pingce">
                    <div class="touzi_pingce_head">
                        投资机构评测(20) : 87分
                    </div>
                    <div class="touzi_pingce_content">
                        <div>机构A : 88分</div>
                        <div>机构A : 88分机构A : 88分机构A : 88分</div>
                    </div>
                    <div class="touzi_pingce_content">
                        <div>机构A : 88分</div>
                        <div>机构A : 88分机构A : 88分机构A : 88分</div>
                    </div>
                    <div class="touzi_pingce_content">
                        <div>机构A : 88分</div>
                        <div>机构A : 88分机构A : 88分机构A : 88分</div>
                    </div>                                        
                </div>    
              </div>
           <!--评测-->
              <div class="pj_content pingce">
                 <div class="present">
                   <div class="present_head">
                   <img src="../../../img/touzi.png" alt="">
                   <span>投资</span>
               </div>
                </div>  
              <div class="pingce_head">评分情况</div>
              <div class="pingce_content" v-for=" item in 3">
                  <span>市场(共20个评测) : 82分</span>
                  <img src="../../../img/pingceyou.png" alt="">
                </div>
               <div class="pingce_head">投资机构评测(20) : 87分</div>
                    <div class="pingce_foot">
                        <div>机构A : 88分</div>
                        <div>机构A : 88分机构A : 88分机构A : 88分机构A : 88分机构A : 88分机构A : 88分机构A : 88分</div>
                    </div>
                    <div class="pingce_foot">
                        <div>机构A : 88分</div>
                        <div>机构A : 88分机构A : 88分机构A : 88分机构A : 88分机构A : 88分机构A : 88分机构A : 88分</div>
                    </div>                                                               
             </div> 
        <!--参赛-->    
              <div class="pj_content pingce in_game">
                 <div class="present">
                   <div class="present_head">
                   <img src="../../../img/cansai.png" alt="">
                   <span>参赛</span>
                     </div>
                </div>
                    <div class="gamesname">
                        <span>赛事名称</span>
                        2018/09/10-2018/10/31
                         <div class="gametoupiao">投票</div>
                    </div>
                 <div class="gamemsg">
                          <div class="gamemsg_content" v-for="item in 6">
                              <span>世界冠军</span>
                              <span>5/18</span>
                          </div>
                    </div>
                 <div class="gamemsg">
                          <div class="gamemsg_content" v-for="item in 6">
                              <span>世界冠军</span>
                              <span>5/18</span>
                          </div>
                    </div> 
                 <div class="gamemsg">
                          <div class="gamemsg_content" v-for="item in 6">
                              <span>世界冠军</span>
                              <span>5/18</span>
                          </div>
                    </div>                                             
            </div>


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
  };
</script>
<style scoped>
.white{
    color: white;
}
.xiangzuo{
    width: 0.12rem;
    height: 0.2rem;
    display: block;
    position: relative;
    top: 0.25rem;
    background: url("../../../img/xiangzuo.png") no-repeat;
    background-size: 0.12rem 0.2rem;
}
#projectdetail{
    background-color: #edeef3;
}
.projectdetail_header{
    height: 0.7rem;
    background: #282828;
    text-align: left;
    padding-left: 0.2rem;
    line-height: 0.7rem;
}
.center{
    height: 0.7rem;
   position: absolute;
   top: 0;
   left: 50%;
   color: white;
   transform: translateX(-50%);
   font-size: 0.26rem;
}
.projectdetail_user {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 0.28rem;
  padding-bottom: 0.28rem;
  position: relative;
  background-color: white;
  margin-bottom: 0.2rem;
}
.projectdetail_user_img img {
  width: 0.88rem;
  height: 0.84rem;
  margin-left: 0.26rem;
  margin-right: 0.14rem;
}
.projectdetail_username{
    font-size: 0.3rem;
    line-height: 0.44rem;
}
.projectdetail_take{
    font-size: 0.2rem;
    line-height: 0.36rem;
}
.projectdetail_user_r{
  width: 1.54rem;
  height: 0.38rem;
  border: 1px solid #e03434;
  position: absolute;
  line-height: 0.38rem;
  right: 0.3rem;
  top: 0.48rem;
  font-size: 0.24rem;
  color: #e03434;
}
/**详情主体**/
.projectdetailc_content{
    width: 100%;
    background-color: #fff;
}
.pj_content{
   padding-top: 0.2rem;
   padding-right: 0.3rem;
   padding-left: 0.32rem;
   margin-bottom: 0.18rem;
    font-size: 0.24rem;
    text-align: left;
}
.present_head{
    height: 0.62rem;
    border-bottom: 1px solid #edeef3;
    font-size: 0.3rem;
   line-height: 0.62rem;
   text-align: left;
   color: #f7a01d;
}
.present_head img{
    width: 0.24rem;
    height: 0.3rem;
    margin-top: 0.13rem;
    margin-right: 0.08rem;
}
.present_content{
    margin: 0 auto;
    height: 1.4rem;
    padding: 0.3rem 0;
    padding-right: 0.17rem;
    word-wrap: break-word;
    text-align: left;
    overflow: scroll;
    color: #959595;
}
.present_msg{
    height:0.82rem;
   padding-top: 0.24rem;
   padding-bottom: 0.17rem;
    position: relative;
    left: -0.07rem;
    font-size: 0.24rem;
    font-weight: 900;
    line-height: 0.82rem;
    text-align: left;
}
.present_msg img{
    width: 0.87rem;
    height: 0.82rem;
}
.present_msg span:nth-child(1){
    margin-left: 0.11rem;
    margin-right: 0.4rem;
}
.present_text{
    height: 1.07rem;
    padding-right: 0.17rem;
    color: #959595;
}
/**投资*/
.touzi_msg{
    height: 0.84rem;
    border-bottom: 1px solid #edeef3;
    font-size: 0.26rem;
    font-weight: 900;
    padding: 0.18rem 0;
    line-height: 0.45rem;
}
.touzi_money{
    color: #959595;
    font-weight: normal;
}
.touzi_money span{
    margin-left: 0.7rem;
}
.touzi_jigou{
    height: 1.48rem;
    border-bottom: 1px solid #edeef3;
    font-size: 0.26rem;
    font-weight: 900;
    padding: 0.18rem 0;
    line-height: 0.47rem;
}
.touzi_pingce_head{
    height: 0.9rem;
    line-height: 0.9rem;
    font-weight: normal;
}
.touzi_pingce_content{
    height: 0.72rem;
    color: #959595;
    line-height: 0.36rem;
    padding-top: 0.05rem;
    padding-bottom: 0.37rem;
}
/**评测*/
.pingce{
    padding-top: 0;
    position: relative;
    top: -0.2.2rem;
}
.pingce_head{
    height: 0.72rem;
    line-height: 0.72rem;
    border-bottom: 1px solid #edeef3;
}
.pingce_content{
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    color: #959595;
    align-items: center;
    border-bottom: 1px solid #edeef3;    
}
.pingce_content img{
    width: 0.12rem;
    height: 0.24rem;
}
.pingce_foot{
    height: 1.26rem;
    font-size: 0.26rem;
    color: #959595;
    line-height: 0.4rem;
    padding: 0.05rem 0;
    border-bottom: 1px solid #edeef3;
    overflow: hidden;
}
/**参赛*/
.in_game img{
  width: 0.28rem;
  height: 0.28rem;
}
.gamesname{
  height: 0.74rem;
  color: #c5c5c5;
  position: relative;
  font-size: 0.26rem;
  line-height: 0.7rem;
  overflow: hidden;
  border-bottom: 1px solid #edeef3;
}
.gamesname span{
    color: black;
   margin-right: 0.28rem;
}
.gametoupiao{
    width: 0.8rem;
    height: 0.42rem;
    line-height: 0.42rem;
    position: absolute;
    top:0.14rem;
    text-align: center;
    right: 0;
    color: #e03434;
    border: 1px solid #e03434;
    border-radius: 0.05rem;
}
.gamemsg{
    height: 1rem;
    color: #c5c5c5;
    border-bottom: 1px solid #edeef3;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gamemsg_content{
    text-align: center;
}
</style>


