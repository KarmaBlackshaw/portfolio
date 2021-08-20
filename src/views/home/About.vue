<template>
  <section
    id="about"
    class="about"
  >
    <div class="about-container">
      <div class="left-about">
        <div class="left-container">
          <h1 class="about-title">
            Who is this guy?
          </h1>

          <p class="about-content">
            For now, it's just me, Ernie Jeash Villahermosa. Striving to become great at his job! Wants bigger things in life. Loves playing games and reading manwhas. Finds passion in building scripts and sometimes, visual stuffs. A college graduate who thinks developers have a very high salary.
          </p>
        </div>
      </div>

      <div class="right-about">
        <div class="right-container">
          <img
            src="@/assets/svg/coding.svg"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  background: white;
  min-height: 100vh;
  position: relative;
  user-select: none;
  text-align: center;
  padding-top: 74px;
  padding-bottom: 64px;
  border-bottom: 1px solid #e1e2e4;

  .about-container {
    margin-right: auto;
    margin-left: auto;
    max-width: $content-width;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-height: 100vh;

    @include xs {
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }

    @include sm {
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }

    .left-about,
    .right-about {
      width: 47%;
      display: flex;
      justify-content: center;
      height: 100%;

      @include xs {
        width: 100%;
      }

      @include sm {
        width: 100%;
      }
    }

    .about-title {
      font-family: "Poppins", sans-serif;
      font-size: 2.5em;
      font-weight: bold;
      margin-bottom: 20px;

      @include xs {
        font-size: 1.3em;
      }
    }

    .about-content {
      font-weight: 100;
      font-size: 2em;
      color: $bg-main-dark;

      @include xs {
        font-size: 0.9em;
      }
    }
  }

  .about-title {
    font-size: 2em;
    color: #171b23;
  }
}
</style>
