<template>
  <main class="app-main">
    <TheNavbar />

    <article class="main-article">
      <keep-alive>
        <router-view />
      </keep-alive>
    </article>

    <!-- <app-footer v-if="$route.name !== 'home'" /> -->
  </main>
</template>

<script>
import TheNavbar from '@/components/app/TheNavbar/TheNavbar'
// import AppFooter from '@/components/app/AppFooter'

export default {
  name: 'App',

  components: {
    TheNavbar
    // AppFooter
  }
}
</script>
