<template>
  <header
    v-click-outside="() => state.clickedHamburger = false"
    class="nav-section"
    :style="navbarStyles"
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

        <button
          v-if="$env.NODE_ENV === 'development'"
          class="menu__item btn__toggle"
          :class="state.theme"
          @click="toggleTheme"
        >
          <transition
            name="slide-fade"
            mode="out-in"
          >
            <icon-moon-line
              v-if="state.theme === 'theme-dark'"
              key="dark"
              class="btn__icon"
              fill="rgb(53, 172, 136)"
            />

            <icon-sun-line
              v-else
              key="light"
              class="btn__icon"
              fill="rgb(53, 172, 136)"
            />
          </transition>
        </button>
      </div>
    </nav>

    <div
      v-if="$breakpoint.xs"
      class="nav__body"
      :style="navBodyStyles"
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

import IconSunLine from '@/assets/svg/icons/sun-line'
import IconMoonLine from '@/assets/svg/icons/moon-line'

export default {
  name: 'AppNavbar',

  components: {
    IconSunLine,
    IconMoonLine
  },

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
        // { text: 'contact', to: { name: 'resume' } }
      ]
    }
  },

  computed: {
    navBodyStyles () {
      const state = this.state
      const tabs = this.tabs

      const styles = {
        'max-height': `${state.clickedHamburger ? (tabs.length * 39) + 30 : 0}px`
      }

      return Object
        .entries(styles)
        .reduce((acc, curr) => {
          return acc + `${curr[0]}: ${curr[1]};`
        }, '')
    },

    navbarStyles () {
      const getAlpha = () => {
        return this.$route.name === 'home'
          ? this.state.clickedHamburger ? 0.5 : 0
          : 1
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
    document.documentElement.className = 'theme-light'
    this.state.theme = 'theme-light'

    this.$router.onReady(() => {
      this.state.routerReady = true
    })
  },

  methods: {
    toggleTheme () {
      const theme = document.documentElement.className
      const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      document.documentElement.className = newTheme
      this.state.theme = newTheme
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/app-navbar';
</style>
