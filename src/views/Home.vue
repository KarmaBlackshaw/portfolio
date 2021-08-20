<template>
  <article>
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
          I am a web developer from Philippines and I enjoy building web applications,
          usually with

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
        href="#stack"
      >
        <img
          src="@/assets/svg/icons/chevron-down-solid.svg"
          alt=""
        >
      </a>
    </section>

    <section
      id="stack"
      class="stack"
    >
      <div class="stack-container">
        <h1 class="stack-title">
          Tech Stack
        </h1>

        <div class="stack-list">
          <div
            v-for="(currStack, stackKey) in stack"
            :key="stackKey"
            class="stack-list--item"
          >
            <img
              :src="require(`@/assets/svg/${currStack.img}`)"
              class="item-img"
              alt=""
            >

            <p
              class="item-title"
              v-text="currStack.text"
            ></p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import CodeThink from '@/assets/svg/CodeThink'
export default {
  name: 'Home',

  components: {
    CodeThink
  },

  data () {
    return {
      hero: {
        title: 'Hi, I\'m Ernie Jeash!'
      },

      stack: [
        {
          text: 'Vue.js',
          img: 'vue.svg'
        },
        {
          text: 'Node.js',
          img: 'nodejs-icon.svg'
        },
        {
          text: 'Koa.js',
          img: 'koa.svg'
        },
        {
          text: 'Mysql',
          img: 'mysql.svg'
        },
        {
          text: 'html 5',
          img: 'html-5.svg'
        },
        {
          text: 'Css 3',
          img: 'css-3.svg'
        },
        {
          text: 'eslint',
          img: 'eslint.svg'
        },
        {
          text: 'vuetify',
          img: 'vuetifyjs.svg'
        },
        {
          text: 'netlify',
          img: 'netlify.svg'
        },
        {
          text: 'VS Code',
          img: 'visual-studio-code.svg'
        }
      ]
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
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;

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

      @keyframes stretch {
        0% {
          transform: scale(1, 1);
        }

        40% {
          transform: scale(1.2, 0.5);
        }

        60% {
          transform: scale(0.8, 1.5);
          color: rgb(208, 255, 206);
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

        90% {
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
    bottom: 50px;
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
      bottom: 30px;

      img {
        height: 20px;
        width: 20px;
      }
    }
  }
}

.stack {
  background: white;
  height: 100vh;
  position: relative;
  user-select: none;
  text-align: center;
  padding-top: 64px;

  .stack-container {
    margin-right: auto;
    margin-left: auto;
    max-width: $content-width;
  }

  .stack-title {
    font-size: 2em;
    color: #171b23;
  }

  .stack-list {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .stack-list--item {
      padding: 20px;
      min-height: 200px;
      max-width: 200px;
      background: rgb(247, 246, 246);
      border-radius: 15px;
      margin: 10px;
      transition: all 0.4s ease;

      &:hover {
        transform: scale(1.05);
      }

      .item-img {
        height: 200px;
      }

      .item-title {
        border-top: 1px solid rgb(209, 206, 206);
        margin-top: 20px;
        padding-top: 10px;
        color: #171b23;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
</style>
