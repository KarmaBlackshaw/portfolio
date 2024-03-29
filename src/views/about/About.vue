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
            Hello! I am <span class="highlight">Ernie Jeash Villahermosa</span>, a fullstack javascript developer with <span class="highlight">{{ durationOfExperience.years }} years and {{ durationOfExperience.months }} {{ durationOfExperience.months > 1 ? 'months' : 'month' }}</span> of experience, specializing in developing web applications with Vue and Node.
          </p>

          <p>
            I graduated at
            <a
              class="highlight"
              href="https://www.lnu.edu.ph/"
              target="_blank"
            >Leyte Normal University</a>

            {{ graduationFromNow }} years ago with a Bachelors degree in Information Technology, under the scholarship of

            <a
              class="highlight"
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
          <div class="stack__list">
            <div
              v-for="(currStack, stackKey) in stacksList"
              :key="stackKey"
            >
              <div class="stack__item">
                <div class="stack__item--logo">
                  <img
                    :src="require(`./assets/images/${currStack.img}.png`)"
                    alt=""
                  >
                </div>

                <div class="stack__item--text">
                  <p class="text__title">
                    {{ currStack.text }}
                  </p>
                  <p class="text__subtitle">
                    {{ currStack.since }} years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import differenceInMonths from 'date-fns/differenceInMonths'

export default {
  name: 'About',

  metaInfo: {
    title: 'About',
    titleTemplate: `%s | ${process.env.VUE_APP_TITLE}`,
    meta: [
      { vmid: 'about', name: 'about', content: 'About Ernie Jeash' },
      { vmid: 'portfolio', name: 'portfolio', content: 'Portfolio of Ernie Jeash' }
    ]
  },

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
          img: 'vue',
          since: getYearsOfExp(2019)
        },
        {
          text: 'Node',
          img: 'nodejs',
          since: getYearsOfExp(2019)
        },
        {
          text: 'Mysql',
          img: 'mysql',
          since: getYearsOfExp(2018)
        },
        {
          text: 'html 5',
          img: 'html',
          since: getYearsOfExp(2018)
        },
        {
          text: 'Css 3',
          img: 'css',
          since: getYearsOfExp(2018)
        },
        {
          text: 'Javascript',
          img: 'javascript',
          since: getYearsOfExp(2018)
        },
        {
          text: 'Git',
          img: 'git',
          since: getYearsOfExp(2019)
        }
      ]
    },

    durationOfExperience () {
      const startDate = new Date('2019-07-22')
      const currDate = new Date()

      const monthsOfExperience = differenceInMonths(currDate, startDate)
      const years = Math.floor(monthsOfExperience / 12)
      const months = monthsOfExperience % 12

      return {
        years,
        months
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
