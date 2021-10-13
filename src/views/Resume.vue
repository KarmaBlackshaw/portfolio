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
        <div class="resume-content-item">
          <div class="content--title">
            Professional Experience
          </div>

          <div class="content--container">
            <div
              v-for="(currResume, resumeKey) in resumeList"
              :key="resumeKey"
              class="resume-item"
            >
              <div class="resume-item--title">
                {{ currResume.title }}
              </div>

              <div class="resume-item--company">
                {{ currResume.company }}
              </div>

              <div class="resume-item--duration">
                {{ currResume.duration }}
              </div>

              <div class="resume-item--roles">
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

        <div class="resume-content-item">
          <div class="content--title">
            Educational Details
          </div>

          <div class="content--container">
            <div class="resume-item">
              <div class="resume-item--title">
                Bachelor of Science in Information Technology
              </div>

              <div class="resume-item--company">
                Leyte Normal University
              </div>

              <div class="resume-item--duration">
                June 2015 - September 2019
              </div>

              <div
                v-if="0"
                class="resume-item--roles"
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

  data () {
    return {
      resumeList: [
        {
          title: 'Fullstack Web Developer',
          company: 'Cubic Solutions',
          duration: 'July 2019 - Present',
          tasks: [
            'Research, design, develop, and document software for clients',
            'Improve existing codebase',
            'Develop REST APIs',
            'Mentor new employees'
          ]
        },
        {
          title: 'Freelance',
          duration: 'August 2018 - Present',
          tasks: [
            'Research, design, develop, and document software for clients'
          ]
        },
        {
          title: 'Intern Web Developer',
          company: 'Philhealth',
          duration: 'May 2018 - August 2018',
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
@import '@/assets/scss/views/resume';
</style>
