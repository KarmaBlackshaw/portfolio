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
            For now, it's just me, Ernie Jeash Villahermosa. A web developer with {{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }} of experience. Striving to become great at his job! Wants bigger things in life. Loves playing games and reading manwhas. Finds passion in building scripts and sometimes, visual stuffs. A college graduate who thought developers have a very high salary.
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
  name: 'About',

  computed: {
    durationOfExperience () {
      const startDate = new Date('2019-07-22')
      const currDate = new Date()

      const startYear = startDate.getFullYear()
      const currYear = currDate.getFullYear()

      const startMonth = startDate.getMonth()
      const currMonth = currDate.getMonth()

      const diffYears = currYear - startYear
      const diffMonths = currMonth - startMonth

      return {
        year: diffYears,
        month: diffMonths
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  background: white;
  min-height: 100vh;
  position: relative;
  user-select: none;
  text-align: center;
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
      font-weight: 50;
      font-size: 1.6em;
      line-height: 1.5em;
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
