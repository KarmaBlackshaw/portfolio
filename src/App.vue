<template>
  <main class="app-main">
    <app-navbar />

    <article class="main-article">
      <section>
        <router-view />
      </section>
    </article>

    <app-footer />
  </main>
</template>

<script>
import AppNavbar from '@/components/app/AppNavbar'
import AppFooter from '@/components/app/AppFooter'

export default {
  name: 'App',

  components: {
    AppNavbar,
    AppFooter
  }
}
</script>
