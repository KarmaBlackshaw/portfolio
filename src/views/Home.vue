<template>
  <section
    id="hero"
    class="hero"
  >
    <div class="hero--container">
      <div class="hero--banner-img">
        <svg-code-think
          class="banner"
          data-aos="fade-up"
        />
      </div>

      <div
        class="hero--banner-title"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hi, I'm {{ title }}<span class="cursor">|</span>
      </div>

      <p
        class="hero--banner-subtitle"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        A {{ age }}-year-old web developer based in Cebu, Philippines
      </p>

      <div class="hero--banner-contacts">
        <div
          v-for="(currContact, contactKey) in contacts"
          :key="contactKey"
          class="contacts-item--container"
          data-aos="fade-up"
          :data-aos-delay="600 + (contactKey * 100)"
        >
          <a
            class="contacts-item"
            :href="currContact.value"
            target="_blank"
          >
            <img
              :src="require(`@/assets/svg/${currContact.img}`)"
              alt=""
            >
          </a>
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
import SvgCodeThink from './home/SvgCodeThink'

// libs
import _differenceInCalendarYears from 'date-fns/differenceInCalendarYears'

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

export default {
  name: 'Home',

  components: {
    SvgCodeThink
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
      const str = ['Ernie Jeash!', 'a Javascript Developer!', 'inlove with Marielle Mae']
      let index = 0
      let isDelete = false

      const type = async () => {
        this.title = str[index].substr(0, isDelete ? this.title.length - 1 : this.title.length + 1)

        if (this.title === str[index]) {
          await sleep(2000)
          isDelete = true
        }

        if (this.title === '') {
          isDelete = false
          index = (index + 1) % str.length
        }

        setTimeout(type, isDelete ? 100 : 250)
      }

      type()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/home';
</style>
