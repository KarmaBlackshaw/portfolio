<template>
  <section
    id="about"
    class="about main-section"
  >
    <div class="about-container page-container">
      <h1 class="page-title">
        LEARN MORE ABOUT ME
      </h1>

      <base-section-title>
        About
      </base-section-title>

      <div class="about__body--contact">
        <div
          v-for="(currAbout, aboutKey) in aboutList"
          :key="aboutKey"
          class="contact__item"
        >
          <span class="arrow arrow--right"></span>

          <div class="text-container">
            <span class="text-title">
              {{ currAbout.title }}
            </span>
            <span class="text-value">
              {{ currAbout.content }}
            </span>
          </div>
        </div>
      </div>

      <base-section-title>
        Bio
      </base-section-title>

      <div class="about__body--bio">
        <div class="bio__details">
          <p>
            Hello! I am <span class="bold">Ernie Jeash Villahermosa</span>, a fullstack javascript developer with <span class="bold">{{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }}</span> of experience, specializing in developing web applications with Vue and Node.
          </p>

          <p>
            I graduated at
            <a
              class="bold"
              href="https://www.lnu.edu.ph/"
              target="_blank"
            >Leyte Normal University</a>

            {{ graduationFromNow }} years ago, under the scholarship of

            <a
              class="bold"
              href="https://sei.dost.gov.ph/index.php/scholarships/2015"
              target="_blank"
            >DOST</a>.
          </p>

          <p>
            I also work on freelance projects ranging from full stack development, web scraping, and code tutorials.
          </p>

          <p>
            I want bigger things in life so I strive to become great at coding. I love reading dev blogs, manwhas, latest technologies during my freetime.
          </p>
        </div>

        <div class="bio__figure">
          <div class="figure__background"></div>

          <img
            src="./assets/svg/programming.svg"
            alt=""
          >
        </div>
      </div>

      <base-section-title>
        Stack
      </base-section-title>

      <div class="abount__stack--bio">
        <div class="stack__list">
          <div
            v-for="(currStack, stackKey) in stacksList"
            :key="stackKey"
            class="stack__item"
          >
            <div class="stack__item--logo">
              <img
                :src="require(`@/assets/svg/${currStack.img}`)"
                alt=""
              >
            </div>
            <div class="stack__item--text">
              <div class="text__title">
                {{ currStack.text }}
              </div>
              <div class="text__subtitle">
                {{ currStack.since }} years
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  data () {
    return {

      aboutList: [
        {
          title: 'Type:',
          content: 'Fullstack Web Developer'
        },
        {
          title: 'Phone:',
          content: '+63 926 456 6783'
        },
        {
          title: 'Open for consultations and freelancing'
        }
      ]
    }
  },

  computed: {

    stacksList () {
      const currDate = new Date()

      const currYear = currDate.getFullYear()

      const getYearsOfExp = year => currYear - year

      return [
        {
          text: 'Vue',
          img: 'vue.svg',
          since: getYearsOfExp(2019)
        },
        {
          text: 'Node',
          img: 'nodejs-icon.svg',
          since: getYearsOfExp(2019)
        },
        {
          text: 'Mysql',
          img: 'mysql.svg',
          since: getYearsOfExp(2018)
        },
        {
          text: 'html 5',
          img: 'html-5.svg',
          since: getYearsOfExp(2018)
        },
        {
          text: 'Css 3',
          img: 'css-3.svg',
          since: getYearsOfExp(2018)
        },
        {
          text: 'Javascript',
          img: 'javascript.svg',
          since: getYearsOfExp(2018)
        }
      ]
    },

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
    },

    graduationFromNow () {
      const gradDate = new Date('2019-07-22')
      const currDate = new Date()

      const startYear = gradDate.getFullYear()
      const currYear = currDate.getFullYear()

      return currYear - startYear
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/about';
</style>
