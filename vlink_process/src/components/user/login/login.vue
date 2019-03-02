<template>
    <div>
        <div id="login">
       <my-header></my-header>
        <div class="login_img">
        </div>
        <div class="login_content">   
             <div class="tel tels">
               <router-link :to="{name:'selectzone'}">
              <div class="selecttel">+{{tel[0]}}</div>   
               </router-link>
               <input type="number" name="userId" placeholder="请输入手机号码" value="" v-model="loginForm. v" id="username" @blur="getcell()">
             </div>
             <div class="invite_get">
               <input type="password" name="userId" placeholder="请输入密码" value="" @focus="onfocus()" id="password" v-model="loginForm.password">
             </div>
             <!--滑块验证-->
            <div class="proving">
               <huakuai-yan v-if="isshow[0]"></huakuai-yan>   
              </div>
            <div class="dealpsw">
              <div class="dealpsw_l"> <input type="checkbox" @click="rememberpsws()"> <span>记住密码</span> </div>
               <router-link :to="{name:'forget'}"><div class="dealpsw_r"> 忘记密码? </div></router-link>
              </div> 
           <div class="submit" @click="login()">
                      <input type="button" name="btnSubmit" value="立即登录" id="submit">   
           </div>
          <div class="login_foot">
              还没账号?立即<router-link :to="{name:'register'}"><span>注册</span></router-link>
          </div> 
  
        </div>
         </div>
    </div>
</template>
<script>
import myHeader from "../../frame/MyHeader.vue";
import huakuaiYan from "./huankuaiyanzheng.vue";
export default {
  components: {
    myHeader,
    huakuaiYan
  },
  methods: {
    check() {}
  },
  data(){
    return {
      loginForm:{
        username:"",
        password:"",
      },
      tel:["86"],
      cellphoto:[],
       isshow:[false],
      rememberpsw:false,  
    }
  },
  methods:{
    /** 登录验证 */
           login() {
                this.$http.post(this.$api.login, {cellphone:this.loginForm.username,password:this.loginForm.password}).then(rsp => {
                      /**获取cookie */
                      let token = document.cookie;
                        this.$api.token=token;
                          // this.$set(this.$api.isLogin,0,true)
                          // console.log(this.$api.isLogin);
                        // this.$router.push({path:'/home'})
                            if(rsp.data.msg!="登录成功"){
                              this.loginForm.password=""
                              alert(rsp.data.msg)
                            } else{ alert("登录成功")  }    
                })
         },
         /** 获取号码*/
                 getcell(){
                   if(this.loginForm.username==''){
                    alert("请输入手机号码")
                   }
                     this.$api.cellphone=this.loginForm.username;                          
                 },
       //记住当前账号密码
         rememberpsws(){
           this.rememberpsw=!this.rememberpsw;
           console.log( this.rememberpsw);    
              if(this.rememberpsw==true){
                 localStorage.setItem("usermane",this.loginForm.username);
                 localStorage.setItem("userpsw",this.loginForm.password);
              }
         },
         /**滑块验证 */
         onfocus(){ 
     if(this.loginForm.username!=''){ this.$set(this.isshow,0,true)}                     
         } ,
  },
  created(){

    this.$set(this.tel,this.tel,this.$api.telphoto);
  },
};
</script>
<style scoped>
#login{
  width: 100%;
  margin: 0 auto;
  font-size: 0.24rem;
}
.login_img {
  width: 100%;
  height: 4rem;
  background: url("../../../img/register.png") no-repeat;
  background-size: 100% 100%;
}
.login_content{
  width: 100%;
}
#loginform{
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
#username{
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
  background-position: 0.59rem 0.36rem;
  text-align: center;
}
.tel input {
  width: 80%;
  height: 0.8rem;
  outline: none;
  border: none;
  margin-left: 1rem;
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

.proving{
  width: 100%;
}
iframe{
  width: 100%;
  height: 52px;
  font-size: 12px;
  margin-top: 0.1rem;
}
 #submit{
   width: 6.92rem;
   height: 0.7rem;
   list-style: none;
 background-color: #e03434;
   color: white;
   outline: none;
   border: none;
     text-align: center;
   border-radius: 0.325rem;
   line-height: 0.7rem;
 }   
.login_foot{
    margin-top: 0.2rem;
    font-size: 0.22rem;
    color: #c5c5c5;
}
.login_foot span{
    color: #e03434;
}
/**记住和忘记密码*/
.dealpsw{
  height: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-around;
  padding: 0.2rem 0.4rem;
}
.dealpsw_l input{
  vertical-align:middle
}
.dealpsw_r{
  color: #c5c5c5;
}
</style>
