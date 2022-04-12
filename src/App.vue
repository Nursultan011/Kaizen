<template>
  <div id="app">
    <Header />
    <Slider />
    <div class="wrap-open-popup">
      <button @click="showModal" class="open-popup">Действие</button>
    </div>
    <Popup ref="modal" />
    <Hashtags />
    <Comments />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import Popup from "./components/PopupButton.vue";
import Hashtags from "./components/Hashtags.vue";
import Comments from "./components/Comments.vue";

export default {
  name: "App",
  components: {
    Header,
    Slider,
    Popup,
    Hashtags,
    Comments,
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 30px;
  padding-bottom: 100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.wrap-open-popup {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.open-popup {
  background: linear-gradient(
    90deg,
    #b97bf8 5.02%,
    #766aff 57.94%,
    #526cf5 96.89%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    2px 2px 25px rgba(97, 119, 145, 0.21);
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 1.8vw;
  padding: 10px 30px;
  margin-top: 25px;
  cursor: pointer;
}
</style>
