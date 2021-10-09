<template>
  <section
    id="projects"
    class="projects"
  >
    <div class="projects-container page-container">
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

            <div
              v-if="currProject.link"
              class="content-text"
            >
              <img
                class="content-text--icon"
                src="@/assets/svg/icons/link.svg"
                alt=""
              >

              <a
                :href="currProject.link"
                target="_blank"
                class="content-text--label"
              >{{ currProject.link }}</a>
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
          img: '2048.png',
          link: 'https://karma-2048.netlify.app/'
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
@import '@/assets/scss/views/portfolio';
</style>
