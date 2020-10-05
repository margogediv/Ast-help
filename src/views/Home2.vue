<template>
  <div>
   <Header />
    <div class="content-block">

      <section class="menu-nav">
        <div class="container">
          <div class="menu-nav-box">
            <div class="menu-nav-title">
              <ul class="breadcrumb">
                <li><a href="#">Меню</a></li>
                <li><a href="#">ОЕЕ</a></li>
                <li><a href="#">Онлайн ОЕЕ</a></li>
                <li><a href="#">Станок 2</a></li>
              </ul>
            </div>
            <div class="menu-nav-btn">
              <router-link :to="'/'">
                <img class="arrow-back" src="/images/content/arrow_back.svg" alt="">
              </router-link>
              <img class="arrow-forward" src="/images/content/arrow_forward.svg" alt="">
              <div @click="showModalIteam" style="cursor: pointer">
                <img class="extension" src="/images/content/extension.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-1">
        <div class="container">
          <div class="class-flex">
            <div class="block-tabl">
              <div class="block-1">
                <div class="data-1">
                  <span class="title">OEE</span>
                  <span class="subtitle">AxPxQ</span>
                  <span class="subtitle">{{ table.A }}%x{{ table.P }}%x{{ table.Q }}%</span>
                </div>
                <div class="data-2">
                  <span class="subtitle">Цель: 65%</span>
                  <span class="subtitle">Базовый: 45%</span>
                  <div class="box-proc">
                    <span class="title field_a">{{ table.OEE }}</span>
                    <span class="proc">%</span>
                  </div>
                </div>
              </div>
              <div class="block-2">
                <div class="iteam avail">
                  <span class="sub">Availability</span>
                  <div class="box-proc">
                    <span class="proc field_a1">{{ table.A }}</span>
                    <span class="proc">%</span>
                  </div>
                </div>
                <div class="iteam pref">
                  <span class="sub">Performance</span>
                  <div class="box-proc">
                    <span class="proc field_a2">{{ table.P }}</span>
                    <span class="proc">%</span>
                  </div>

                </div>
                <div class="iteam qual">
                  <span class="sub">Quality</span>
                  <div class="box-proc">
                    <span class="proc field_a3">{{ table.Q }}</span>
                    <span class="proc">%</span>
                  </div>
                </div>
              </div>
              <div class="block-3">
                <div class="iteam-stat">
                  <div class="iteam-stat-title">Общее время</div>
                  <div class="iteam-stat-qual">{{ table.totalTime }}</div>
                </div>
                <div class="iteam-stat">
                  <div class="iteam-stat-title">Время простоя</div>
                  <div class="iteam-stat-qual">{{  table.downTime }}</div>
                </div>
                <div class="iteam-stat">
                  <div class="iteam-stat-title">Время аварий</div>
                  <div class="iteam-stat-qual">{{ table.timeAccidents }}</div>
                </div>
                <div class="iteam-stat">
                  <div class="iteam-stat-title">Время в выключении</div>
                  <div class="iteam-stat-qual">{{ table.timeOff }}</div>
                </div>
                <div class="iteam-stat">
                  <div class="iteam-stat-title">Время работы</div>
                  <div class="iteam-stat-qual">{{ table.timeWork }}</div>
                </div>
              </div>
            </div>
            <div class="chart">
              <figure class="highcharts-figure">
                <CartStatic v-bind:data="dataCartStatic" :key="keyCartStatic"></CartStatic>
                <p class="highcharts-description"></p>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section class="section-2">
        <div class="container">
          <div class="btn-block">
            <div class="btn" @click="filter('hour')">час</div>
            <div class="btn" @click="filter('smena')">смена</div>
            <div class="btn" @click="filter('day')">день</div>
            <div class="btn" @click="filter('week')">неделя</div>
            <div class="btn" @click="filter('month')">месяц</div>
          </div>
        </div>
      </section>
      <section class="section-3">
        <div class="container">
          <div class="radio-buttons">
            <div>
              <input type="radio" value="chart_A" id="radio1" v-model="chartType"/>
              <label for="radio1">A</label>
            </div>
            <div>
              <input type="radio" value="chart_P" id="radio2" v-model="chartType"/>
              <label for="radio2">P</label>
            </div>
            <div>
              <input type="radio" value="chart_Q" id="radio3" v-model="chartType"/>
              <label for="radio3">Q</label>
            </div>
            <div>
              <input type="radio" value="chart_OEE" id="radio4" v-model="chartType"/>
              <label for="radio4">OEE</label>
            </div>
          </div>
        </div>
      </section>
      <section class="section-4">
        <div class="container">
          <CartDinamic v-bind:data="dataCartDinamic" :key="keyCartDinamic"></CartDinamic>
          <CartTime v-bind:data="dataCartTime" :key="keyCartTime"></CartTime>
        </div>
      </section>
    </div>

    <Footer />
    <modalIteam v-if="modalIteamVisible" @closeModal="closeModaliteam" titleModal="Фильтр"></modalIteam>
  </div>
