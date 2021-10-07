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
          data-aos-delay="200"
          data-aos-duration="1000"
        />
        <!-- <img
          src="@/assets/svg/code-think-css.svg"
          alt=""
        > -->
      </div>

      <div
        class="hero--banner-title"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        {{ title }}<span class="cursor">|</span>
      </div>

      <p
        class="hero--banner-subtitle"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        A {{ age }}-year-old web developer based in Cebu, Philippines
      </p>

      <div
        class="hero--banner-contacts"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <div
          v-for="(currContact, contactKey) in contacts"
          :key="contactKey"
          class="contacts-item--container"
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
      const str = "Hi, I'm Ernie Jeash!"
      let isDelete = false
      const type = () => {
        this.title = str.substr(0, isDelete ? this.title.length - 1 : this.title.length + 1)

        if (this.title === str) {
          isDelete = true
        }

        if (this.title === '') {
          isDelete = false
        }

        setTimeout(type, isDelete ? 100 : 250)
      }

      type()
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

@keyframes stretch {
  40% {
    transform: scale(1.2, 0.5);
    color: #9d9fa3;
  }

  60% {
    transform: scale(0.8, 1.6);
  }

  70% {
    transform: scale(1.1, 0.9);
  }

  80% {
    transform: scale(0.9, 1.3);
  }

  90% {
    transform: scale(1, 0.9);
  }

  0%,
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}

@keyframes blink {
  0%, 100% {
    color: transparent;
  }

  50% {
    color: #fff;
  }
}

.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  background: #0f2027;
  background: radial-gradient(
    circle,
    #35ad89 2%,
    #2c5364 30%,
    #203a43 50%,
    #0f2027,
    $bg-main-dark
  );

  .hero--container {
    max-width: $content-width;

    .hero--banner-img {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      .banner {
        max-height: 200px;
        width: auto;

        @include xs {
          max-height: 130px;
        }
      }
    }

    .hero--banner-title {
      text-align: center;
      font-weight: bold;
      color: #fff;
      font-size: 4em;
      margin-bottom: 20px;
      font-family: "Poppins", sans-serif;

      .cursor {
        animation: blink 1s step-end infinite;
      }
      // span {
      //   display: inline-block;

      //   &:hover {
      //     animation: stretch 0.8s ease-in-out;
      //   }
      // }

      @include xs {
        font-size: 1.7em;
        margin-bottom: 10px;
      }

      @include sm {
        font-size: 3em;
      }
    }

    .hero--banner-subtitle {
      text-align: center;
      font-size: 1em;
      font-weight: light;
      color: rgb(226, 226, 226);
      line-height: 1.8rem;
      margin-bottom: 20px;
    }

    .hero--banner-contacts {
      display: flex;
      justify-content: center;

      .contacts-item--container {
        background: rgba(0,0,0,0.4);
        margin-right: 5px;
        margin-left: 5px;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          .contacts-item {
            transform: scale(1.2);
          }
        }
      }

      .contacts-item {
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 15px;
        }
      }
    }
  }

  .btn-down {
    position: absolute;
    height: 70px;
    width: 70px;
    border: 1px solid white;
    bottom: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: float 6s ease-in-out infinite;

    img {
      height: 30px;
      width: 30px;
    }

    @include xs {
      height: 50px;
      width: 50px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    @include sm {
      height: 60px;
      width: 60px;
      bottom: 20px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    @include md {
      height: 70px;
      width: 70px;
      bottom: 20px;

      img {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
