<template>
  <section
    id="about"
    class="about"
  >
    <div class="about-container">
      <h1 class="about-title">
        LEARN MORE ABOUT ME
      </h1>

      <base-section-title>
        About
      </base-section-title>

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
              +63 926 456 6783
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
          <p>
            Hello! I am <span class="bold">Ernie Jeash Villahermosa</span>, a fullstack web developer with <span class="bold">{{ durationOfExperience.year }} years and {{ durationOfExperience.month }} {{ durationOfExperience.month > 1 ? 'months' : 'month' }}</span> of experience, specializing in developing web applications with Vue and Node.
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
            v-for="(currStack, stackKey) in stacks"
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
      stacks: [
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
      margin-bottom: 50px;

      @include xs {
        flex-direction: column-reverse;
      }

      @include sm {
        flex-direction: column-reverse;
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
        height: 60px;
        padding-left: 20px;
        background: rgb(238, 237, 237);
        display: flex;
        margin: 10px;
        flex: 0 0 23%;
        width: 24%;
        transition: all 0.4s ease;

        &:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2),
            0 6px 15px 0 rgba(0, 0, 0, 0.19);

          .stack-item--logo {
            img {
              transform: scale(1.3);
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
