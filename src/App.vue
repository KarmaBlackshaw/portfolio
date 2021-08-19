<template>
  <main class="min-h-screen">
    <app-navbar />

    <article>
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
main {
  max-width: 80%;
  margin: 0px auto;
}
</style>
