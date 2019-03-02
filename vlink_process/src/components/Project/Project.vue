<template>
    <div>
        <div id="project">
          <div class="shadow_box" v-if="project_paixu_show||saixuan_show"></div>           
            <div class="project_head">
                <div class="xitongpaixu" @click.stop="project_paixu_shows()">系统评测排序<span class="xiangxia"></span></div>
                <div class="project_paixu" v-if="project_paixu_show">
                    <div>系统评测排序</div>
                    <div>评测机构排序</div>
                    <div>投资机构排序</div>
                </div>
                <div class="project_saixuan"  v-if="saixuan_show">
                    <div class="saixuan_head">
                        项目类型
                    </div>
                    <div class="saixuan_content">
                        <span v-for="item in saixuan_list">{{item}}</span>  
                    </div>
                </div>
                <div class="shaixuan" @click.stop="saixuan_shows()">筛选<span class="xiangxia"></span></div>
            </div>
            <div class="project_list" v-for="item in project_list">
                <div class="pro_list_l">
                    <img src="../../img/xingkong.png" alt="">
                </div>
                <div class="pro_list_c">
                     <div class="project_name">
                        <router-link :to="{name:'projectdetail'}">
                        <span class="black">项目名称</span>
                    </router-link>                     
                     </div>
                        <div class="project_datail">p项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍</div>
                </div>
                <div class="pro_list_r">
                    <div class="pro_list_r_t">
                        系统评测:88.99
                    </div>
                    <div class="pro_list_r_b">
                        参赛中<span class="xiangxiared"></span>
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
              project_list:["1","1","1","1","1"],
              saixuan_list:["全部","基础链","社交通讯","内容与版权","物联网","平台币","AR/VR","体育娱乐","数据缓存","AI","钱包","真实性验证","生物医疗","广告传媒","网络安全","DAG"],
              saixuan_show:false ,
              project_paixu_show:false,        
          }
      },
      methods:{
          saixuan_shows(){  
              if(this.project_paixu_show==true){
                  this.project_paixu_show=false
              }
              this.saixuan_show=!this.saixuan_show
          },
          project_paixu_shows(){
              if(this.saixuan_show==true){
                  this.saixuan_show=false
              }
              this.project_paixu_show=!this.project_paixu_show
          }
      }
  }
</script>
<style scoped>
.black{
    color: black;
}
.shadow_box{
     position:absolute;left:0px;top:0px;
    background:rgba(0, 0, 0, 0.4);
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height:100%;
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    display:block; 
    z-Index:10;   
}
#project{
    font-size: 0.24rem;
}
.xiangxia{
    width: 0.22rem;
    height: 0.1rem;
    display: inline-block;
    position: relative;
    top: -0.03rem;
    background: url("../../img/projectdown.png") no-repeat;
    background-size: 0.22rem 0.1rem;
    margin-left: 0.1rem;
}
.xiangxiared{
    width: 0.22rem;
    height: 0.1rem;
    top: -0.03rem;
    display: inline-block;
    position: relative;
    background: url("../../img/xia.png") no-repeat;
    background-size: 0.22rem 0.1rem;
    margin-left: 0.1rem;
}
.project_head{
    width: 100%;
    height: 0.66rem;
    line-height: 0.66rem;
    font-size: 0.24rem;
    background-color: #edeef3;
    display: flex;
    justify-content:flex-end;
     position: relative;
     z-index: 11;
}

.project_paixu{
    width: 100%;
    height: 2.21rem;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    top: 0.6rem;
    background-color: #fff;
    z-index: 11;
}
.project_paixu div{
    height: 0.75rem;
    width: 90%;
    margin: 0 auto;
    text-align-last: left;
    font-size: 0.28rem;
    border-top:1px solid #edeef3;
}
.project_paixu div:hover{
    color: #e03434;
}
.project_saixuan{
    width: 100%;
    height: 4.21rem;
    position: absolute;
    display: block;
    justify-content: flex-start;
    flex-direction: column;
    top: 0.6rem;
    background-color: #fff;
    z-index: 2;  
}
.saixuan_head{
    width: 100%;
    height: 0.7rem;
    color: #e03434;
    border-bottom: 1px solid #edeef3;
    text-align: left;
    padding-left: 0.4rem;
}
.saixuan_content{
    width: 100%;
    height: 3.2rem;
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: 0.3rem;
}
.saixuan_content span{
    width:20%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.22rem;
    color: #c5c5c5;
    border: 1px solid #edeef3;
}
.saixuan_content span:hover{
    color: #e03434;
}
.el-icon-arrow-down{
    width: 0.2rem;
    height: 0.1em;
    margin-left: 0.1rem;
}
.shaixuan{
    padding-right: 0.4rem;
    margin-left: 0.3rem;
}
.project_list{
    height: 1.6rem;
    display: flex;
    justify-content: flex-start;
    padding-top: 0.4rem;
    padding-left: 0.3rem;
    position: relative;
    border-bottom: 1px solid #edeef3;
}
.pro_list_l img{
    width: 1.2rem;
    height: 1.2rem;
}
.pro_list_c{
  text-align: left;
  margin-left: 0.26rem;
}

.project_name{
   font-size: 0.26rem
}
.project_datail{
    width: 3.12rem;
    font-size: 0.24rem;
    color: #c3c3c3;
    height: 0.75rem;
    overflow: auto;
    padding-top: 0.05rem;
    line-height: 0.38rem;
}
.pro_list_r{
    text-align: right;
    position: absolute;
    right: 0.64rem;

}
.pro_list_r_t{
    color: #c3c3c3;
}
.pro_list_r_b{
    color: #fe0000;
    line-height: 0.72rem;
    font-size: 0.32rem;
}

</style>

