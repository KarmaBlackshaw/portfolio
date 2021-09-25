<template>
  <div
    id="base-section-title"
    class="base-section-title"
  >
    <div class="text">
      <slot></slot>
    </div>

    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseSectionTitle'
}
</script>

<style lang="scss" scoped>
.base-section-title {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .text {
    margin-right: 10px;
    text-transform: uppercase;
  }

  .line {
    border: none;
    height: 1px;
    background: #35ad89;
    width: 80px;
  }
}
</style>
