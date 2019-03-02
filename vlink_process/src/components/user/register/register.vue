<template>
    <div>
        <div id="register">
       <my-header></my-header>
        <div class="register_img">
        </div>
        <div class="register_content">
          <form  @submit.prevent="isregister" action="http://api.vlink.red/gateway/facade/v1/account/user/register" name="myform" method="post" id="registerform">
             <div class="tel tels">
               <router-link :to="{name:'selectzone'}">
              <div class="selecttel">+{{tel[0]}}</div>   
               </router-link>
               <input type="number" name="userId" placeholder="请输入手机号码" value="" v-model="username" id="usertel" @blur="getcell()">
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
             <div class="invite_get password">
               <input type="password" name="password" placeholder="请输入密码" value="" v-model="password">
             </div>            
             <div class="invite_get">
               <input type="text" name="userId" placeholder="请输入邀请码" value="">
             </div>             
            <div class="vlinkmsg">
                点击注册代表同意<span>《VLINK用户协议》</span>
                </div>        
           <div class="registersubmit" @click="isregister()">
                      <input type="button" name="btnSubmit" value="立即注册" id="registersubmit">   
           </div>
              </form>
          <div class="register_foot">
              已有用户,马上<router-link :to="{name:'login'}"><span>登录</span></router-link>
          </div>     
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
      tel:["86"],
      validation:"",
      short_msg:"获取短信",
      shorted:true,
      shorttime:60,
      shortinterval:null,
      isregisterinterval:null,
      isshow:[false],
    }
  },
  methods:{
    /** 注册 */
           isregister() {
             
                this.$http.post(this.$api.isRegister,{cellphone:this.username,password:this.password,validation:this.validation}).then(rsp => {
                           console.log(rsp);  
                           alert("注册成功") 
                           this.isregisterinterval=setTimeout(()=>{this.$router.replace({path:'/login'}) },2000)                                                                    
                }),err=>{
                  console.log(err);      
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
         /**滑块验证弹出 */
         
  },
  created(){
     this.$set(this.tel,this.tel,this.$api.telphoto)
  },
   beforeDestroy() {
    clearInterval(this.shortinterval);
    clearInterval(this.isregisterinterval) ;
   },
};
</script>
<style scoped>
#register{
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
#registerform{
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
#usertel{
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
  background: url("../../../img/yaoqingma.png") no-repeat;
  background-size:0.42rem 0.32rem;
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
.password{
   background: url("../../../img/mima.png") no-repeat; 
  background-size:0.30rem 0.36rem;
  background-position-y: 0.22rem;
  background-position-x: 0.22rem;
}
.vlinkmsg{
    padding-left: 0.24rem;
    height: 0.76rem;
    line-height: 0.76rem;
    color: #c5c5c5;
    font-size: 0.22rem;
    text-align: left;
}
.vlinkmsg span{
    color: #000;
}
 #registersubmit{
   width: 6.92rem;
   height: 0.7rem;
   list-style: none;
 background-color: #e03434;
   color: white;
   outline: none;
   border: none;
   border-radius: 0.325rem;
 }   
.register_foot{
    margin-top: 0.2rem;
    font-size: 0.22rem;
    color: #c5c5c5;
}
.register_foot span{
    color: #e03434;
}
</style>
