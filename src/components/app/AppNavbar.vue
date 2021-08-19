<template>
  <nav class="nav">
    <button
      v-if="$breakpoint.xs"
      class="btn btn-hamburger"
    >
      <img
        class="ico"
        src="@/assets/svg/icons/menu.svg"
        alt=""
      >
    </button>

    <div class="nav-item nav-item--title">
      Karma.dev
    </div>

    <div
      v-if="$breakpoint.name !== 'xs'"
      class="nav-item nav-item--menu"
    >
      <a href="">Blog</a>
      <a href="">Projects</a>
      <a href="">Source</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
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
  }

  @include xs {
    justify-content: center;
  }

  .btn-hamburger {
    position: absolute;
    left: 0;
  }
}
</style>
