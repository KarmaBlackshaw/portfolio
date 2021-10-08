<template>
  <section
    id="projects"
    class="projects"
  >
    <div
      v-if="$env.NODE_ENV === 'development'"
      class="projects-container page-container"
    >
      <h1 class="page-title">
        VIEW MY PROJECTS
      </h1>

      <base-section-title>
        Projects
      </base-section-title>

      <div class="item-container">
        <div
          v-for="(currProject, projectKey) in projects"
          :key="projectKey"
          class="projects-item"
          @mouseover="handleMouseover({ item: currProject, index:projectKey })"
          @mouseleave="handleMouseleave()"
        >
          <div class="item-img">
            <img
              :src="require(`@/assets/images/portfolio/${currProject.img}`)"
              alt=""
            >
          </div>

          <div
            class="item-content"
            :class="{
              'item-content--hovered': projectKey === state.cardHovered.index
            }"
          >
            <div class="content-title">
              {{ currProject.title }}
            </div>

            <div class="content-text">
              {{ currProject.description }}
            </div>

            <div class="content-stack">
              <div
                v-for="(currStack, stackKey) in currProject.stack"
                :key="stackKey"
                class="stack-item"
              >
                {{ currStack }}
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
  name: 'Portfolio',

  data: () => ({
    state: {
      cardHovered: {
        index: null
      }
    }
  }),

  computed: {
    projects () {
      return [
        {
          title: 'Job Portal',
          img: 'job-portal.png'
        },
        {
          title: 'Online Course',
          img: 'online-course.png'
        },
        {
          title: '2048 Game',
          img: '2048.png'
        }
      ]
    }
  },

  methods: {
    handleMouseover ({ index }) {
      this.state.cardHovered.index = index
    },

    handleMouseleave () {
      console.log('leave')
      this.state.cardHovered.index = null
    }
  }
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}

.projects {
  padding-top: 100px;
  background: white;
  min-height: 100vh;
  position: relative;
  border-bottom: 1px solid #e1e2e4;

  .item-container {
    display: flex;
    flex-wrap: wrap;

    .projects-item {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 33%;

      @include sm {
        flex: 0 0 49%;
      }

      @include xs {
        flex: 0 0 100%;
      }

      $borders-paddings: 35px;
      $border-colors: #fff;
      $border-width: 3px;
      $border-dimensions: 35px;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 0 solid transparent;
        border-left: 0 solid transparent;
        transition: all 0.5s ease;
      }

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-bottom: 0 solid transparent;
        border-right: 0 solid transparent;
        z-index: 999999;
        transition: all 0.5s ease;
      }

      &:hover {
        &:after {
          top: $borders-paddings;
          left: $borders-paddings;
          width: $border-dimensions;
          height: $border-dimensions;
          border-top: $border-width solid $border-colors;
          border-left: $border-width solid $border-colors;
        }

        &:before {
          bottom: $borders-paddings;
          right: $borders-paddings;
          width: $border-dimensions;
          height: $border-dimensions;
          border-bottom: $border-width solid $border-colors;
          border-right: $border-width solid $border-colors;
        }

        .item-img {
          &:after {
            height: 100%;
          }
        }
      }

      .item-img {
        margin: 10px;
        overflow: hidden;
        position: relative;
        width: 100%;

        &:after {
          transition: all 0.5s ease;
          content: "";
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          border-radius: 5px;
          height: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        img {
          transition: all 0.5s ease;
          width: 100%;
          height: 100%;
        }
      }

      .item-content {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s ease;
        pointer-events: none;

        &.item-content--hovered {
          opacity: 1;
          visibility: visible;
        }

        .content-title {
          font-size: 1.5em;
          margin-bottom: 10px;
          font-weight: bold;
          color: rgb(241, 241, 241);
          font-family: "Poppins", sans-serif;
        }

        .content-text {
          line-height: 1.5em;
          margin-bottom: 10px;
        }

        .content-stack {
          display: flex;
          justify-content: flex-start;

          .stack-item {
            background: rgb(118, 196, 3);
            padding: 5px 10px;
            border-radius: 25px;
            font-size: 0.8em;
            color: white;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
