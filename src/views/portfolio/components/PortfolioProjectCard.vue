<template>
  <div class="card">
    <div class="card__header">
      <figure class="card__figure">
        <a
          :href="href"
          target="_blank"
        >
          <img
            class="card__image"
            :src="image"
            alt=""
          >
        </a>
      </figure>
    </div>

    <div class="card__footer">
      <div class="footer__list">
        <div class="footer__item">
          <div class="footer__title">
            {{ title }}

            <a
              v-if="href"
              :href="href"
              target="__blank"
            >
              <img
                src="../assets/images/icons/link.png"
                alt=""
              >
            </a>
          </div>

          <a class="footer__stack">
            <img
              v-for="(currStack, stackKey) in stack"
              :key="stackKey"
              :src="require(`../assets/images/icons/${currStack}.png`)"
              alt=""
            >
          </a>
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
    },

    href: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/portfolio-project-card.scss';
</style>
