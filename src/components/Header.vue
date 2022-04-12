<template>
  <div>
    <div class="header-custom">
      <div class="header-info">
        Meirbek Kair <br />
        ID 4231
      </div>
      <div class="header-info">
        31 декабря <br />
        22:07:37
      </div>
      <!-- Success || Error -->
      <div class="header-info success">Реализовано</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss">
.header-custom {
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  .header-info {
    background: #5a6cf8;
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 24px;
    padding-right: 24px;
    color: white;
    font-weight: 500;
    font-size: 2.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:first-child {
      border-radius: 60px 5px 5px 5px;
      margin-right: 18px;
    }
    &:last-child {
      border-radius: 5px 60px 5px 5px;
      margin-left: 18px;
    }
  }
}

.success {
  background: #37d22a !important;
}

.error {
  background: #f3505a !important;
}
</style>
