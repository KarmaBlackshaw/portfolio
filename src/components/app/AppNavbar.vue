<template>
  <header
    v-click-outside="() => state.clickedHamburger = false"
    class="nav-section"
    :style="navbarStyles"
  >
    <nav class="nav-head">
      <button
        v-if="$breakpoint.xs"
        class="btn btn-hamburger"
        @click="state.clickedHamburger = !state.clickedHamburger"
      >
        <img
          src="@/assets/svg/icons/menu.svg"
          alt=""
        >
      </button>

      <div class="nav-item nav-item--title">
        karma.dev
      </div>

      <div
        v-if="!$breakpoint.xs && state.routerReady"
        class="nav-item nav-item--menu"
      >
        <router-link
          v-for="(currTab, tabKey) in tabs"
          :key="tabKey"
          :to="currTab.to"
          v-text="currTab.text"
        />
      </div>
    </nav>

    <div
      v-if="$breakpoint.xs"
      class="nav-body"
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

export default {
  name: 'AppNavbar',

  directives: {
    clickOutside: vClickOutside.directive
  },

  mixins: [_windows],

  data () {
    return {
      state: {
        routerReady: false,
        clickedHamburger: false
      },

      tabs: [
        { text: 'home', to: { name: 'home' } },
        { text: 'about', to: { name: 'about' } },
        { text: 'portfolio', to: { name: 'portfolio' } },
        { text: 'resume', to: { name: 'resume' } }
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
    this.$router.onReady(() => {
      this.state.routerReady = true
    })
  }
}
</script>

<style lang="scss" scoped>
.nav-section {
  padding-left: 10%;
  padding-right: 10%;
  position: fixed;
  z-index: 2;
  width: 100%;
}

.after-link {
  content: "";
  background: rgb(53, 172, 136);
  position: absolute;
  width: 0;
  margin-top: 5px;
  bottom: -5px;
  left: 0;
  height: 2px;
  transition: width 0.5s ease;
}

.nav-head {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .nav-item {
    &.nav-item--menu {
      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-size: 0.8rem;
        transition: all 0.5s ease;
        position: relative;

        &:after {
          @extend .after-link;
        }

        &.router-link-exact-active {
          color: rgb(53, 172, 136);

          &:after {
            width: 100%;
          }
        }

        &:hover {
          &:after {
            width: 100%;
          }
        }
      }

      a:focus {
        outline: none;
        font-weight: bold;
      }

      $margin-x: 20px;
      a:not(:last-child) {
        margin-right: $margin-x;
      }

      a:not(:first-child) {
        margin-left: $margin-x;
      }
    }

    &.nav-item--title {
      font-family: "Poppins", sans-serif;
      color: white;
      font-size: 1.2em;
    }
  }

  @include xs {
    justify-content: center;
  }

  .btn-hamburger {
    position: absolute;
    left: 0;
    max-width: 35px;
    min-width: 35px;
    width: 35px;
  }
}

.nav-body {
  transition: all 0.4s ease;
  overflow: hidden;
  color: white;
  font-weight: bold;

  ul li {
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    user-select: none;
    outline-style: none;

    span {
      position: relative;

      &:after {
        @extend .after-link;
      }
    }

    &.is-active {
      color: rgb(53, 172, 136);

      span:after {
        width: 100%;
      }
    }
  }

  ul li:last-child {
    border: none;
    padding-bottom: 30px;
  }
}
</style>
