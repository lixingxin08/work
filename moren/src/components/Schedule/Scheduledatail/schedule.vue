<template>
    <div>
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
  }
}
</script>
<style scoped>

</style>
