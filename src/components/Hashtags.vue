<template>
  <div>
    <div class="hashtags">
      <div class="hashtag" v-for="(hashtag, id) in hashtags" :key="id">
        <span>{{ hashtag.text }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hashtags",
  data: () => ({
    hashtags: [
      {
        text: "#HR",
      },
      {
        text: "#Реализовано",
      },
      {
        text: "#Таблица",
      },
    ],
  }),
};
</script>
<style lang="scss">
.hashtags {
  display: flex;
  margin-top: 80px;
}
.hashtag {
  border: 1px solid #2e9bff;
  color: #2e9bff;
  border-radius: 10px;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 1.3vw;
  margin-right: 15px;
}
</style>
