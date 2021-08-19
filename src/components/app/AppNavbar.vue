<template>
  <section class="nav-section">
    <nav class="nav-head">
      <button
        v-if="$breakpoint.xs"
        class="btn btn-hamburger"
        @click="state.clickedHamburger = !state.clickedHamburger"
      >
        <img
          class="ico"
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
        { text: 'Blog', to: '' },
        { text: 'Projects', to: '' },
        { text: 'Source', to: '' }
      ]
    }
  },

  computed: {
    navBodyStyles () {
      const styles = {
        'max-height': `${this.state.clickedHamburger ? (this.tabs.length * 39) + 14 : 0}px`
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
  background: #171B23;
  padding-left: 10%;
  padding-right: 10%;
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
        margin-left: 20px;
      }
    }

    &.nav-item--title {
      font-weight: bold;
      color: white;
      letter-spacing: 1.5px;
    }
  }

  @include xs {
    justify-content: center;
  }

  .btn-hamburger {
    position: absolute;
    left: 0;
  }
}

.nav-body {
  transition: max-height 0.5s ease;
  overflow: hidden;

  ul li {
    padding-top: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid #30363d;
  }

  ul li:last-child {
    border: none;
    padding-bottom: 14px;
  }
}
</style>
