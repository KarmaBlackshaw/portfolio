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
          <div class="project-item__img">
            <img
              :src="require(`@/assets/images/portfolio/${currProject.img}`)"
              alt=""
            >
          </div>

          <div
            class="project-item__content"
            :class="{
              'project-item__content--hovered': projectKey === state.cardHovered.index
            }"
          >
            <div class="content-title">
              {{ currProject.title }}
            </div>

            <div
              v-if="currProject.link"
              class="content-text"
            >
              <a
                v-if="currProject.link"
                :href="currProject.link"
                target="_blank"
                class="content-text--label"
              >
                <icon-eye-fill fill="#FAF9EE" />
              </a>

              <a
                v-if="currProject.source"
                :href="currProject.source"
                target="_blank"
                class="content-text--label"
              >
                <icon-code-view fill="#FAF9EE" />
              </a>
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

import IconEyeFill from '@/assets/svg/icons/eye-fill'
import IconCodeView from '@/assets/svg/icons/code-view'

export default {
  name: 'Portfolio',

  components: {
    IconEyeFill,
    IconCodeView
  },

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
          title: 'Covid Management',
          img: 'qr.png'
        },
        {
          title: '2048 Game',
          img: '2048.png',
          link: 'https://karma-2048.netlify.app/',
          source: 'https://github.com/KarmaBlackshaw/2048'
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
