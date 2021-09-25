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
            For now, <span class="bold">Ernie Jeash Villahermosa</span> is just a normal guy. A web developer with <span class="bold">{{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }}</span> of experience. Strives to become great at his job! Wants bigger things in life. Loves playing games and reading manwhas. Finds passion in building scripts and sometimes, visual stuff. A college graduate who thought developers have a very high salary.
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
  min-height: calc(100vh + 64px);
  position: relative;
  text-align: center;
  border-bottom: 1px solid #e1e2e4;
  display: flex;
  justify-content: center;
  align-items: center;

  .about-container {
    margin: 20px;
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

    .right-about {
      img {
        width: 80%;
        margin-bottom: 20px;
      }
    }

    .left-about {
      .about-title {
        font-family: "Poppins", sans-serif;
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 20px;
        color: #171b23;

        @include xs {
          font-size: 1.7em;
        }
      }

      .about-content {
        font-weight: 100;
        font-size: 1.8em;
        line-height: 1.8em;
        color: $bg-main-dark;

        .bold {
          font-weight: 900;
          color: #40b882;
        }

        @include xs {
          font-size: 1.1em;
        }

        @include sm {
          font-size: 1.2em;
        }
      }
    }
  }

  .about-title {
    font-size: 2em;
    color: #171b23;
  }
}
</style>
