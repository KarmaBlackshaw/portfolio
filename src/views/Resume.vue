<template>
  <section
    id="resume"
    class="resume"
  >
    <div
      v-if="$env.NODE_ENV === 'development'"
      class="resume-container page-container"
    >
      <h1 class="page-title">
        CHECK MY RESUME
      </h1>

      <base-section-title>
        Resume
      </base-section-title>

      <div class="resume-container">
        <div class="resume-container--title">
          Professional Experience
        </div>

        <div class="resume-container--items">
          <div class="resume-item">
            <div class="resume-item--title">
              Fullstack Web Developer
            </div>
            <div class="resume-item--date">
              July 2019 - Present
            </div>
            <div class="resume-item--company">
              Cubic Solutions
            </div>
            <div class="resume-item--roles">
              <ul>
                <li>Research, design, develop, document software for clients</li>
                <li>Mentor interns</li>
              </ul>
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

    }
  }
}
</script>

<style lang="scss" scoped>
.resume {
  padding-top: 100px;
  background: white;
  min-height: 100vh;
  position: relative;
  border-bottom: 1px solid #e1e2e4;
}
</style>
