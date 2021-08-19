<template>
  <main class="app-main">
    <app-navbar />

    <article class="main-article">
      <section>
        <router-view />
      </section>
    </article>
  </main>
</template>

<script>
import AppNavbar from '@/components/app/AppNavbar'
export default {
  name: 'App',

  components: {
    AppNavbar
  }
}
</script>

<style lang="scss" scoped>
.main-article {
  max-width: 80%;
  margin: 0px auto;
}
</style>
