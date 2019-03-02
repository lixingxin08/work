<template>
    <div>
        <div id="slider">
    <el-carousel trigger="click" height="4rem">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
        </div>
    </div>
</template>
<style scoped>
  .el-carousel__item:nth-child(2n) {
  background: url(../../../../img/slider1.png) 100% 100% no-repeat;
  background-size: 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__item:nth-child(1){
  
}
</style>
