<template>
    <div>
        <div id="nav">
            <div class="nav_saicheng">
                <router-link :to="{ name: 'Home' }"><span class="whilt">赛程</span></router-link>
            </div>
            <div class="nav_project">
                <router-link :to="{ name: 'project'}"><span class="whilt">项目</span></router-link>
            </div>
            <div>
                <router-link :to="{ name: 'news' }"><span class="whilt">新闻</span></router-link>
            </div>
           <div class="nav_project">
                <router-link :to="{ name: 'flash' }"><span class="whilt">快讯</span></router-link>
            </div>
            <div class="talkover">讨论</div>
        </div>
    </div>
</template>
<script>


export default {

}
</script>
<style scoped>

#nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 0.8rem;
    font-size: 0.32rem;
    background-color: #282828;
    color: white;
    line-height: 0.8rem;
}
#nav div{
    width: 20%;
}
.nav_saicheng{
    color: #ffffff;
}
#nav div:hover{
  background-color: red;
  width: 20%;
}
.whilt{
    color: #ffffff;
}
</style>

