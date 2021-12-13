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
          class="contacts__figure"
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
import _contacts from '@/assets/js/mixins/contacts'

export default {
  name: 'AppFooter',

  mixins: [_contacts]
}
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0;
  position: absolute;
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
      color: rgb(207, 206, 206);
    }

    .footer-item--contacts {
      display: flex;

      .contacts__figure {
        filter: grayscale(80%);
        transition: all 0.3s ease;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        @include xs {
          filter: grayscale(0%);
        }

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
