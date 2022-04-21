<template>
  <div>
    <h1>Комментарии (3)</h1>
    <div class="comment" v-for="(comment, id) in comments" :key="id">
      <div>
        <b>{{ comment.name }}</b>
        <span>{{ comment.date }}</span>
        <span>{{ comment.time }}</span>
      </div>
      <div>{{ comment.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comments",
  data: () => ({
    comments: [
      {
        name: "Мейрбек",
        date: "10.03.2021",
        time: "16:43",
        text: "Все ли работает?",
      },
      {
        name: "Мейрбек",
        date: "10.03.2021",
        time: "16:43",
        text: "Все ли работает?",
      },
      {
        name: "Мейрбек",
        date: "10.03.2021",
        time: "16:43",
        text: "Все ли работает?",
      },
    ],
  }),
};
</script>
<style lang="scss">
h1 {
  margin-top: 60px;
  padding-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
}
.comment {
  margin-top: 20px;
  b {
    font-weight: 700;
    font-size: 22px;
  }
  span {
    color: #838383;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 400;
  }
  & > div {
    &:last-child {
      color: black;
      font-size: 18px;
    }
  }
}
</style>
