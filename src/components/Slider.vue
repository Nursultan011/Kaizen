<template>
  <div>
    <VueSlickCarousel class="slider-custom" :arrows="true" :dots="false">
      <div class="content" v-for="slider in sliders" :key="slider.id">
        <div>{{ slider.text }}</div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "/node_modules/vue-slick-carousel";
import "/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
import "/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data: () => ({
    sliders: [
      {
        id: 0,
        text: "Поставить табличку над дверью Отдела Кадров в Офисе, чтобы все люди, впервые пришедшие в офис, знали, где именно находится Отдел Кадров",
      },
      {
        id: 1,
        text: "Запустить KAIZEN",
      },
      {
        id: 2,
        text: "Поставить табличку над дверью Отдела Кадров в Офисе, чтобы все люди, вепрвые пришедшие в офис, знали, где именно находится Отдел Кадров",
      },
      {
        id: 3,
        text: "Поставить табличку над дверью Отдела Кадров в Офисе, чтобы все люди, впервые пришедшие в офис, знали, где именно находится Отдел Кадров",
      },
    ],
  }),
};
</script>
<style lang="scss">
.slider-custom {
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  background: #f3f7f9;
  padding: 42px 115px;
  border-radius: 5px;
  .content {
    color: black;
    font-weight: 500;
    font-size: 2.8vw;
    div {
      min-height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .slick-arrow {
    color: transparent !important;
    background: transparent !important;
    top: 40% !important;
    &::before {
      display: none !important;
    }
  }
  .slick-prev {
    left: 20px;
    &::after {
      content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCAzOCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMzE4MDIgMzAuODE4Qy0wLjQzOTM0IDMyLjU3NTQgLTAuNDM5MzQgMzUuNDI0NiAxLjMxODAyIDM3LjE4MkwyOS45NTU4IDY1LjgxOThDMzEuNzEzMiA2Ny41NzcyIDM0LjU2MjQgNjcuNTc3MiAzNi4zMTk4IDY1LjgxOThDMzguMDc3MiA2NC4wNjI0IDM4LjA3NzIgNjEuMjEzMiAzNi4zMTk4IDU5LjQ1NThMMTAuODY0IDM0TDM2LjMxOTggOC41NDQxNkMzOC4wNzcyIDYuNzg2OCAzOC4wNzcyIDMuOTM3NTUgMzYuMzE5OCAyLjE4MDE5QzM0LjU2MjQgMC40MjI4MzYgMzEuNzEzMiAwLjQyMjgzNiAyOS45NTU4IDIuMTgwMTlMMS4zMTgwMiAzMC44MThaTTUgMjkuNUg0LjVMNC41IDM4LjVINUw1IDI5LjVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
    }
  }
  .slick-next {
    right: 40px;
    &::after {
      content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCAzOCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjY4MiAzNy4xODJDMzguNDM5MyAzNS40MjQ2IDM4LjQzOTMgMzIuNTc1NCAzNi42ODIgMzAuODE4TDguMDQ0MTYgMi4xODAxOUM2LjI4NjggMC40MjI4MzYgMy40Mzc1NSAwLjQyMjgzNiAxLjY4MDE5IDIuMTgwMTlDLTAuMDc3MTYzNyAzLjkzNzU1IC0wLjA3NzE2MzcgNi43ODY4IDEuNjgwMTkgOC41NDQxNkwyNy4xMzYgMzRMMS42ODAxOSA1OS40NTU4Qy0wLjA3NzE2MzcgNjEuMjEzMiAtMC4wNzcxNjM3IDY0LjA2MjQgMS42ODAxOSA2NS44MTk4QzMuNDM3NTUgNjcuNTc3MiA2LjI4NjggNjcuNTc3MiA4LjA0NDE2IDY1LjgxOThMMzYuNjgyIDM3LjE4MlpNMzMgMzguNUgzMy41VjI5LjVIMzNWMzguNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
    }
  }
}
</style>