</template>

<script>
import axios from 'axios'
import CartStatic from './../components/CartStatic'
import CartDinamic from "./../components/CartDinamic"
import CartTime from "../components/CartTime"
import modalIteam from "../components/modalIteam"
import Header from "../components/header"
import Footer from "../components/Footer"

export default {

  name: 'Home',
  components: {
    CartStatic: CartStatic,
    CartDinamic: CartDinamic,
    CartTime: CartTime,
    modalIteam: modalIteam,
    Header: Header,
    Footer: Footer,
  },

  data() {
    return {

      dataMachine: [],
      keyCartStatic: 0,
      dataCartStatic: [],
      keyCartDinamic: 0,
      dataCartDinamic: [],
      keyCartTime: 0,
      dataCartTime: [],
      chartType: "chart_A",
      table: {
        A: 0,
        P: 0,
        Q: 0,
        OEE: 0,
        totalTime: 0,
        downTime: 0,
        timeAccidents: 0,
        timeOff: 0,
        timeWork: 0,
      },
      modalIteamVisible: false,
    }
  },
  watch: {
    chartType: function (newValue) {
      if (newValue === 'chart_OEE') {
        let arr = [
          this.dataMachine['chart_A'],
          this.dataMachine['chart_P'],
          this.dataMachine['chart_Q'],
        ];
        this.setDataCartDinamicArray(arr);
        return;
      }

      this.setDataCartDinamic(this.dataMachine[newValue]);
    }
  },
  methods: {

    showModalIteam() {
      this.modalIteamVisible = true;
    },
    closeModaliteam() {
      this.modalIteamVisible = false;
    },

    filter(filter) {
      this.getDataMachine(filter);
    },

    setDataTable(data) {
      this.table.A = data['Availability'];
      this.table.P = data['Performance'];
      this.table.Q = data['Quality'];
      this.table.OEE = Math.round((data['Availability'] + data['Performance'] + data['Quality']) / 3);
      this.table.totalTime = data['Время_аварий'];
      this.table.downTime = data['Время_выключений'];
      this.table.timeAccidents = data['Время_простоя'];
      this.table.timeOff = data['Время_работы'];
      this.table.timeWork = data['Общее_время'];
    },

    getDataMachine(filter) {
      let url = 'http://185.6.25.155/api/oee/1/one/';
      if(filter)
        url += '?filter=' + filter;
      console.log(url);
      axios.get(url)
          .then(response => {
            this.dataMachine = response.data[0];
            this.setDataCartStatic(response.data[0].chart);
            this.setDataCartDinamic(response.data[0][this.chartType]);
            this.setDataTable(response.data[0].data);
          })
          .catch(function (error) {
            console.log(error);
          });

    },
    setDataCartStatic(data) {
      let series = data.series;
      data.series = [];
      data.series.push(series);
      this.dataCartStatic = data;
      this.keyCartStatic = this.keyCartStatic + 1;
    },

    setDataCartDinamic(data) {
      let arr = [];
      arr.push(data);
      this.dataCartDinamic = arr;
      this.keyCartDinamic = this.keyCartDinamic + 1;
    },
    setDataCartDinamicArray(arr) {
      this.dataCartDinamic = arr;
      this.keyCartDinamic = this.keyCartDinamic + 1;
    },

  },
  mounted() {
    this.getDataMachine();
  },
}
</script>


