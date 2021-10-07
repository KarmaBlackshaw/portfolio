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

      <div class="projects-container">
        <div
          v-for="(currProject, projectKey) in projects"
          :key="projectKey"
          class="projects-item"
        >
          <div class="item-img">
            <img
              :src="require(`@/assets/images/${currProject.img}`)"
              alt=""
            >
          </div>

          <div class="item-content">
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

  data: () => ({}),

  computed: {
    projects () {
      return [
        {
          title: 'Job Portal',
          img: 'evsu-job-portal.png',
          stack: ['vue', 'node'],
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis quos, officiis eius quisquam omnis impedit asperiores sequi veniam vitae in, quis eum aperiam ipsum nobis cupiditate rem sint atque facilis. Perferendis deserunt impedit, molestias, labore consequuntur accusantium dignissimos quisquam eum aut laboriosam earum, architecto molestiae qui iste obcaecati. Eligendi obcaecati officiis tenetur quidem, facere vitae, ipsam provident deserunt incidunt accusamus illo libero ab quis volupta'
        },

        {
          title: 'Archiving System',
          img: 'archiving-system.png',
          stack: ['vue', 'node'],
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis quos, officiis eius quisquam omnis impedit asperiores sequi veniam vitae in, quis eum aperiam ipsum nobis cupiditate rem sint atque facilis. Perferendis deserunt impedit, molestias, labore consequuntur accusantium dignissimos quisquam eum aut laboriosam earum, architecto molestiae qui iste obcaecati. Eligendi obcaecati officiis tenetur quidem, facere vitae, ipsam provident deserunt incidunt accusamus illo libero ab quis volupta'
        },

        {
          title: '2048',
          img: '2048.png',
          stack: ['vue', 'node'],
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis quos, officiis eius quisquam omnis impedit asperiores sequi veniam vitae in, quis eum aperiam ipsum nobis cupiditate rem sint atque facilis. Perferendis deserunt impedit, molestias, labore consequuntur accusantium dignissimos quisquam eum aut laboriosam earum, architecto molestiae qui iste obcaecati. Eligendi obcaecati officiis tenetur quidem, facere vitae, ipsam provident deserunt incidunt accusamus illo libero ab quis volupta'
        }
      ]
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

  .projects-container {
    .projects-item {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 50px;

      .item-img {
        margin-right: 30px;
        background: rgb(219, 219, 219);
        min-width: 400px;
        max-width: 400px;
        height: 200px;
        overflow: hidden;
        position: relative;

        &:after {
          transition: background 0.5s ease;
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        &:hover {
          &:after {
            background: rgba(0,0,0, 0.2);
          }

          img {
            transform: scale(1.2);
          }
        }

        img {
          transition: all 0.5s ease;
          width: 100%;
          height: 100%;
        }
      }

      .item-content {
        .content-title {
          font-size: 1.2em;
          margin-bottom: 10px;
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
