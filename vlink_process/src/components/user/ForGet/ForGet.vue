<template>
    <div>
        <div id="forget">
       <my-header></my-header>
        <div class="register_img">
        </div>
        <div class="register_content">
          <form    name="myform" method="post" id="forgetform">
             <div class="tel tels">
               <router-link :to="{name:'selectzone'}">
              <div class="selecttel">+{{tel[0]}}</div>   
               </router-link>
               <input type="number" name="userId" placeholder="请输入手机号码" value="" v-model="username" class="usertel" @blur="getcell()">
             </div>          
             <div class="invite_get">
               <input type="password" name="password" placeholder="请输入密码" value="" v-model="password">
             </div>            
             <div class="invite_get">
               <input type="password" name="userId" placeholder="请确认密码" value="" v-model="confirmpsw" @blur="confirmpsws()">
             </div> 
                  <!--短信验证-->   
                   <huakuai-yan v-if="isshow[0]"></huakuai-yan>           
            <div class="short"> 
              <input type="number" placeholder="请输入短信验证码"  size="19" value="" v-model="validation"/>
            <div :class="{'getshort':shorted,'getshorted':!shorted}" @click.stop="getshort()">
               <span v-show="shorted">{{short_msg}}</span>
               <span v-show="!shorted">{{shorttime}}s后重发</span>
            </div>            
            </div> 
           <div class="forgetsubmit">
                      <input type="button" name="btnSubmit" value="确定重置密码" id="forgetsubmit">   
           </div>
           
              </form>   
        </div>
         </div>
    </div>
</template>
<script>
import myHeader from "../../frame/MyHeader.vue";
import huakuaiYan from "../login/huankuaiyanzheng.vue";
export default {
  components: {
    myHeader,
    huakuaiYan,

  },
  methods: {
    check() {}
  },
  data(){
    return {
      registered:false,
      username:"",
      password:"",
      confirmpsw:"",
      tel:["86"],
      validation:"",
      short_msg:"获取短信",
      shorted:true,
      shorttime:60,
      shortinterval:null,
      isshow:[false],
    }
  },
  methods:{
         //确认密码
            confirmpsws(){
                 if( this.password==this.confirmpsw){
                     console.log(1111);                   
                 }else{
                     this.confirmpsw=""
                     alert("俩次密码不相同")
                 }
            },

         /** 获取号码*/
                 getcell(){
                     this.$api.cellphone=this.username;  
                     //验证手机号码是否可以
                     this.$http.get(this.$api.isSet,{cellphone:this.$api.cellphone}).then(rsp=>console.log(rsp),err=>{console.log(err)})                         
                 },
         /**获取短信 */
         getshort(){
           //请求验证码
            // 打开滑块 
            if(this.username!=''){ this.$set(this.isshow,0,true) }                              
           this.shorted=false;
            this.shortinterval= setInterval(()=>{
             this.shorttime--;
             if(this.shorttime<1){
               this.shorttime=60;
               this.shorted=true;
             }
           },1000)
         } ,
         
  },
  created(){
  },
   beforeDestroy() {
    clearInterval(this.shortinterval);
   },
};
</script>
<style scoped>
#forget{
  width: 100%;
  margin: 0 auto;
  font-size: 0.24rem;
}
.register_img {
  width: 100%;
  height: 4rem;
  background: url("../../../img/register.png") no-repeat;
  background-size: 100% 100%;
}
.register_content{
  width: 100%;
}
#forgetform{
  padding-left: 0.28rem;
  padding-right: 0.25rem;
}
.tel {
  width: 100%;
  height: 0.8rem;
  margin:0 auto;
  border-bottom: 1px solid #edeef3;
  background: url("../../../img/shouji.png") no-repeat;
  background-size: 0.24rem 0.43rem;
  background-position-y: 0.2rem;
    background-position-x: 0.26rem;
  line-height: 0.8rem;
  text-align: center;
}
.tels{
  position: relative;
}
.usertel{
  width: 80%;
  height: 0.8rem;
  top: 0;
  left: 0.4rem;
  position: absolute;
  font-size: 0.24rem;
}
.selecttel{
  width: 0.7rem;
  height: 0.8rem;
  position: absolute;
  top: 0;
  left: 0.6rem;
  color: black;
  font-size: 0.2rem;
  background: url("../../../img/teldown.png") no-repeat;
  background-size: 0.12rem 0.1rem;
  background-position: 0.6rem 0.36rem;
  text-align: center;
}
.tel input {
  width: 80%;
  height: 0.8rem;
  outline: none;
  border: none;
  margin-left: 1rem;
}
.short {
  width: 100%;
  height: 0.8rem;
  margin:0 auto;
  border-bottom: 1px solid #edeef3;
  background: url("../../../img/psw.png") no-repeat;
  background-size:0.42rem 0.32rem;
  background-position-y: 0.22rem;
  background-position-x: 0.22rem;
  line-height: 0.8rem;
  text-align: center;
  position: relative;
}
.short input {
  width: 80%;
  height: 0.8rem;
  outline: none;
  border: none;
  margin-left: 0.2rem;
}
.getshort{
  width: 1.82rem;
  height: 0.54rem;
  line-height: 0.54rem;
  position: absolute;
  right: 0;
  bottom: 0.14rem;
  color: #e03434;
  text-align: right;

  font-size: 0.24rem;
}
.getshorted {
  width: 1.82rem;
  height: 0.54rem;
  line-height: 0.54rem;
  position: absolute;
  right: 0;
  bottom: 0.14rem;
  color: #c3c3c3;
  text-align: right;
    font-size: 0.24rem;
}

.invite_get {
  width: 100%;
  height: 0.8rem;
  margin: auto;
  border-bottom: 1px solid #edeef3;
   background: url("../../../img/mima.png") no-repeat; 
  background-size:0.30rem 0.36rem;
  background-position-y: 0.22rem;
  background-position-x: 0.22rem;
  line-height: 0.8rem;
  text-align: center;
}
.invite_get input {
  width: 80%;
  height: 0.8rem;
  outline: none;
  border: none;
  margin-left: 0.2rem;
}
 #forgetsubmit{
   width: 6.92rem;
   height: 0.7rem;
   list-style: none;
 background-color: #e03434;
   color: white;
   outline: none;
   border: none;
   border-radius: 0.325rem;
   margin-top: 0.4rem;
 }   

</style>
