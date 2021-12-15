<template>
  <header
    v-click-outside="() => state.clickedHamburger = false"
    class="nav-section"
    :class="{
      'is-show-body': state.clickedHamburger,
    }"
  >
    <nav class="nav-head">
      <button
        v-if="showHamburger"
        class="nav__hamburger"
        @click="state.clickedHamburger = !state.clickedHamburger"
      >
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
      </button>

      <div class="nav__title">
        karma.dev
      </div>

      <div
        v-if="!showHamburger && state.routerReady"
        class="nav__menu"
      >
        <router-link
          v-for="(currTab, tabKey) in tabs"
          :key="tabKey"
          :to="currTab.to"
          class="menu__item"
          v-text="currTab.text"
        />
      </div>
    </nav>

    <div
      v-if="showHamburger"
      class="nav__body"
      :class="{
        'is-open': state.clickedHamburger,
        'is-close': !state.clickedHamburger
      }"
    >
      <ul>
        <li
          v-for="(currTab, tabKey) in tabs"
          :key="tabKey"
          :class="{
            'is-active': $route.name === currTab.to.name
          }"
          @click="() => {
            $router.push(currTab.to)
            state.clickedHamburger = false
          }"
        >
          <span>{{ currTab.text }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import _windows from '@/assets/js/mixins/windows'
import vClickOutside from 'v-click-outside'

export default {
  name: 'TheNavbar',

  directives: {
    clickOutside: vClickOutside.directive
  },

  mixins: [_windows],

  data () {
    return {
      state: {
        routerReady: false,
        clickedHamburger: false,
        theme: 'theme-light'
      },

      tabs: [
        { text: 'home', to: { name: 'home' } },
        { text: 'about', to: { name: 'about' } },
        { text: 'portfolio', to: { name: 'portfolio' } },
        { text: 'resume', to: { name: 'resume' } },
        { text: 'contact', to: { name: 'contact' } }
      ]
    }
  },

  computed: {
    showHamburger () {
      return this.$breakpoint.isBelow(666)
    }
  },

  created () {
    this.$router.onReady(() => {
      this.state.routerReady = true
    })
  }
}
</script>

<style lang="scss" scoped>
@import './styles/the-navbar';
</style>
