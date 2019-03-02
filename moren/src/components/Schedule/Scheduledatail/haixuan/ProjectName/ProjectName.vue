<template>
    <div>
        <div id="project_name" v-for="item in projectnamelist">
            <div class="project_name_list">
                <div class="project_name_list_l">
                    <img src="../../../../../img/projectnameimg.png" alt="">
                </div>
                <div class="project_name_lis_c">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div class="project_name_lis_r" v-on:click="toupiao()">
                    投票
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#project_name{
    width: 7.2rem;
height: 1.09rem;
}
.project_name_list{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    background-color: white;
      position: relative;
      align-items: center;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
}
.project_name_lis_c ul{
    display: flex;
    justify-content: flex-start;
    width:4rem ;
    flex-wrap: wrap;
    padding-left: 0.4rem;
}
.project_name_lis_c ul li{
   width: 2rem;
       text-align: left;
}
.project_name_lis_r{
    width: 0.8rem;
    height: 0.4rem;
    position: absolute;
    right: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    color: #fe0000;
   border: 1px solid #fe0000;   
} 

</style>
<script>

</script>
