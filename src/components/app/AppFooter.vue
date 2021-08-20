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
          class="contacts-container"
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

  .footer--container {
    width: 100%;
    max-width: $content-width;
    display: flex;
    justify-content: space-between;

    .footer-item {
      display: flex;
      align-items: center;
    }

    .footer-item--name {
      font-size: 0.7em;
    }

    .footer-item--contacts {
      max-width: 50%;
      display: flex;

      .contacts-container {
        filter: grayscale(100%);
        transition: all 0.5s ease;

        img {
          height: 17px;
          margin-left: 20px;
        }

        &:hover {
          filter: grayscale(0%);
        }
      }
    }
  }
}
</style>
