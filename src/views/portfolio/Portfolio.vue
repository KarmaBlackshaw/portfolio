<template>
  <section
    id="projects"
    class="main-section"
  >
    <div class="projects-container page-container">
      <h1 class="page-title">
        VIEW MY PROJECTS
      </h1>

      <base-section-title>
        Projects
      </base-section-title>

      <div class="projects__body">
        <div class="projects__list">
          <PortfolioProjectCard
            v-for="(currProject, projectKey) in projects"
            :key="projectKey"
            :image="require(`./assets/images/${currProject.img}`)"
            :data-aos-delay="200 * projectKey"
            :title="currProject.title"
            :stack="currProject.stack"
            data-aos="flip-right"
            class="projects__item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import PortfolioProjectCard from './components/PortfolioProjectCard'

export default {
  name: 'Portfolio',

  title: 'Portfolio',

  components: {
    PortfolioProjectCard
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
      // image dim 1182x885
      return [
        {
          title: 'Job Portal',
          img: 'evsu-job-portal.png',
          stack: ['vue', 'node']
        },
        {
          title: 'Online Course',
          img: 'online-course.png',
          stack: ['vue', 'node']
        },
        {
          title: 'Covid Management',
          img: 'online-course.png',
          stack: ['vue', 'node']
        },
        {
          title: '2048 Game',
          img: '2048.png',
          link: 'https://karma-2048.netlify.app/',
          source: 'https://github.com/KarmaBlackshaw/2048',
          stack: ['vue']
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
@import './styles/portfolio';
</style>
