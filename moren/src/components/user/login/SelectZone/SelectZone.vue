<template>
    <div>
       <my-header></my-header>
        <div id="SlectZone">
            <div class="slectzone_top">
                <input type="text" placeholder="请输入国家/地区">
            </div>
            <div class="slectzone_content" v-for="item in SelectZone"> 
                <div class="slect_l">{{item.Zone}}</div>
                <div class="slect_r">+{{item.phonetop}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '../../../frame/MyHeader.vue';  
    export default {
                components:{
            myHeader,
        }, 
        data(){
            return{
                SelectZone:[
                    {Zone:"中国",phonetop:86},
                    {Zone:"香港(中国)",phonetop:186},
                     {Zone:"台湾（中国）",phonetop:386},
                     {Zone:"中国4",phonetop:826},       
                ]
            }
        },
    }
</script>
<style scoped>
#SlectZone{
    background-color: #f7f7f7;
}
.slectzone_top{
    width: 5rem;
    height: 0.7rem;
    margin: 0 auto;
    margin-top: 0.28rem;
    margin-bottom: 0.33rem;
    position: relative;
    text-align: left;
    color: #c3c3c3;
    background-color:#fff;
        border-radius: 0.4rem;
        border: 1px solid #c3c3c3;
        padding-left: 0.8rem;
}
.slectzone_top input{
    width: 4rem;
    height: 0.7rem;
    border: none;
}
.slectzone_content{
    width:100%;
    background-color:#fff;
    height: 1.02rem;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 1px;
    position: relative;
    border-bottom: 1px solid #f7f7f7;
}
.slect_l{
    position: absolute;
    left: 0.5rem;
    top: 0.2rem;
}
.slect_r{
   position: absolute;
   right: 0.2rem;
   top: 0.2rem;
}
</style>


