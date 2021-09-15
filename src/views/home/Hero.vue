<template>
  <section
    id="hero"
    class="hero"
  >
    <div class="hero--container">
      <div class="hero--banner">
        <code-think class="banner" />
        <!-- <img
          src="@/assets/svg/code-think-css.svg"
          alt=""
        > -->
      </div>

      <div class="hero--banner-title">
        <template v-for="(currLetter, letterKey) in hero.title">
          <span
            v-if="currLetter !== ' '"
            :key="letterKey"
          >{{ currLetter }}</span>
          <span
            v-else
            :key="letterKey"
          >&nbsp;</span>
        </template>
      </div>

      <p class="hero--banner-subtitle">
        I am a web developer from Philippines and I enjoy building web applications with

        <a
          class="subtitle--vue"
          href="https://vuejs.org/"
        >Vue</a> and

        <a
          class="subtitle--node"
          href="https://nodejs.org/en/about/"
        >Node</a>.
      </p>
    </div>

    <a
      class="btn-down"
      href="#about"
    >
      <img
        src="@/assets/svg/icons/chevron-down-solid.svg"
        alt=""
      >
    </a>
  </section>
</template>

<script>

import CodeThink from './CodeThink'

export default {
  name: 'Hero',

  components: {
    CodeThink
  },

  data () {
    return {
      hero: {
        title: 'Hi, I\'m Ernie Jeash!'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  background: #0f2027;
  background: radial-gradient(
    circle,
    #35ad89 2%,
    #2c5364 30%,
    #203a43 50%,
    #0f2027,
    $bg-main-dark
  );

  .hero--container {
    max-width: $content-width;

    .hero--banner {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;

      .banner {
        max-height: 200px;
        width: auto;

        @include xs {
          max-height: 130px;
        }
      }
    }

    .hero--banner-title {
      text-align: center;
      font-weight: bold;
      color: #fff;
      font-size: 4em;
      margin-bottom: 20px;

      @keyframes stretch {
        40% {
          transform: scale(1.2, 0.5);
          color: #9d9fa3;
        }

        60% {
          transform: scale(0.8, 1.6);
        }

        70% {
          transform: scale(1.1, 0.9);
        }

        80% {
          transform: scale(0.9, 1.3);
        }

        90% {
          transform: scale(1, 0.9);
        }

        0%,
        100% {
          transform: scale(1, 1);
          color: #fff;
        }
      }

      span {
        display: inline-block;

        &:hover {
          animation: stretch 0.8s ease-in-out;
        }
      }

      @include xs {
        font-size: 1.9em;
      }

      @include sm {
        font-size: 3em;
      }
    }

    .hero--banner-subtitle {
      text-align: center;
      font-size: 1em;
      font-weight: light;
      color: $color-main-dark;

      .subtitle--vue {
        color: #40b882;
      }

      .subtitle--node {
        color: #76b55f;
      }
    }
  }

  .btn-down {
    position: absolute;
    height: 70px;
    width: 70px;
    border: 1px solid white;
    bottom: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: float 6s ease-in-out infinite;

    img {
      height: 30px;
      width: 30px;
    }

    @include xs {
      height: 50px;
      width: 50px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    @include sm {
      height: 60px;
      width: 60px;
      bottom: 20px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    @include md {
      height: 70px;
      width: 70px;
      bottom: 20px;

      img {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
