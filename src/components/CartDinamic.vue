<template>
  <figure class="highcharts-figure">
    <highcharts :options="chartOptions"></highcharts>
    <p class="highcharts-description"></p>
  </figure>
</template>

<script>

import {Chart} from "highcharts-vue";

export default {

  name: "CartDinamic",

  components: {
    highcharts: Chart
  },

  data() {
    return {
      chartOptions: {
        title: {
          text: "",
        },

        chart: {
          height: 300
        },

        yAxis: {
          title: {
            text: null
          }
        },

        xAxis: {
          title: {
            text: null
          },
          accessibility: {
            rangeDescription: ''
          },
          labels: {
            enabled: false
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
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          },
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },

        series: this.data,

        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      },
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

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #EBEBEB;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}

</style>
