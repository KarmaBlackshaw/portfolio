<template>
  <section class="nav-section">
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
        v-if="!$breakpoint.xs"
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
        >
          <router-link
            :to="currTab.to"
            class="nav-body--link"
          />

          {{ currTab.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppNavbar',

  data () {
    return {
      state: {
        clickedHamburger: false
      },

      tabs: [
        // { text: 'Blog', to: '' },
        // { text: 'Projects', to: '' },
        // { text: 'Source', to: '' }
      ]
    }
  },

  computed: {
    navBodyStyles () {
      const state = this.state
      const tabs = this.tabs

      const styles = {
        'max-height': `${state.clickedHamburger ? (tabs.length * 39) + 14 : 0}px`
      }

      return Object
        .entries(styles)
        .reduce((acc, curr) => {
          return acc + `${curr[0]}: ${curr[1]};`
        }, '')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-section {
  background: lighten($color: $bg-main-dark, $amount: 5%);
  padding-left: 10%;
  padding-right: 10%;
  position: fixed;
  z-index: 1;
  width: 100%;
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
        margin-left: 20px;
        color: white;
        font-weight: bold;
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

    img {
      height: 24px;
    }
  }
}

.nav-body {
  transition: max-height 0.4s ease;
  overflow: hidden;
  color: white;
  font-weight: bold;

  ul li {
    cursor: pointer;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #30363d;
  }

  ul li:last-child {
    border: none;
    padding-bottom: 14px;
  }
}
</style>
