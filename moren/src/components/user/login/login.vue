<template>
    <div>
        <div id="login">
       <my-header></my-header>
        <div class="login_img">
        </div>
        <div class="login_content">
          <form action="login.do?act=login" name="myform" method="post" id="loginform">
             <div class="tel tels">
               <router-link :to="{name:'selectzone'}">
              <div class="selecttel">+86</div>   
               </router-link>
               <input type=tel name="userId" placeholder="请输入手机号码" value="" v-model="loginForm.user_name" id="username">
             </div>
            <div class="short">
              <input type="number" placeholder="请输入短信验证码" name="password" size="19" value="" v-model="loginForm.password"/>
            <div class="getshort">
                <el-row>
                    <el-button round class="shortget">获取短信</el-button>
                </el-row>
            </div>            
            </div>
             <div class="invite_get">
               <input type="text" name="userId" placeholder="请输入邀请码" value="">
             </div>            
           <div class="submit" @click="login()">
                 <el-row>
                    <el-button type="danger" round class="login_btn">
                      立即登录
                      <input type="submit" name="btnSubmit" value="立即登录" id="submit">   
                    </el-button>
                </el-row>
                             
           </div>
              </form>
          <div class="login_foot">
              点击登录代表同意<a href="">《Vlink用户协议》</a>
          </div>
       
       
        </div>
         </div>
    </div>
</template>
<script>
import myHeader from "../../frame/MyHeader.vue";
export default {
  components: {
    myHeader
  },
  methods: {
    check() {}
  },
  data(){
    return {
      logined:false,
      loginForm:{
        user_name:"ivan",
        password:"123456"
      }
    }
  },
  methods:{
           login() {
                this.$http.post(this.$api.login, this.loginForm).then(rsp => {
                    if(rsp.data.status == 0) {
                        this.$router.push(this.$route.query.nextPage);
                    }else {
                        this.$alert(rsp.data.message);
                    }
                });
         },   
  }
};
</script>
<style scoped>
.login_img {
  width: 100%;
  height: 3.4rem;
  background: url("../../../img/loginend.png") no-repeat;
  background-size: 100% 100%;
}

.tel {
  width: 70%;
  height: 0.64rem;
  margin:0 auto;
  border-bottom: 1px solid #c3c3c3;
  background: url("../../../img/shouji.png") no-repeat;
  background-size: 5%;
  background-position-y: 0.1rem;
  line-height: 0.64rem;
  text-align: center;
  margin-top: 0.46rem;
}
.tels{
  position: relative;
}
#username{
  width: 80%;
  height: 0.64rem;
  top: 0;
  left: 0.4rem;
  position: absolute;
  font-size: 0.24rem;
}
.selecttel{
  width: 0.7rem;
  height: 0.64rem;
  position: absolute;
  top: 0;
  left: 0.6rem;
  color: black;
  font-size: 0.36rem;
  border-right: 2px solid #c3c3c3;
}
.tel input {
  width: 80%;
  height: 0.64rem;
  outline: none;
  border: none;
  margin-left: 1rem;
}
.short {
  width: 70%;
  height: 0.64rem;
  margin:0 auto;
  border-bottom: 1px solid #c3c3c3;
  background: url("../../../img/duanxin.png") no-repeat;
  background-size: 6%;
  line-height: 0.64rem;
  text-align: center;
  background-position-y: 0.2rem;
  position: relative;
  margin-top: 0.46rem;
}
.short input {
  width: 80%;
  height: 0.64rem;
  outline: none;
  border: none;
}
.getshort {
  width: 1.82rem;
  height: 0.53rem;
  position: absolute;
  right: 0;
  bottom: 0.14rem;
  color: #ff2b45;
  text-align: center;
}
.shortget {
  height: 0.55rem;
  line-height: 0.1rem;
  font-size: 0.24rem;
  border: 1px solid #ff2b45;
  color: #ff2b45;
  text-align: center;
}
.invite_get {
  width: 70%;
  height: 0.64rem;
  margin: auto;
  border-bottom: 1px solid #c3c3c3;
  background: url("../../../img/zu.png") no-repeat;
  background-size: 7%;
  background-position-y: 0.2rem;
  line-height: 0.64rem;
  text-align: center;
  margin-top: 0.46rem;
}
.invite_get input {
  width: 80%;
  height: 0.64rem;
  outline: none;
  border: none;
  margin-left: 0.2rem;
}
.submit{
    margin-top: 0.66rem;
}
.login_btn{
    width: 5.82rem;
    height: 0.65rem;
    font-size: 0.3rem;
    line-height: 0.2rem;
    position: relative;
    }
 #submit{
   width: 5.82rem;
   height: 0.65rem;
   list-style: none;
   position: absolute;
   top: 0;
   left: 0;
   visibility: hidden;
 }   
.login_foot{
    margin-top: 0.25rem;
}
.login_foot a{
    color: #ff2b45;
}
</style>
