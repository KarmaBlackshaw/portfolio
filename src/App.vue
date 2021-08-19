<template>
  <main class="min-h-screen">
    <nav>
      <div class="nav-item nav-item--title">
        Karma.dev {{ $breakpoint.name }}
      </div>

      <div
        v-if="$breakpoint.name !== 'xs'"
        class="nav-item nav-item--menu"
      >
        <a href="">Blog</a>
        <a href="">Projects</a>
        <a href="">Source</a>
      </div>
    </nav>

    <article>
      <section>
        <router-view />
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>

main {
  max-width: 80%;
  margin: 0px auto;
}

nav {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-item {
    &.nav-item--menu {
      a {
        margin-left: 20px;
      }
    }
  }

  @include xs {
    justify-content: center;
  }
}
</style>
