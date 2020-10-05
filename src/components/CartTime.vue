<template>
  <figure class="highcharts-figure">
    <highcharts :options="chartOptions"></highcharts>
  </figure>

</template>

<script>

import {Chart} from "highcharts-vue";

export default {

  name: "CartTime",

  components: {
    highcharts: Chart
  },

  data() {
    return {
      series: [],
      chartOptions: {

        chart: {
          type: 'bar',
          height: 79,

        },
        title: {
          text: null
        },
        xAxis: {
          visible: false
        },
        yAxis: {
          min: 0,
          title: {
            text: null
          }

        },
        legend: {
          enabled: false,
          accessibility: {
            enabled: false
          },
          bubbleLegend: {
            enabled: false
          }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'timeAccidents',
          color: "red",
          data: [5],

        }, {
          name: 'timeWork',
          color: "green",
          data: [2]
        }, {
          name: 'downTime',
          color: "yellow",
          data: [3]
        }],
      }
    }
  },
  props: ['data'],
}


</script>

<style scoped>
.highcharts-figure, .highcharts-data-table table {
  min-width: 100%;
  max-width: 1680px;
  margin: 1em auto;
}

</style>
