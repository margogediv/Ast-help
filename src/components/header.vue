<template>
  <div class="header">
    <div class="container">
      <div class="header-box">
        <div class="logo">
          <a href="#">
            <img class="logo-img" src="/images/content/logo.svg" alt="logo">
          </a>
        </div>
        <ul class="nav">
          <li class="nav-iteam">
            <a href="#">
              <img src="/images/content/settings.svg" alt="settings">
            </a>
          </li>
          <li class="nav-iteam">
            <div @click="showModalIteam" style="cursor: pointer">
              <img src="/images/content/error.svg" alt="error">
            </div>
          </li>
          <div class="user">
            <button class="btn">
              <img src="/images/content/user.svg" alt="user">
              <span class="title">Иван</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
    <modalIteam v-if="modalIteamVisible" @closeModal="closeModaliteam" titleModal="Текущие сообщения"></modalIteam>
  </div>
</template>

<script>

import modalIteam from "../components/modalIteam"

export default {
  name: "Header",
  components: {
    modalIteam: modalIteam,
  },

  data() {
    return {
      modalIteamVisible: false,
    }
  },
  methods: {
    showModalIteam() {
      this.modalIteamVisible = true;
    },
    closeModaliteam() {
      this.modalIteamVisible = false;
    },
  }
}
</script>

<style scoped>

</style>
