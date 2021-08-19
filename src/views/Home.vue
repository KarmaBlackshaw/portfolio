<template>
  <section class="home">
    <div class="home--container">
      <div class="home-hero--banner">
        <img
          src="@/assets/svg/code-think.svg"
          alt=""
        >
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
        >Vue</a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;

  .home-hero--banner {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      max-height: 200px;
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
      color: #40B882;
    }
  }
}
</style>
