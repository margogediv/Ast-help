<template>
  <div class="v-popup">
    <div class="v-popup__header">
      <span>Фильтр</span>
      <span style="cursor: pointer">
        <i class="material-icons" @click="closeModal">close</i>
      </span>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button class="submit-btn export-modal">Экспорт</button>
      <button class="submit-btn update-modal">Обновить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalIteam",
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss">
  .v-popup {
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 466px;
    height: 674px;
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px;
    background: #F7F8FA;
    border: 2px solid #3A3A3B;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
    }

    .submit-btn {
      height: 36px;
      font-family: 'Montserrat-R', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #6E7A6E;
      padding: 8px 72px;
      border: 2px solid #6E7A6E;
      border-radius: 4px;
    }

    .export-modal {
      background: #FAF7DE;
    }

    .update-modal {
      background: #E1FAE1;
    }
  }
</style>
