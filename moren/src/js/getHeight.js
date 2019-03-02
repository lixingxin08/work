import 'jquery'
export default {
    data(){
      return {
        clientHeight:'',
      }
    },
    mounted(){
      this.initHeight();
    },
    created() {
        this.initHeight();
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods:{
      changeFixed(clientHeight){                        //动态修改样式
        //console.log(clientHeight);
        this.$refs.homePage.style.height = clientHeight+'px';
 
      },
       initHeight(){  //获取高度
            //获取浏览器可视区域高度
            this.clientHeight = $(document).height();
            // console.log($(document).height());//浏览器可视区域对象宽度
            window.onresize = () => {  //当窗口或框架发生改变时触发
            //console.log("onresize进来了");
              this.clientHeight = $(document).height();
              console.log(this.clientHeight);
              
            };
        }
    }
  }
