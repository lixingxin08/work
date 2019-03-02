<template>
    <div>

 <div id="topBanner" class="slide" >
            <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" class="slideshow" @touchstart.stop="touchstart()" @touchend.stop="touchend()" >
                 <img :src="imgUrl" alt="">
            </div>
            <div class="bar">
                   <span v-for="(item, index) in bannerList" :class="{ 'active':index===mark }" :key="index" @click="change(index)"></span>
            </div>
 </div>
    </div>
</template>
<script>
  import slider1 from '../../../../img/slider1.png';
  import slider2 from '../../../../img/register.png';
    import slider3 from '../../../../img/slider1.png';
      import slider4 from '../../../../img/register.png';  
    export default {

  data () {  
    return {  
      mark: 0, //比对图片索引的变量  
      bannerList:[slider1,slider2,slider3,slider4],
      settime:null,
      settimestart:null,
      isremove:null,
      clientdown:"",
      clientup:"",
    }  
  },  
  methods: {  
    autoPlay () {  
      this.mark++;  
      if (this.mark === 4) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  
    },  
    play () {  
      this.settime=setInterval(this.autoPlay, 2500)  
    },  
    change (index) { 
        clearInterval(this.settime);
       clearTimeout(this.settimestart);   
      this.mark = index;
      this.settimestart=setTimeout(()=>{this.settime=setInterval(this.autoPlay, 2500)},2000);  
    } ,
    touchstart(){
      this.clientdown=event.changedTouches[0].clientX;
       clearInterval(this.settime);
       clearTimeout(this.settimestart);
    },
    touchend(){
     this.clientup=event.changedTouches[0].clientX ;
      let client=this.clientdown-this.clientup;
      if (this.mark>=0&&client>30) {      
        this.mark-- 
        if(this.mark<0){this.mark=3}        
      };
      if (this.mark<=3&&client<-30) {
        this.mark++ 
        if(this.mark>3){this.mark=0}  
      } ;
      this.settimestart=setTimeout(()=>{this.settime=setInterval(this.autoPlay, 2500)},2000);
    },
     
  },  
  created () {  
    this.play()  
  }  ,
  beforeDestroy(){
       clearInterval(this.settime);
       clearTimeout(this.settimestart)
  },
    }
</script>
<style scoped>

  .slide {  
    width: 100%;  
    height: 4rem;  
    margin: 0 auto;   
    overflow: hidden;  
    position: relative;  
  }  
  .slideshow {  
    width: 100%;  
    height: 4rem;  
  }
  .slideshow img{
      width: 100%;
      height: 4rem;
  }
  li {  
    position: absolute;  
  }    
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
  }  
  .bar span {  
    width: 0.44rem;  
    height: 0.12rem;   
    background: #8881ac ;  
    display: inline-block;  
    margin-right: 0.25rem;  
  }  
  .active {  
    background: #f7f7f6 !important;  
  } 
</style>
