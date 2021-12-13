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
        v-if="$breakpoint.xs"
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
        v-if="!$breakpoint.xs && state.routerReady"
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
      v-if="$breakpoint.xs"
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
          @click="$router.push(currTab.to)"
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
        { text: 'resume', to: { name: 'resume' } }
        // { text: 'contact', to: { name: 'contact' } }
      ]
    }
  },

  computed: {
    navBodyStyles () {
      const state = this.state
      const tabs = this.tabs

      const maxHeight = (tabs.length * 39) + 30
      const styles = {
        top: `${state.clickedHamburger ? 64 : maxHeight * -1}px`
      }

      return Object
        .entries(styles)
        .reduce((acc, curr) => {
          return acc + `${curr[0]}: ${curr[1]};`
        }, '')
    },

    navbarStyles () {
      const getAlpha = () => {
        return this.state.clickedHamburger ? 0.9 : 0
      }

      const styles = {
        'background-color': `rgba(12, 16, 23, ${getAlpha()})`
      }

      return Object
        .entries(styles)
        .reduce((acc, curr) => {
          return acc + `${curr[0]}: ${curr[1]};`
        }, '')
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
