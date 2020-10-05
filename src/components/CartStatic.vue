<template>
  <div>
    <figure class="highcharts-figure">
      <highcharts :options="chartOptions"></highcharts>
    </figure>
  </div>
</template>

<script>

import {Chart} from "highcharts-vue";

export default {

  name: 'CartStatic',

  components: {
    highcharts: Chart
  },

  data() {
    return {
      series: [],
      chartOptions: {

        chart: {
          type: 'bar',
          width: 700,
          height: 160
        },
        title: {
          text: "ТОП 5 причин простоя",
          margin: 5,
          style: {
            "color": "#3A3A3B",
            "fontSize": "14px",
            "fontFamily": '"Montserrat-R", sans-serif',
            "fontWeight": "600"
          }
        },
        xAxis: {
          categories: this.data.categories,
          title: {
            text: null
          },

          labels: {
            style: {
              color: '#8A8A8A',
              fontSize: '11px'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: null
          },
          labels: {
            overflow: 'justify',
            style: {
              color: '#8A8A8A',
              fontSize: '11px'
            }
          }
        },
        tooltip: {
          valueSuffix: ' millions'
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
        exporting: {
          accessibility: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          },
          series: {
            pointPadding: 0.2,
            groupPadding: 0.2,
          }
        },
        credits: {
          enabled: false
        },
        series: this.data.series,
      }
    }
  },
  props: ['data'],
}

</script>
