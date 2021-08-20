<template>
  <section class="home">
    <div class="home--container">
      <div class="home-hero--banner">
        <code-think class="banner" />
        <!-- <img
          src="@/assets/svg/code-think-css.svg"
          alt=""
        > -->
      </div>

      <p class="home-hero--title">
        Hi, I'm Ernie Jeash!
      </p>

      <p class="home-hero--subtitle">
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

    <button class="btn-down">
      <img
        src="@/assets/svg/icons/chevron-down-solid.svg"
        alt=""
      >
    </button>
  </section>
</template>

<script>
import CodeThink from '@/assets/svg/CodeThink'
export default {
  name: 'Home',

  components: {
    CodeThink
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .home--container {
    .home-hero--banner {
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

    .home-hero--title {
      text-align: center;
      font-size: 4em;
      font-weight: bold;
      color: white;

      @include xs {
        font-size: 1.9em;
      }

      @include sm {
        font-size: 3em;
      }
    }

    .home-hero--subtitle {
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

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
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
  }
}
</style>
