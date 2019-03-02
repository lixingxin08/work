<template>
    <div class="schedule">
     <app-slider></app-slider>
     <app-haixuan></app-haixuan>
    </div>
</template>
<script>
     import SliderComponent from './Slider/Slider.vue';
     import HaixuanComponent from './haixuan/Haixuan.vue';
export default {
components:{
     appSlider:SliderComponent,
     appHaixuan:HaixuanComponent
  },
}
</script>
<style scoped>
.schedule{
    width: 100%;
    height: 100%;
    background-color: #edeef3;
}
</style>
