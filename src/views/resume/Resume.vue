<template>
  <section
    id="resume"
    class="main-section"
  >
    <div class="resume-container page-container">
      <h1 class="page-title">
        CHECK MY RESUME
      </h1>

      <base-section-title>
        Resume
      </base-section-title>

      <div class="resume-content">
        <div class="resume-content__item">
          <div class="content--title">
            Professional Experience
          </div>

          <div class="content--container">
            <div
              v-for="(currResume, resumeKey) in resumeList"
              :key="resumeKey"
              class="resume__item"
            >
              <div class="resume__item--heading">
                {{ currResume.title }}
              </div>

              <div class="resume__item--company">
                {{ currResume.company }}
              </div>

              <div class="resume__item--duration">
                {{ currResume.duration }}
              </div>

              <div class="resume__item--roles">
                <ul>
                  <li
                    v-for="(currTask, taskKey) in currResume.tasks"
                    :key="taskKey"
                  >
                    {{ currTask }}
                  </li>
                </ul>
              </div>

              <div class="resume__item--stack">
                <div class="stack__title">
                  Stack
                </div>

                <div class="stack__list">
                  <div
                    v-for="(currStack, stackKey) in currResume.stack"
                    :key="stackKey"
                    class="stack__item"
                  >
                    <img
                      :src="require(`./assets/images/icons/${currStack}.png`)"
                      alt=""
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="resume-content__item">
          <div class="content--title">
            Educational Details
          </div>

          <div class="content--container">
            <div class="resume__item">
              <div class="resume__item--heading">
                Bachelor of Science in Information Technology
              </div>

              <div class="resume__item--company">
                Leyte Normal University
              </div>

              <div class="resume__item--duration">
                June 2015 - September 2019
              </div>

              <div
                v-if="0"
                class="resume__item--roles"
              >
                <ul>
                  <li
                    v-for="(currTask, taskKey) in currResume.tasks"
                    :key="taskKey"
                  >
                    {{ currTask }}
                  </li>
                </ul>
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
  name: 'Resume',

  title: 'Resume',

  data () {
    return {
      resumeList: [
        {
          title: 'Fullstack Software Developer',
          company: 'Cubic Solutions',
          duration: 'July 2019 - Present',
          stack: ['vue', 'node', 'mysql', 'sass'],
          tasks: [
            'Improving team productivity by cleaning the code',
            'Incrementally improving processes/code/efficiency',
            'Develop REST APIs',
            'Mentor new employees',
            'Integrate data from various backend services ',
            'Create and maintain software documentation',
            'Maintain and scale the sites'
          ]
        },
        {
          title: 'Freelance',
          duration: 'August 2018 - Present',
          stack: ['vue', 'node', 'mysql', 'php', 'sass'],
          tasks: [
            'Research, design, develop, and document software for clients'
          ]
        },
        {
          title: 'Intern Web Developer',
          company: 'Philhealth',
          duration: 'May 2018 - August 2018',
          stack: ['mysql', 'php'],
          tasks: [
            'Research, design, and develop web applications',
            'Automate process'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/resume';
</style>
