<template>
  <section
    id="about"
    class="about"
  >
    <div class="about-container">
      <base-section-title>
        About
      </base-section-title>

      <h1 class="about-title">
        LEARN MORE ABOUT ME
      </h1>

      <div class="about-contact">
        <div class="contact-container">
          <img
            class="arrow-right"
            src="@/assets/svg/arrow-right.svg"
            alt=""
          >

          <div class="text-container">
            <span class="text-title">
              Type:
            </span>
            <span class="text-value">
              Fullstack Web Developer
            </span>
          </div>
        </div>

        <div class="contact-container">
          <img
            class="arrow-right"
            src="@/assets/svg/arrow-right.svg"
            alt=""
          >

          <div class="text-container">
            <span class="text-title">
              Phone:
            </span>
            <span class="text-value">
              +639264566783
            </span>
          </div>
        </div>

        <div class="contact-container">
          <img
            class="arrow-right"
            src="@/assets/svg/arrow-right.svg"
            alt=""
          >

          <div class="text-container">
            <span class="text-title">
              Open for consultations and freelancing
            </span>
          </div>
        </div>
      </div>

      <base-section-title>
        Bio
      </base-section-title>

      <div class="about-bio">
        <div class="left-container">
          <!-- <p class="about-content">
            For now, <span class="bold">Ernie Jeash Villahermosa</span> is just a normal guy. A web developer with <span class="bold">{{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }}</span> of experience. Strives to become great at his job! Wants bigger things in life. Loves playing games and reading manwhas. Finds passion in building scripts and sometimes, visual stuff. A college graduate who thought developers have a very high salary.
          </p> -->

          <p>
            Hello! I am <span class="bold">Ernie Jeash Villahermosa</span>, a fullstack web developer with <span class="bold">{{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }}</span> of experience, specializing in developing web applications with Vue and Node.
          </p>

          <p>
            I also work on freelance projects ranging from full stack development, web scraping, and code tutorials.
          </p>

          <p>
            I want bigger things in life so I strive to become great at coding. I love playing games and reading manwhas, latest technologies, developer blogs during my freetime.
          </p>
        </div>

        <div class="right-container">
          <img
            src="@/assets/svg/coding.svg"
            alt=""
          >
        </div>
      </div>

      <!-- <div class="right-about">
        <div class="right-container">
          <img
            src="@/assets/svg/coding.svg"
            alt=""
          >
        </div>
      </div> -->
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
  padding-top: 50px;
  background: white;
  min-height: 100vh;
  position: relative;
  border-bottom: 1px solid #e1e2e4;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .about-container {
    max-width: $content-width;
    height: 100%;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;

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

    .about-contact {
      margin-bottom: 50px;

      .contact-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;

        .arrow-right {
          height: 20px;
          width: 20px;
        }

        .text-container {
          .text-title {
            font-weight: bold;
            margin-right: 10px;
          }
        }
      }
    }

      .about-bio {
        font-weight: 100;
        font-size: 1.2em;
        line-height: 1.8em;
        color: $bg-main-dark;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .left-container, .right-container {
          width: 50%;
        }

        .left-container {
          p {
            margin-bottom: 20px;
          }
        }

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

  .about-title {
    font-size: 2em;
    color: #171b23;
  }
}
</style>
