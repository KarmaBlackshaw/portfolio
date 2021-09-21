<template>
  <section
    id="stack"
    class="stack"
  >
    <div class="stack-container">
      <h1 class="stack-title">
        Tech Stack
      </h1>

      <div class="stack-list">
        <div
          v-for="(currStack, stackKey) in stack"
          :key="stackKey"
          class="stack-list--item"
        >
          <div class="item-img">
            <img
              :src="require(`@/assets/svg/${currStack.img}`)"
              alt=""
            >
          </div>

          <p
            class="item-title"
            v-text="currStack.text"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// sections
export default {
  name: 'Stack',

  data () {
    return {
      stack: [
        {
          text: 'Vue.js',
          img: 'vue.svg'
        },
        {
          text: 'Node.js',
          img: 'nodejs-icon.svg'
        },
        {
          text: 'Koa.js',
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
  }
}
</script>

<style lang="scss" scoped>
.stack {
  padding-top: 50px;
  padding-bottom: 50px;
  background: white;
  min-height: calc(100vh + 64px);
  position: relative;
  user-select: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .stack-container {
    margin-right: auto;
    margin-left: auto;
    max-width: $content-width;
  }

  .stack-title {
    font-family: "Poppins", sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #171b23;
  }

  .stack-list {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .stack-list--item {
      padding: 20px;
      min-height: 200px;
      width: 180px;
      background: rgb(247, 246, 246);
      border-radius: 15px;
      margin: 20px;
      transition: all 0.4s ease;

      @include xs {
        min-height: 100px;
        width: 100px;
        margin: 10px;
      }

      @include sm {
        min-height: 100px;
        width: 140px;
        margin: 10px;
      }

      &:hover {
        transform: scale(1.03);

        .item-img {
          transform: scale(1.09);
        }
      }

      .item-img {
        transition: all 0.4s ease;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 80px;
        }

        @include xs {
          height: 80px;
        }
      }

      .item-title {
        margin-top: 20px;
        padding-top: 10px;
        color: #171b23;
        font-weight: 500;
        text-transform: uppercase;

        @include xs {
          font-size: 0.8em;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
