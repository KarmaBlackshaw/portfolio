<template>
  <section
    id="about"
    class="about"
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
          <img
            class="arrow-right"
            src="@/assets/svg/arrow-right.svg"
            alt=""
          >

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
.cursor-pointer {
  cursor: pointer;
}

.about {
  padding-top: 100px;
  background: white;
  min-height: 100vh;
  position: relative;
  border-bottom: 1px solid #e1e2e4;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .about-container {
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
      margin-bottom: 50px;

      @include xs {
        flex-direction: column-reverse;
      }

      @include sm {
        flex-direction: column-reverse;
      }

      a {
        text-decoration: none;
      }

      .left-container,
      .right-container {
        width: 45%;

        @include sm {
          width: 100%;
        }

        @include xs {
          width: 100%;
        }
      }

      .left-container {
        margin-right: auto;

        p {
          margin-bottom: 20px;
        }
      }

      .right-container {
        margin-left: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-height: 300px;

          @include sm {
            margin-bottom: 20px;
            max-height: 200px;
          }

          @include xs {
            margin-bottom: 20px;
          }
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

    .about-stack {
      margin-bottom: 50px;

      .stack-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      .stack-item {
        cursor: pointer;
        user-select: none;
        height: 60px;
        padding-left: 20px;
        background: rgb(247, 247, 247);
        display: flex;
        margin-right: 20px;
        margin-bottom: 20px;
        flex: 0 0 23%;
        width: 24%;
        transition: all 0.4s ease;

        &:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2),
            0 6px 15px 0 rgba(0, 0, 0, 0.19);

          .stack-item--logo {
            img {
              transform: scale(1.15);
            }
          }
        }

        @include sm {
          flex: 0 0 45%;
        }

        @include xs {
          flex: 0 0 100%;
          margin: auto;
          margin-bottom: 20px;
        }

        .stack-item--logo {
          margin-right: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            transition: all 0.4s ease;
            max-width: 30px;
          }
        }

        .stack-item--title {
          font-family: "Poppins", sans-serif;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-transform: uppercase;
          font-weight: bold;
          color: rgb(80, 80, 80);
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
