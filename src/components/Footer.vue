<template>
  <div>
    <footer id="footer" class="footer-mdl" :class="{ open: footer.isOpen }">
      <div @click="showFooter()" id="title-table-device" class="footer-title">
        <p>{{ footer.title }}</p>
      </div>
      <div id="table-device" class="footer-mdl-iteam" v-show="footer.isOpen">
        <template v-for="device in devicesData">
          <div class="data-device" :data-status-code="device.status_code" :key="device.id">
            <div class="data-box">{{ device.name }}</div>
            <div class="data-box">{{ device.ip }}</div>
            <div class="data-box">{{ device.status }}</div>
          </div>
        </template>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "Footer",
  data() {
    return {
      footer: {
        title: "Все устройства в сети",
        isOpen: false,
      },
      devices: []
    }
  },
  methods: {
    showFooter() {
      this.footer.isOpen = !this.footer.isOpen;
      this.setTitleFooter();

    },
    setTitleFooter() {
      let count = this.devices.length;
      let count_active = this.devices.filter(device => device.status_code === 1).length;
      if (this.footer.isOpen)
        this.footer.title = count_active + " из " + count + " устройств в сети";
      else
        this.footer.title = "Все устройства в сети";
    },
    getDataFooter() {
      axios({
        method: 'get',
        url: 'http://185.6.25.155/api/ConectionsInLine/1/',
      })
          .then(response => {
            this.devices = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });

    }
  },
  mounted() {
    this.getDataFooter();
  },
  computed: {
    devicesData: function () {
      this.setTitleFooter();
      return this.devices;
    }
  },

}
</script>

<style scoped>

</style>
