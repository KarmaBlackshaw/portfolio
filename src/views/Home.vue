<template>
  <section class="home">
    <div class="home--container">
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

  .home-hero--title {
    text-align: center;
    font-size: 4em;
    font-weight: bold;
    color: white;

    @include xs {
      font-size: 2em;
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
