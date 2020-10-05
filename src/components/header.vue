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
            <a href="#">
              <img src="/images/content/error.svg" alt="error">
            </a>
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
