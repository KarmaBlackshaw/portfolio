<template>
  <section
    id="hero"
    class="hero"
  >
    <div class="card">
      <div class="card__background"></div>

      <div class="card__body">
        <div class="card__figure">
          <home-svg-code-think
            class="card__img"
            data-aos="fade-up"
          />
        </div>

        <div
          class="card__title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>Ernie Jeash</p> <p>Villahermosa</p>
        </div>

        <p
          class="card__subtitle"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A {{ age }}-year-old <b>Software Developer</b> based in <b>Cebu, Philippines</b>. Web enthusiast. Enjoys creating web applications from frontend to backend until deployment.
        </p>

        <div class="card__communicate">
          <a
            class="btn communicate__chat"
            data-aos="fade-up"
            :data-aos-delay="600"
            @click="$router.push({name: 'contact'})"
          >
            Chat with me
          </a>

          <a
            class="btn communicate__resume"
            data-aos="fade-up"
            :data-aos-delay="800"
            download="ernie-jeash-villahermosa.pdf"
            href="/files/resume.pdf"
          >
            Resume
          </a>
        </div>

        <div class="card__contacts">
          <div
            v-for="(currContact, contactKey) in contacts"
            :key="contactKey"
            class="contacts__item"
            data-aos="fade-up"
            :data-aos-delay="800 + (contactKey * 100)"
          >
            <a
              class="contacts__figure"
              :href="currContact.value"
              target="_blank"
            >
              <img
                class="contacts__img"
                :src="require(`./assets/images/icons/${currContact.img}.png`)"
                alt=""
              >
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="btn-down"
      @click="handleClickScrollDown"
    >
      <img
        src="@/assets/svg/icons/chevron-down-solid.svg"
        alt=""
      >
    </div> -->
  </section>
</template>

<script>

// mixins
import _contacts from '@/assets/js/mixins/contacts'
import _windows from '@/assets/js/mixins/windows'

// assets
import HomeSvgCodeThink from './components/HomeSvgCodeThink'

// libs
import _differenceInCalendarYears from 'date-fns/differenceInCalendarYears'

// const sleep = time => new Promise(resolve => setTimeout(resolve, time))

export default {
  name: 'Home',

  metaInfo: {
    title: process.env.VUE_APP_TITLE,
    titleTemplate: null,
    meta: [
      { vmid: 'home', name: 'home', content: 'Portfolio Home Page of Ernie Jeash' },
      { vmid: 'portfolio', name: 'portfolio', content: 'Portfolio of Ernie Jeash' }
    ]
  },

  components: {
    HomeSvgCodeThink
  },

  mixins: [_contacts, _windows],

  data () {
    return {
      personal: {
        birthday: '1998-07-29'
      },

      title: ''
    }
  },

  computed: {
    age () {
      const today = new Date()
      const bday = new Date(this.personal.birthday)

      return _differenceInCalendarYears(today, bday)
    }
  },

  created () {
    this.initTypeTitle()
  },

  methods: {
    initTypeTitle () {
      const str = ['Ernie Jeash!', 'a Javascript Developer!']
      // const index = 0
      // const isDelete = false

      this.title = str[1]
      // const type = async () => {
      //   this.title = str[index].substr(0, isDelete ? this.title.length - 1 : this.title.length + 1)

      //   if (this.title === str[index]) {
      //     await sleep(2000)
      //     isDelete = true
      //   }

      //   if (this.title === '') {
      //     isDelete = false
      //     index = (index + 1) % str.length
      //   }

      //   setTimeout(type, isDelete ? 100 : 250)
      // }

      // type()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/home.scss';
</style>
