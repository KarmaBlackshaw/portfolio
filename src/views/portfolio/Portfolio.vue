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
            :image="require(`./assets/images/projects/${currProject.img}`)"
            :title="currProject.title"
            :stack="currProject.stack"
            :href="currProject.href"
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

  metaInfo: {
    title: 'Portfolio',
    titleTemplate: `%s | ${process.env.VUE_APP_TITLE}`,
    meta: [
      { vmid: 'portfolio', name: 'portfolio', content: 'Portfolio of Ernie Jeash' }
    ]
  },

  components: {
    PortfolioProjectCard
  },

  computed: {
    projects () {
      // image dim 1182 x 885
      return [
        {
          title: 'Job Portal',
          img: 'evsu-job-portal.png',
          href: 'http://evsu.jeash.store',
          stack: ['vue', 'node']
        },
        {
          title: 'Online Course',
          img: 'online-course.png',
          href: 'http://online-exam.online',
          stack: ['vue', 'node']
        },
        {
          title: 'Covid Management',
          img: 'brgy.png',
          href: 'http://bms.netaxiscits.com',
          stack: ['vue', 'node']
        },
        {
          title: '2048 Game',
          img: '2048.png',
          href: 'https://2048.jeash.tech',
          stack: ['vue']
        },
        {
          title: 'DTR Generator',
          img: 'dtr.png',
          href: 'https://dtr.jeash.tech',
          stack: ['vue']
        },
        {
          title: 'Mark Anade',
          img: 'mark-photography.png',
          href: 'https://anade.jeash.tech',
          stack: ['vue']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/portfolio';
</style>
