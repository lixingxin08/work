<template>
    <div :id="modelName" :class="[modelName]" v-show="showits[0]">
        <div class="nc-container" ></div>
        <!-- <no-captcha-js src="http://g.alicdn.com/sd/ncpc/nc.js?t=2015052012" type="text/javascript" charset="utf-8" /> -->
    </div>
    
</template>

<script>

export default {
    data () {
        return {
            'appKey':'FFFF0N00000000006F28',
            'modelName':'no-captcha',
            'nc_token':null,
            'lang':'cn',
            'NC_Opt':null,
               showits:[true], 
        }
    },
    mounted(){ this.init(); },
    components:{
        
    },
    created(){
        console.log(this.$route.path)
    },
    methods: {

        init(){
         
            var self = this;
            this.nc_token = [this.appKey, (new Date()).getTime(), Math.random()].join(':');
            this.NC_Opt = {
                renderTo: "#no-captcha",
                appkey: "FFFF0N00000000006F28",
                scene: "nc_login",
                token: this.nc_token,
                customWidth: "1rem",
                trans:{"key1":"code0"},
                // elementID: ["usernameID"],
                is_Opt: 0,
                language: this.lang,
                isEnabled: true,
                timeout: 3000,
                times:5,
                apimap: {},
                cellphone:[]  ,
                callback: function (data) { 
                   //关闭滑块
                    // window.console && console.log(self.nc_token)
                    // window.console && console.log(data.csessionid)
                    // window.console && console.log(data.sig)
                    // //将这三个参数在这里回调服务器的接口，进行服务器的验证 
                    //   window.console && console.log(self.$api.cellphone)                    
                      self.$api.nocaptcha.sessionid=data.csessionid;
                      self.$api.nocaptcha.token=self.nc_token;
                   self.$api.nocaptcha.signature=data.sig;
                 self.$api.nocaptcha.scene=self.NC_Opt.scene;
                 //注册
                     if(self.$route.path=="/register"){   
                      self.$http.post("http://api.vlink.red/gateway/facade/v1/account/user/register/sms",{nocaptcha:self.$api.nocaptcha,cellphone:self.$api.cellphone})
                      .then(rsp=>{console.log(rsp) },err=>console.log(err))
                      .then( setTimeout(()=>{self.$set(self.showits,0,false);},1000))                         
                };
                //登录
                 if(self.$route.path=="/login"){
                     self.$http.post("http://api.vlink.red/gateway/facade/v1/basic/nocaptcha/validate",{sessionid:self.$api.nocaptcha.sessionid,signature:self.$api.nocaptcha.signature,token:self.$api.nocaptcha.token,scene:self.$api.nocaptcha.scene}
                     ).then(rsp=>{console.log(rsp)})
                      .then( setTimeout(()=>{self.$set(self.showits,0,false);},1000))       
                 }
                      }
            }
            this.$apis.loadJs("http://g.alicdn.com/sd/ncpc/nc.js?t=2015052012",{
                    success(data){
                        self.generarte();
                    }
              });
                    
        },    
        generarte(){
            var nc = new noCaptcha(this.NC_Opt)
            console.log(this.$api.showIt)
            nc.upLang('cn', {
                _startTEXT: "请按住滑块，拖动到最右边",
                _yesTEXT: "验证通过",
                _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
                _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>",
            });
        }
    }
}
</script>
<style scoped>
.nc-container{
    width: 90%;
    height: 5rem;
    margin: 0 auto;
    position: absolute;
    padding-top: 2rem;
    padding-left: 5%;
    padding-right: 5%;
    left: 0;
    transform: translateY(-25%);
      z-index: 3;
      text-align: center;
      background:rgba(0, 0, 0, 0.4);
}
</style>
