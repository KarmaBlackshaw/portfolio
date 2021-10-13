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

      <div class="about-contact">
        <div
          v-for="(currAbout, aboutKey) in aboutList"
          :key="aboutKey"
          class="contact-container"
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

      <div class="about-bio">
        <div class="left-container">
          <p>
            Hello! I am <span class="bold">Ernie Jeash Villahermosa</span>, a fullstack web developer with <span class="bold">{{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }}</span> of experience, specializing in developing web applications with Vue and Node.
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

        <div class="right-container">
          <img
            src="@/assets/svg/coding.svg"
            alt=""
          >
        </div>
      </div>

      <base-section-title>
        Stack
      </base-section-title>

      <div class="about-stack">
        <div class="stack-container">
          <div
            v-for="(currStack, stackKey) in stacksList"
            :key="stackKey"
            class="stack-item"
          >
            <div class="stack-item--logo">
              <img
                :src="require(`@/assets/svg/${currStack.img}`)"
                alt=""
              >
            </div>
            <div class="stack-item--title">
              {{ currStack.text }}
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
      stacksList: [
        {
          text: 'Vue',
          img: 'vue.svg'
        },
        {
          text: 'Node',
          img: 'nodejs-icon.svg'
        },
        {
          text: 'Koa',
          img: 'koa.svg'
        },
        {
          text: 'Mysql',
          img: 'mysql.svg'
        },
        {
          text: 'Knex',
          img: 'knex.svg'
        },
        {
          text: 'html 5',
          img: 'html-5.svg'
        },
        {
          text: 'Css 3',
          img: 'css-3.svg'
        },
        {
          text: 'Javascript',
          img: 'javascript.svg'
        },
        {
          text: 'Git',
          img: 'git-icon.svg'
        },
        // {
        //   text: 'eslint',
        //   img: 'eslint.svg'
        // },
        {
          text: 'vuetify',
          img: 'vuetifyjs.svg'
        }
        // {
        //   text: 'netlify',
        //   img: 'netlify.svg'
        // }
        // {
        //   text: 'VS Code',
        //   img: 'visual-studio-code.svg'
        // }
      ],

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
@import '@/assets/scss/views/about';
</style>
