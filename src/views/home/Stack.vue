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
        // {
        //   text: 'eslint',
        //   img: 'eslint.svg'
        // },
        {
          text: 'vuetify',
          img: 'vuetifyjs.svg'
        },
        {
          text: 'netlify',
          img: 'netlify.svg'
        }
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
  background: white;
  min-height: 100vh;
  position: relative;
  user-select: none;
  text-align: center;
  padding-top: 64px;

  .stack-container {
    margin-right: auto;
    margin-left: auto;
    max-width: $content-width;
  }

  .stack-title {
    font-size: 2em;
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

      &:hover {
        transform: scale(1.05);
      }

      .item-img {
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;

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
