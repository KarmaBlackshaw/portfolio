<template>
  <section
    id="footer"
    class="footer"
  >
    <div class="footer--container">
      <div class="footer-item footer-item--name">
        © {{ new Date().getFullYear() }} Ernie Jeash C. Villahermosa.
      </div>

      <div class="footer-item footer-item--contacts">
        <a
          v-for="(currContact, contactKey) in contacts"
          :key="contactKey"
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
  </section>
</template>

<script>
export default {
  name: 'AppFooter',

  data () {
    return {
      contacts: [
        {
          name: 'Email',
          img: 'google-gmail.svg',
          value: 'mailto:irenesejah29@gmail.com'
        },
        {
          name: 'Github',
          img: 'github-icon.svg',
          value: 'https://github.com/KarmaBlackshaw'
        },
        {
          name: 'LinkedIn',
          img: 'linkedin-icon.svg',
          value: 'https://www.linkedin.com/in/ernie-jeash-villahermosa-576187199/'
        },
        {
          name: 'Stackoverflow',
          img: 'stackoverflow-icon.svg',
          value: 'https://stackoverflow.com/users/8749149/karma-blackshaw'
        },
        {
          name: 'Facebook',
          img: 'facebook.svg',
          value: 'https://www.facebook.com/KarmaBlackshaw/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  background-color: $bg-main-dark;

  @include xs {
    height: 80px;
  }

  .footer--container {
    width: 100%;
    max-width: $content-width;
    display: flex;
    height: 100%;
    justify-content: space-between;

    @include xs {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-evenly;
    }

    .footer-item {
      display: flex;
      align-items: center;
    }

    .footer-item--name {
      font-size: 0.7em;
    }

    .footer-item--contacts {
      display: flex;

      .contacts-item {
        filter: grayscale(80%);
        transition: all 0.3s ease;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 20px;
        }

        &:hover {
          transform: scale(1.2);
          filter: grayscale(0%);
        }
      }
    }
  }
}
</style>
