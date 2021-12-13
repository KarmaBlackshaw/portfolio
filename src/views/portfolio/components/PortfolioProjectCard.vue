<template>
  <div class="card">
    <div class="card__header">
      <div class="card__figure">
        <img
          class="card__image"
          :src="image"
          alt=""
        >
      </div>
    </div>

    <div class="card__footer">
      <div class="footer__list">
        <div class="footer__item">
          <div class="footer__title">
            {{ title }}
          </div>

          <div class="footer__stack">
            <img
              v-for="(currStack, stackKey) in stack"
              :key="stackKey"
              :src="require(`../assets/svg/${currStack}.svg`)"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioProjectCard',

  props: {
    image: {
      type: [String, Number, Object],
      default: '',
      required: true
    },

    title: {
      type: String,
      default: '',
      required: true
    },

    stack: {
      type: Array,
      default: () => ([]),
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/portfolio-project-card.scss';
</style>
