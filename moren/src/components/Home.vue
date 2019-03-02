<template>
  <div>
   <div id="home">
     <app-schedule></app-schedule>
   </div>
  </div>
</template>

<script>

import ScheduleComponent from './Schedule//Scheduledatail/schedule.vue';
export default {
components:{
     appSchedule:ScheduleComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
