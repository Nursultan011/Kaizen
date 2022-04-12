<template>
  <div>
    <div class="popup" v-if="show" @click.self="closeModal">
      <div class="popup-inner">
        <div class="close" @click="closeModal">
          <img src="../assets/Exit.svg" alt="" />
        </div>
        <div class="button-group">
          <button class="button button-green">Принять</button>
          <button class="button button-danger">Отклонить</button>
          <button class="button button-lite-blue">Ответ</button>
          <button class="button button-blue">В Архив</button>
          <button class="button button-orange">Комментарий</button>
          <button class="button button-grey">Специалист</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Popup",
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    closeModal: function () {
      this.show = false;
    },
  },
};
</script>
<style lang="scss">
.popup {
  background: #f9feff;
  box-shadow: 11px 4px 37px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 40%;
  position: absolute;
  top: 15vh;
  left: 50%;
  margin-left: -20%;
  &-inner {
    position: relative;
    padding: 80px 50px 10px 50px;
  }
  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.button {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(166, 171, 189, 0.25);
  border-radius: 5px;
  border: none;
  color: #ffffff;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  width: 47%;
  font-size: 1vw;
  margin-bottom: 40px;
}

.button-green {
  background: #09b925;
  cursor: pointer;
}

.button-danger {
  background: #dc3915;
  cursor: pointer;
}

.button-lite-blue {
  background: #2ab4d2;
}

.button-blue {
  background: #526cf5;
}

.button-orange {
  background: #f57a08;
}

.button-grey {
  background: #686868;
}
</style>
